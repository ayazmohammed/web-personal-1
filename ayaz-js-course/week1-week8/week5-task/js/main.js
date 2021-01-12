// links to html

let formAddToList = document.getElementById("form");
let complete = document.querySelector('.doneButton');
let deleteButton = document.querySelector('.deleteButton');
let text = document.querySelector('.text');
let addList = document.querySelector('.list');

// typing in the add to do list 

formAddToList.addEventListener('submit', function(e) {

    e.preventDefault();
    let toDo = formAddToList.text.value.trim();
    console.log(toDo);
    addToList(toDo)
})

//function for the delete & done button

function initList() {
    
    let items = addList.querySelectorAll('li');

    for (var i = 0; i < items.length; i++) {
        items[i].querySelector('.deleteButton').addEventListener('click', function(event) {
            deleteFromList(this.closest('.item'));
        })

        items[i].querySelector('.doneButton').addEventListener('click', function(event) {
            let parents = this.parentElement.parentElement;
            doneJob(parents.querySelector(".text"));
        })

    }
}

// call the function - remove the task from the list or put a line to show its completed 

function deleteFromList(element) {
    element.remove();
}

function doneJob(element) {
    element.style.textDecorationLine = "line-through";
}

//

function addToList (toDoItem){
    let html = `<li class="item">
                    <div class="search-box">
                    <p class="text">${toDoItem}</p>
                    <div class="buttons">
                    <div class="doneButton">Done</div>
                    <div class="deleteButton">Delete</div>
                    </div>
                    </div>
                </li>`;

                addList.insertAdjacentHTML('beforeend', html);

                initList();
}
let form = document.getElementById('form');
let list = document.querySelector('.list');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let value = form.querySelector('input[name="item"]').value;
    addToList(value);
});

initList();

function initList() {
    // For loop through todolist array
    // And add value to list using existing function
    
    let items = list.querySelectorAll('li');

    for (var i = 0; i < items.length; i++) {
        items[i].querySelector('.deleteButton').addEventListener('click', function(event) {
            deleteFromList(this.closest('.item'));
        })
    }
}

function addToList(value, deleteFromList) {

    let html = `<li class="item">
    <div class="search-box">
      <p class="text">${value}</p>
      <div class="buttons">
        <div class="doneButton">Done</div>
        <div class="deleteButton">Delete</div>
      </div>
    </div>
  </li>`;

    list.insertAdjacentHTML('beforeend', html);

    // Add event listen to this specific item
}


function deleteFromList(element) {
    element.remove();
}

function markComplete() {
    // Update ui
}

// $('.list-item').on('click', function() {
//     // Do whatever you want
// })

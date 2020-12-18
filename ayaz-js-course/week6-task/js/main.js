
// links to html

let playlistLi = document.querySelector(".playlistLi");


function clickOnPlayList() {
    
    let PlayListButton = addList.querySelectorAll('li');

    for (var i = 0; i < PlayListButton.length; i++) {
        PlayListButton[i].querySelector('.playlistLi').addEventListener('click', function(element) {
            element.style.color = "red";
           
        })
    }
}

clickOnPlayList();
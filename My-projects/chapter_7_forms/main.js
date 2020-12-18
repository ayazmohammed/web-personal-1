function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
}

// 

// function cta() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

var h = document.getElementById("cta");
h.onclick = function(){alert('test')};

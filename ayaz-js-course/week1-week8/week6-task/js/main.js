fetch("people.json")
.then(response => response.json())
.then(data => {

   
    let contentInfo = document.querySelector('.artistDetails');
    let sidebar = document.getElementById("sidebar");

    

    for (var i =0; i < data.length; i++){

      let li = document.createElement('li');
      li.setAttribute('class', 'playlistLi');

      li.innerHTML = `
                <h2>Artist: `+ data[i]["name"] +`</h2>
                  <p>Album: `+ data[i]["album"] +`</p>
                  <div class="cta" id="`+ data[i]["id"] +`">
                    <span>More Info</span>
                  </div>
      `;

      sidebar.appendChild(li);
      document.getElementById(data[i]["id"]).addEventListener('click',function() {
        playListDetail(this.id);
    });
  
    }

    function playListDetail(artist) {

            let postion = data.findIndex(x=>x.id===artist);
            console.log(postion);
            document.getElementById("imageContainer").innerHTML = '<img src="img/'+data[postion]["image"]+'" alt="'+ data[postion]["name"] +'">'; 
        
        contentInfo.innerHTML = `
                <h2>Artist: `+ data[postion]["name"] +`</h2>
                <p>Album: `+ data[postion]["album"] +`</p>
                <br>
                    <p>`+ data[postion]["description"] +`</p>
                `;
    }

    

});


    // let playlistLi = document.getElementsByClassName("playlistLi");
    // let content = document.getElementsByClassName("content");
    // let ctas = document.querySelectorAll(".cta");


// links to html

// target the cta using a id

// let a1 = document.getElementById("a1");
// let a2 = document.getElementById("a2");
// let a3 = document.getElementById("a3");
// let a4 = document.getElementById("a4");   
/*
let artist = [a1,a2,a3,a4];

for (var i =0; i < artist.length; i++){
    artist[i].addEventListener('click',function() {
        playlistImage(this.id);
    });
}

function playlistImage(image) {
    for (var i =0; i < playlistLi.length; i++){
        console.log(image);
    
        document.getElementById("imageContainer").innerHTML = '<img src="img/'+image+'.jpg" alt="image1">'; 
        
    }    
}
*/

// taget all the ctas

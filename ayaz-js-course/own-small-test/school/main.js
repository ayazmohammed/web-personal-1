fetch("data.json")
.then(response => {
    return response.json();
}).then(data => {
  

    let displayInHtml = document.getElementById("list");
    let button = document.querySelector('.button');
    let senstance = document.getElementById("studnetSen");
    let cta = document.getElementById("cta");
    let veganAnswer = document.getElementById("answer")

  
    button.addEventListener('click',function() {

       function studentsName(){
        console.log(data[i].name + ' goes to kingsway high school');
        // displayInHtml.innerText += `<p>` + data[i].name + ` goes to kingsway high school</p>`;
        displayInHtml.innerHTML += `<ul>` +
                                    '<li>'+ data[i].name + ` goes to kingsway high school</li>` +
                                    `<ul>`


        displayInHtml.style.color = "green";
        displayInHtml.style.listStyleType = "green";
    }


    for(i=0; i <data.length; i++){
        studentsName();
    }

    });


     let studentsName = ['mark', 'simon', 'warren', 'kyle', 'steph'];
    // console.log(studentsName);
     senstance.innerHTML += '<h1>using array with html</h1>' +
                            '<h2>we have ' + studentsName[0] + ' and ' + studentsName[1] + ' in year 7, ' + studentsName[2] + ' and ' + studentsName[3] + ' in year8, and ' + studentsName[4] + ' in year 11.</h2>' ;



    cta.addEventListener('click', function(){
        function findVegan(){       
            
            if(data[i].vegan == 'yes'){
            veganAnswer.innerHTML += '<p>students that are vegan are ' + data[i].name + ' they are in year ' + data[i].year +  '</p>';
        
            console.log('students that are vegan are ' + data[i].name + ' they are in year' + data[i].year)
            }
        }

        for (i = 0; i < data.length; i++){
            findVegan();
        }
    })
    
        
    

    


})
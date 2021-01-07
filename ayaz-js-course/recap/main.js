fetch("results.json")
.then(response => {
    return response.json();
}).then(results => {

    let heading = document.getElementById('tite');
    let cta = document.getElementById('cta');
    let showTable = document.getElementById('table');
    let comment = document.getElementById('needsHelp');

    heading.innerHTML ='<h1>GCSE RESULTS</h1>';

    
    cta.addEventListener('click', function(){
        function ctabutton(){
            showTable.style.display = "flex";

        }
       
       function checkResults(){
        if(results[i].overall == "failed"){
            comment.innerHTML = '<p>'+ results[i].name + ' needs more support </p>'
        }
       }

        ctabutton();
    
    
    

    function resultsOfStudents(){
        showTable.innerHTML += 
                            '<tr>' +
                                '<td>' + results[i].name + '</td>'+
                                '<td>' + results[i].gcse + '</td>'+
                                '<td>' + results[i].overall + '</td>'+
                                '<td>' + results[i].bestgrade + '</td>'+
                            '</tr>'
    }

    for(i=0; i< results.length; i++){

        checkResults();
        
        resultsOfStudents();
    };

})
   
  
        
// object

let car = {
    name : "ford",
    modle : "2015",
    color : "black"
}

console.log(car);

car.name = "bmw";

})

//array

let carMake = ["bmw", "mini", "ford", "saab" ];
console.log(carMake);
carMake.push("mini2")

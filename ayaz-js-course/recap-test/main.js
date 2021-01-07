let designTitle = document.getElementById('designTitle');
        let uxTitle = document.getElementById('uxTitle');
        let designButton = document.getElementById('design');
        let designTeamUl = document.getElementById('design-list');
        let uxButton = document.getElementById('uxd');
        let uxTeamUl = document.getElementById('uxd-list');
        let submitButtons = document.getElementsByClassName('submit');


         // change the text html
         designTitle.innerHTML += 'Design Team';
         designTitle.style.color = "green";
         uxTitle.innerHTML += 'Uxd Team';
         uxTitle.style.color = "blue";
 
         designTeamUl.style.listStyleType = "none";



        //  function designName(data){
        //     if (data[i].team == "design"){
        //         designTeamUl.innerHTML += '<li>'+ data[i].name + '</li>';
        //     }
        // };


        //  function callCta(data){
        //         if(data[i].team == "uxd"){
        //             uxTeamUl.innerHTML += '<li>'+ data[i].name + '</li>';
        //         }
        //     };



            function displayName(element, name){
                element.innerHTML += '<li>'+ name + '</li>';
            };


            let company = {
                name: "activewin",
                staff : 150,
                office : "manchester",
                deparments:["finace " , " uxd", " design", " ppc"]
            }
           
            let office = 'we have ' + company.staff + ' in the offce, with 4 deparments they are ' + company.deparments ;
            console.log(office)
            
            company.deparments = ["finace" , "marcom", "ppc"]
            company.staff = 10;
    
            console.log(company);
    
    
    
            let array = ["tom", "luke", "david", "mark", "adam"];
            
            array[1] = "olly";
            array.pop();
            array.push("jones");
            array.slice(1, 3);
            let newArray = array.slice(1,3);
            console.log(array)
            console.log(newArray)
           
    
//cta

for(let i=0; i < submitButtons.length; i++){
    submitButtons[i].addEventListener('click', function(){

        let buttonId = submitButtons[i].id;
        let list = document.getElementById(buttonId + '-list');

        loadNames(buttonId, list);
    })
}


function loadNames(buttonId,list){

    fetch ("data.json")
    .then(response =>{
        return response .json();
    }).then(data => {

        
        for(let h=0; h < data.length; h++){
            if(buttonId == data[h].team){
                displayName(list, data[h].name)
            }
        } 

    })

}


// designButton.addEventListener('click', function(){

//     fetch ("data.json")
//     .then(response =>{
//         return response .json();
//     }).then(data => {


//         for(i=0; i < data.length; i++){
//             // designName(data);
//             if(data[i].team == "design"){
//                 displayName(designTeamUl, data[i].name);
//             }
//         } 
        
//     })
    
// });


// uxButton.addEventListener('click', function(){

//     fetch ("data.json")
//     .then(response =>{
//         return response .json();
//     }).then(data => {


//         for(i=0; i < data.length; i++){
//             // callCta(data)
//             if(data[i].team == "uxd"){
//                 displayName(uxTeamUl, data[i].name)
//             }
//         }

//         console.log(data)
//     })

    
// });



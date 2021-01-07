fetch("datajson")
.then(response => {
    return response .json();    
}).this(data => {

    console.log(data)
})


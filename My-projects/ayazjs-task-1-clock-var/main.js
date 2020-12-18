let clocks = document.getElementsByClassName("clock");
let timer1 = clocks[0];
let timer2 = clocks[1];
let timer3 = clocks[2];

function clock1 (){
    var date = new Date();
    let timer1 = clocks[0];
    timer1.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

let Interval = setInterval(clock1,1000);


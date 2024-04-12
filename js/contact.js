function submitDetails() {
    alert("Your Message was successfully submitted, We will Contact you soon!");
}

function timer(){
    const date= new Date();
    const time= date.toLocaleTimeString();
    document.getElementById('clock').innerText= time;
}
setInterval(timer, 1000);
timer();

function timerProd1(){
    const date= new Date();
    const time= date.toLocaleTimeString();
    document.getElementById('clock1').innerText= time;
}
setInterval(timerProd1, 1000);
timerProd1();

function timerProd2(){
    const date= new Date();
    const time= date.toLocaleTimeString();
    document.getElementById('clock2').innerText= time;
}
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
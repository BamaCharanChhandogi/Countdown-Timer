let pujadate=new Date('Oct 20,2023').getTime();
let myfunction=setInterval(function(){
    let now=new Date().getTime();
    let timeleft=pujadate-now;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    //update
    document.getElementById('days').innerHTML=days;
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('mins').innerHTML=minutes;
    document.getElementById('secs').innerHTML=seconds;
},1000);
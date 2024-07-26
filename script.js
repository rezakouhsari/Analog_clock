const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');


function clock(){
    let d=new Date();
    let h=d.getHours() * 30;
    let m=d.getMinutes() * 6;
    let s=d.getSeconds() * 6;

    sec.style.transform=`rotate(${s}deg)` ;
    min.style.transform=`rotate(${m}deg)` ;
    hour.style.transform=`rotate(${h}deg)` ;

}

clock();
setInterval(clock, 1000)
const hourelement = document.getElementById("hours");
const minuteselement = document.getElementById("minutes");
const secondselement = document.getElementById("seconds");
const ampmelement = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h=h-12;
        ampm = "PM";
    }

    h= h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;



    hourelement.innerText = h;
    minuteselement.innerText = m;
    secondselement.innerText = s;
    ampmelement, (innerText = ampm);
    setTimeout(() => {
     updateClock()
    }, 1000)
}

updateClock();
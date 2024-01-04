const displayHours = document.getElementById('digital-clock__time--hours');
const displayMinutes = document.getElementById('digital-clock__time--minutes');
const displaySeconds = document.getElementById('digital-clock__time--seconds');
const displayDay = document.getElementById('digital-clock__date--day');

const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

setInterval(()=>{

    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.toLocaleDateString('fr-FR',options);
      seconds = seconds<10?"0"+seconds:seconds;
      minutes = minutes<10?"0"+minutes:minutes;
      hours = hours<10?"0"+hours:hours;

    displayHours.innerHTML=hours;
    displayMinutes.innerHTML=minutes;
    displaySeconds.innerHTML =seconds;
    displayDay.innerHTML = day;

},1000);

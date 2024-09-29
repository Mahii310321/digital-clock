const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const day = document.getElementById("day");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getTimeData(){
    
        let today = new Date();
        let d = today.getDate();
        let m = today.getMonth();
        let y = today.getFullYear();
        let hr = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();
      
        day.innerHTML = `${d} ${months[m]} ${y}`;
        hour.innerText = hr;
        minute.innerText = min;
        second.innerText = sec;
}

setInterval(getTimeData)

// * on page load
getTimeData()
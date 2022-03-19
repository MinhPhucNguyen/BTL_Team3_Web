var get_Day = document.querySelector("#days")
var get_Hours = document.querySelector("#hours")
var get_Minutes = document.querySelector("#minutes")
var get_Second = document.querySelector("#second")

var DateCountDowntext = document.querySelectorAll(".time .time__text")

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime()

function DateofIndex(){
    // Today's date and time
    var now = new Date().getTime()

    var distance = countDownDate - now
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    get_Day.innerText = days
    get_Hours.innerHTML = hours
    get_Minutes.innerHTML = minutes
    get_Second.innerHTML = seconds
}

setInterval(DateofIndex, 1000)
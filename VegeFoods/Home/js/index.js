var get_Day = document.querySelector("#days")
var get_Hours = document.querySelector("#hours")
var get_Minutes = document.querySelector("#minutes")
var get_Second = document.querySelector("#second")
var DateCountDowntext = document.querySelectorAll(".time .time__text")

//Thời gian đếm ngược
var countDownDate = new Date("2023 00:00:00").getTime()

function DateofIndex() {
    //Thời gian hiện tại 
    var now = new Date().getTime()

    var distance = countDownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    get_Day.innerText = days
    get_Hours.innerText = hours
    get_Minutes.innerText = minutes
    get_Second.innerText = seconds
}

setInterval(DateofIndex, 1000)

// Change Slider

var sliderOne = document.querySelector(".slider__item")
var sliderTwo = document.querySelector(".slider__item-2")

setInterval(function changeSlider() {
    sliderOne.classList.toggle("active")
},2000)





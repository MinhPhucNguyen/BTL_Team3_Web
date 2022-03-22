// const headerContainer = document.getElementsByClassName("header__container");
// const linksContainer = document.querySelector(".header__nav");

// window.addEventListener("scroll", function () {
//   const scrollHeight = window.pageYOffset;
//   const navHeight = headerContainer.getBoundingClientRect().height;
//   if (scrollHeight > navHeight) {
//     header.classList.add("fixed-header");
//   } 
//   else {
//     headerContainer.classList.remove("fixed-header");
//   }
// });

// const scrollLinks = document.querySelectorAll(".header__nav--link");
// scrollLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     // prevent default
//     e.preventDefault();
//     // navigate to specific spot
//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);

//     const navHeight = headerContainer.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     const fixedNav = headerContainer.classList.contains("fixed-header");
//     let position = element.offsetTop - navHeight;

//     if (!fixedNav) {
//       position = position - navHeight;
//     }
//     if (navHeight > 82) {
//       position = position + containerHeight;
//     }

//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     // close
//     linksContainer.style.height = 0;
//   });
// });


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
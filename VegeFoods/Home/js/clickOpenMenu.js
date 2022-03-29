// Show header
var headerContainer = document.querySelector(".header__container")
var mobileMenu = document.querySelector(".menu-btn")
var headerNavItem = document.querySelector(".header__nav--item")

mobileMenu.onclick = function() {
    var close = headerContainer.clientHeight === 60
    if(close){
        headerContainer.style.height = "auto"
    }
    else{
        headerContainer.style.height = "60px"
        headerContainer.style.overflow = "hidden"
    }
}

var headerResponsive = document.querySelector(".dropdown")
var subMenu = document.querySelector(".shop__sub--menu")

// headerResponsive.onclick = function() {
//     subMenu.classList.toggle("shop__sub--menu")
// }

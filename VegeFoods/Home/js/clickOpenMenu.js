// Show header
var headerContainer = document.querySelector(".header__container")
var mobileMenu = document.querySelector(".menu-btn")

mobileMenu.onclick = function() {
    var close = headerContainer.clientHeight 
    if(close === 60){
        headerContainer.style.height = "auto"
    }
    else{
        headerContainer.style.height = "60px"
        headerContainer.style.overflow = "hidden"
    }
}

// Header fixed
var getHeaderElement = document.querySelector("#header")

function performHeader() {
    document.onscroll = function() {
        const scrollHeight = window.scrollY

        if (scrollHeight > 400) {
            getHeaderElement.style.position = "fixed"
            getHeaderElement.style.zIndex = "3"
            getHeaderElement.style.backgroundColor = "white"
        } 
        else if (scrollHeight < 400) {
            getHeaderElement.style.position = "unset"
        }
    }
}

performHeader()
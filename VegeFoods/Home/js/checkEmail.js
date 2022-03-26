//Checl Email
var getSubmitElement = document.querySelector(".Submit")
var statusOfEmail = document.querySelector("#statusOfEmail")

function checkEmail() {
    var getInputEmail = document.querySelector(".form__control")
    var emailRegex = /[A-Z0-9._%+-]+@gmail\.com/igm;
    if(emailRegex.test(getInputEmail.value)){
        statusOfEmail.textContent = "*Your Email is valid"
        statusOfEmail.style.color = "#82AE46"
    }
    else{
        statusOfEmail.textContent = "*Your Email is not valid"
        statusOfEmail.style.color = "red"
    }
}

getSubmitElement.addEventListener("click", function (e) {
    e.preventDefault()
    checkEmail()
})
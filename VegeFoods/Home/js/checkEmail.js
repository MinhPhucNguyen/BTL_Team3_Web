//Checl Email
var getSubmitElement = document.querySelector(".Submit")
var statusOfEmali = document.querySelector("#statusOfEmali")

function checkEmail() {
    var getInputEmail = document.querySelector(".form__control")
    var emailRegex = /[A-Z0-9._%+-]+@gmail\.com/igm;
    if(emailRegex.test(getInputEmail.value)){
        statusOfEmali.textContent = "*Your Email is valid"
        statusOfEmali.style.color = "#82AE46"
    }
    else{
        statusOfEmali.textContent = "*Your Email is not valid"
        statusOfEmali.style.color = "red"
    }
}

getSubmitElement.addEventListener("click", function () {
    checkEmail()
})
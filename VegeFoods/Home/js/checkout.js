// Check FirstName
var statusOfFirstName = document.querySelector("#statusOfFirstname")
var firstName = document.querySelector("#txtFirstname")
function checkFirstname() {
    var firstNameRegex = /^[a-zA-_-]{3,16}$/
    if(firstNameRegex.test(firstName.value)){
        statusOfFirstName.textContent = "*Valid"
        statusOfFirstName.style.color = "#82AE46"
    }
    else{
        statusOfFirstName.textContent = "*Invalid"
        statusOfFirstName.style.color = "red"
    }
}

firstName.addEventListener("focusout", function(e) {
    e.preventDefault()
    checkFirstname()
})


// Check LastName
var statusOfLastName = document.querySelector("#statusOfLastname")
var lastName = document.querySelector("#txtLastname")
function checkLastname() {
    var lastNameRegex = /^[a-zA-_- ]{3,30}$/
    if(lastNameRegex.test(lastName.value)){
        statusOfLastName.textContent = "*Valid"
        statusOfLastName.style.color = "#82AE46"
    }
    else{
        statusOfLastName.textContent = "*Invalid"
        statusOfLastName.style.color = "red"
    }
}

lastName.addEventListener("focusout", function(e) {
    e.preventDefault()
    checkLastname()
})

// Choose Country
var country = document.querySelector("#txtCountry")
var statusOfCountry = document.querySelector("#statusOfCountry")
function checkChooseCountry() {
    var countryOption = country.options[country.selectedIndex].text
    if(countryOption == "(Choose your country)"){
        statusOfCountry.textContent = "*Please select a country"
        statusOfCountry.style.color = "red"
    }
    else{
        statusOfCountry.textContent = "*Valid"
        statusOfCountry.style.color = "#82AE46"
    }
}

country.addEventListener("focusout", function(e) {
    e.preventDefault()
    checkChooseCountry()
})


// Check Addrress
var statusOfAddress = document.querySelector("#statusOfAddress")
var address = document.querySelector("#txtAddress")
function checkAddress() {
    var addressRegex = /^(?:\w+\.?,?\s?){1,60}$/igm;
    if(addressRegex.test(address.value)){
         statusOfAddress.textContent = "*Valid"
         statusOfAddress.style.color = "#82AE46"
    }
    else{
         statusOfAddress.textContent = "*Invalid"
         statusOfAddress.style.color = "red"
    }
}

address.addEventListener("focusout", function(e) {
    e.preventDefault()
    checkAddress()
})

//Check postcode
var statusOfPostcode = document.querySelector("#statusOfPostcode")
var postCode = document.querySelector("#txtPostcode") 
function checkPostCode() {
    var postCodeRegex = /[0-9]/g;
    if(postCodeRegex.test(postCode.value)){
       statusOfPostcode.textContent = "*Valid"
       statusOfPostcode.style.color = "#82AE46"
    }
    else{
       statusOfPostcode.textContent = "*Invalid"
       statusOfPostcode.style.color = "red"
    }
}

postCode.addEventListener("focusout", function(e) {
    e.preventDefault()
    checkPostCode()
})


//Check phone number
var statusOfPhonenumber = document.querySelector("#statusOfPhonenumber")
var phoneNumber = document.querySelector("#txtPhoneNumber") 
function checkPhoneNumber() {
    var phoneNumberRegex = /[0-9]/g;
    if(phoneNumberRegex.test(phoneNumber.value)){
      statusOfPhonenumber.textContent = "*Valid"
      statusOfPhonenumber.style.color = "#82AE46"
    }
    else{
      statusOfPhonenumber.textContent = "*Invalid"
      statusOfPhonenumber.style.color = "red"
    }
}

phoneNumber.addEventListener("focusout", function(e) {
    e.preventDefault()
    checkPhoneNumber() 
})

//Check email
var statusOfEmail = document.querySelector("#statusOfEmail")
var email = document.querySelector("#txtEmail") 
function checkEmail() {
    var emailRegex = /[A-Z0-9._%+-]+@gmail\.com/igm;
    if(emailRegex.test(email.value)){
        statusOfEmail.textContent = "*Valid"
        statusOfEmail.style.color = "#82AE46"
    }
    else{
        statusOfEmail.textContent = "*Invalid"
        statusOfEmail.style.color = "red"
    }
}

email.addEventListener("focusout", function(e) {
    e.preventDefault()
    checkEmail()
})
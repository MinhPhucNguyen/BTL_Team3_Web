// Check ID
var statusOfID = document.querySelector(".statusOfID")
var ID = document.querySelector(".ID__name-product")

function checkID() {
    var IDRegex = /[0-9]/g;
    if(IDRegex.test(ID.value)){
        statusOfID.textContent = "*Valid"
        statusOfID.style.color = "#82AE46"
    }
    else{
        statusOfID.textContent = "*Invalid"
        statusOfID.style.color = "red"
    }
}

ID.addEventListener("focusout",function(e) {
    e.preventDefault()
    checkID() 
})

// Check Product Name
var statusOfNameProduct = document.querySelector(".statusOfNameProduct")
var nameProduct = document.querySelector(".input__name-product")

function checkNameProduct() {
    var NameRegex = /^[A-Z][-a-zA-Z" "]+$/g;
    if(NameRegex.test(nameProduct.value)){
        statusOfNameProduct.textContent = "*Valid"
        statusOfNameProduct.style.color = "#82AE46"
    }
    else{
        statusOfNameProduct.textContent = "*Invalid"
        statusOfNameProduct.style.color = "red"
    }
}

nameProduct.addEventListener("focusout",function(e) {
    e.preventDefault()
    checkNameProduct() 
})

// Check Price
var statusOfPrice = document.querySelector(".statusOfPrice") 
var Price = document.querySelector(".input__price-product")

function checkPrice() {
    var PriceRegex = /^\d+(.\d{1,4})?$/;
    if(PriceRegex.test(Price.value)){
        statusOfPrice.textContent = "*Valid"
        statusOfPrice.style.color = "#82AE46"
    }
    else{
        statusOfPrice.textContent = "*Invalid"
        statusOfPrice.style.color = "red"
    }
}

Price.addEventListener("focusout",function(e) {
    e.preventDefault()
    checkPrice() 
})

// Check Promotional Price
var statusOfPromotionalPrice = document.querySelector(".statusOfPromotionalPrice")
var PromotionalPrice = document.querySelector(".input__promotional-price-product")

function checkPromotionalPrice() {
    var PromotionalPriceRegex = /^\d+(.\d{1,4})?$/;
    if(PromotionalPriceRegex.test(PromotionalPrice.value)){
        statusOfPromotionalPrice.textContent = "*Valid"
        statusOfPromotionalPrice.style.color = "#82AE46"
    }
    else{
        statusOfPromotionalPrice.textContent = "*Invalid"
        statusOfPromotionalPrice.style.color = "red"
    }
}

PromotionalPrice.addEventListener("focusout",function(e) {
    e.preventDefault()
    checkPromotionalPrice()
})



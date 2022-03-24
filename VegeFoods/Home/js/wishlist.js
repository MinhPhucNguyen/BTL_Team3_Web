var listPrice = document.querySelector(".product__price .price");
var listQuantity = document.querySelector(".input__group input[type=text]");
var listTotal = document.querySelector(".total span");

var listTr = document.querySelectorAll("tr")


function setTotal() {
    var getPrice = parseFloat(listPrice.innerText)
    var getQuantity = listQuantity.value
    var setTotal = (Math.round((getPrice * getQuantity)*100)/100).toFixed(2)
    listTotal.innerHTML = setTotal
}

setTotal()

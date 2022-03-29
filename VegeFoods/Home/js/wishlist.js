var listPrice = document.querySelector(".product__price .price");
var listQuantity = document.querySelector(".input__group input[type=text]");

var listTr = document.querySelectorAll("tbody tr")


function setTotal() {
    listTr.forEach(function(item, index) {
        const getPrice = parseFloat(item.querySelector(".product__price .price").innerText)      
        const getQuantity = parseFloat(item.querySelector('.input__group input[type=text]').value)
        const listTotal = item.querySelector(".total span");
        const total = (Math.round((getPrice * getQuantity)*100)/100).toFixed(2)
        listTotal.innerText = total
        console.log(listTotal.innerText)
    })
}

setTotal()



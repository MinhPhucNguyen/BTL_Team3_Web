var listPrice = document.querySelector(".product__price .price");
var listQuantity = document.querySelector(".input__group input[type=text]");

var listTr = document.querySelectorAll("tbody tr")


function setTotal() {
    listTr.forEach(function(item, index) {
        const getPrice = parseFloat(item.querySelector(".product__price .price").innerText)
        console.log(getPrice)        
        const getQuantity = parseFloat(item.querySelector('.input__group input[type=text]').value)
        console.log(getQuantity)
        const listTotal = item.querySelector(".total span");
        console.log(listTotal)
        const total = (Math.round((getPrice * getQuantity)*100)/100).toFixed(2)
        console.log(total)
        listTotal.innerText = total
        if(getQuantity === " ") {
            listTotal.innerText = 0
        }
    })
}

setTotal()


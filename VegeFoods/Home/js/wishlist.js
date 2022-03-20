var listPrice = document.querySelectorAll(".product__price .price");
var listQuantity = document.querySelectorAll(".input__group input[type=text]");
var listTotal = document.querySelectorAll(".total span");

var listTr = document.querySelectorAll("tr")


const setTotal = ()=>{
    listTr.forEach(function(item){
        let get_price = parseFloat(item.querySelector(".product__price .price").innerText) 
        console.log(item.querySelector(".product__price .price"))
        let get_quantity = item.querySelector(".input__group input[type=text]").value
        console.log(get_quantity)
        let total = item.querySelector(".total span") 
        total.innerText = (Math.round((get_price * get_quantity)*100)/100).toFixed(2)
    })
}

setTotal()

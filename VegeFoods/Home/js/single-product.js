var quantity = document.querySelector("#quantity")

function increaseNumber() {
    var value = parseInt(quantity.value, 10);
    value = isNaN(value)? 0 : value;
    value++
    quantity.value = value
}

function decreaseNumber() {
    var value = parseInt(quantity.value, 10);
    value = isNaN(value)? 0 : value;
    value < 1 ? value = 1 : " "; 
    value--
    quantity.value = value
}
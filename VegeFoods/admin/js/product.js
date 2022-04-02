const tbodyElement = document.querySelector('.table tbody')
const idInput = document.querySelector('.ID__name-product')
const nameInput = document.querySelector('.input__name-product')
const priceInput = document.querySelector('.input__price-product')
const quantityInput = document.querySelector('.input__promotional-price-product')
const saveBtn = document.querySelector('.save-btn')

// const idValue = idInput.value
// const nameValue = nameInput.value 
// const priceValue = priceInput.value 
// const quantityValue = quantityInput.value   


const listProduct = []

function add() {
    const product = {
        id: idInput.value,
        name: nameInput.value ,
        price: priceInput.value ,
        quantity: quantityInput.value 
    }
    
    listProduct.push(product)
    console.log(listProduct)
}

function show() {
    listProduct.forEach(function(product) {
        tbodyElement.innerHTML = `<tr class="tr2 tr-similar">
                                <td>${product.id}</td>
                                <td></td>
                                <td>${product.name}</td>
                                <td>${product.price}</td>
                                <td>${product.quantity}</td>
                                <td>
                                    <div class="delete">
                                        <i class="fa-solid fa-circle-xmark"></i>
                                    </div>
                                </td>
                                `
    })
}

saveBtn.onclick = function() {
    editWrapper.classList.add("wrapper-none")
    add() 
    show()       
}



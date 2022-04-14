const tbodyElement = document.querySelector('.table tbody')
const idInput = document.querySelector('.ID__name-product')
const nameInput = document.querySelector('.input__name-product')
const priceInput = document.querySelector('.input__price-product')
const quantityInput = document.querySelector('.input__promotional-price-product')
const saveBtn = document.querySelector('.save-btn')
const deleteAllBtn = document.querySelector('.button-delete')
console.log(deleteAllBtn)

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
    var tbody = ``
    listProduct.forEach(function(product) {
        tbody += `<tr class="tr2 tr-similar">
        <td>${product.id}</td>
        <td></td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>
            <div class="edit-wrap">
                <div class="delete" onclick = "deleteItem(${product.id})">
                    <i class="fa-solid fa-circle-xmark"></i>
                </div>
                <div class="edit">
                    <i class="fa-solid fa-marker"></i>
                </div>
            </div>
        </td>
        `
        tbodyElement.innerHTML = tbody
    })
}

function clear() {
   idInput.value = ""
   nameInput.value = ""
   priceInput.value = ""
   quantityInput.value = ""
}

function deleteItem(ID) {
    for(let i in listProduct) {
        if(listProduct[i].id == ID) {
            listProduct.splice(i,1)
            show()
        }
    }
    console.log(ID)
}

saveBtn.onclick = function() {
    editWrapper.classList.add("wrapper-none")
    add() 
    show()      
    clear() 
}

deleteAllBtn.onclick = function() {
    tbodyElement.innerHTML = ""
}




console.log(123)
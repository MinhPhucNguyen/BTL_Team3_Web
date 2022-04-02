// Open Image Modal
var imageModal = document.querySelector(".modal__add-img")
var openModalBtn = document.querySelector(".add__img-btn")
var modalContainer = document.querySelector(".modal-container")
var addImg = document.querySelector(".add__img")
var closeIconModal = document.querySelector(".modal-close-icon")

function toggleModal() {
    imageModal.classList.toggle("hide")
}

closeIconModal.addEventListener("click", function() {
    toggleModal()
})

addImg.addEventListener("click",function() {
    toggleModal()
})

openModalBtn.addEventListener("click",function(){
    toggleModal()
})

imageModal.addEventListener("click", function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})


// Open Edit Product
var editWrapper = document.querySelector(".edit-wrapper")
var editBtn = document.querySelector(".button-add")
var backBtn = document.querySelector(".return__btn")
function editProductToggle() {
    editWrapper.classList.toggle("wrapper-none")
}

backBtn.addEventListener("click",function () {
    editProductToggle() 
})

editBtn.addEventListener("click", function(){
    editProductToggle() 
})

editWrapper.addEventListener("click", function(e) {
    if(e.target == e.currentTarget){
        editProductToggle()
    }
})





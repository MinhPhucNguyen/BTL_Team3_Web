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
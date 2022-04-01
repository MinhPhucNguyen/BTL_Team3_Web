var imageModal = document.querySelector(".modal__add-img")
var openModalBtn = document.querySelector(".add__img-btn")
var modalContainer = document.querySelector(".modal-container")

function toggleModal() {
    imageModal.classList.toggle("hide")
}

openModalBtn.addEventListener("click",function(){
    toggleModal()
})

imageModal.addEventListener("click", function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})
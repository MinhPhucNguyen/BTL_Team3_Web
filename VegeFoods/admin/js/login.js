var button = document.querySelector('.form-submit')
const nameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

const localName = localStorage.getItem('name')
const localPassword = localStorage.getItem('password')


button.addEventListener('click', function(e) {
    e.preventDefault()
    if (nameInput.value === localName && passwordInput.value === localPassword) {
        location.assign('http://127.0.0.1:5500/admin/dashboard.html')
    } else {
        alert("Re-enter username and password")
    }
})

window.addEventListener('keydown', function(e) {
<<<<<<< HEAD
    if(e.which === 13) {
=======
    if (e.which === 13) {
>>>>>>> 4c2c4a91f8f454d756fcd39f14b3f779b8743672
        location.assign('http://127.0.0.1:5500/admin/dashboard.html')
    }
})
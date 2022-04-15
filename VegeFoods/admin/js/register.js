const button = document.querySelector('.form-submit')
const nameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')


button.addEventListener('click', function(e) {
    e.preventDefault()
    alert("You have successfully registered!")
    location.assign('http://127.0.0.1:5500/admin/login.html')
    localStorage.setItem('name', nameInput.value)
    localStorage.setItem('password', passwordInput.value)
})
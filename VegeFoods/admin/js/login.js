var button = document.querySelector('.form-submit')
const nameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

const localName = localStorage.getItem('name')
const localPassword = localStorage.getItem('password')


button.addEventListener('click', function(e) {
    e.preventDefault()
    if(nameInput.value === localName && passwordInput.value === localPassword) {
        location.assign('http://127.0.0.1:5500/dashboard.html')
    } else {
        alert("Nhập lại tài khoản và mật khẩu")
    }
})


<<<<<<< HEAD
=======
// localStorage.setItem('username', 'Nguyen Xuan Minh')
// localStorage.setItem('password', '123456')
>>>>>>> 4e00ce051eac7421ac6421bfe74bfebc6f307071

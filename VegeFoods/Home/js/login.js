var nameValue = document.querySelector('#fullname').value
var passwordValue = document.querySelector('#password').value
var button = document.querySelector('button')
var formMessage1 = document.querySelector('.form-message1')
var formMessage2 = document.querySelector('.form-message2')
var formID = document.getElementById('form-1')


localStorage.setItem('username', 'Nguyen Xuan Minh')
localStorage.setItem('password', '123456')

const localName = localStorage.getItem('username')
const localPassword = localStorage.getItem('password')


// button.addEventListener('click', function(e) {
//     e.preventDefault()
//     if(nameValue === localName && passwordValue === localPassword) {
//         window.location.assign('123.html')
//     }
// })
function changePage() {
    window.location.assign('http://127.0.0.1:5500/contact.html')
}
// changePage()

// formID.onsubmit = function() {
//     if(nameValue === localName && passwordValue === localPassword) {
//         window.location.assign('http://127.0.0.1:5500/contact.html')    }
// }





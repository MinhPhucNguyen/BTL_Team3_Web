var listCounterup = document.querySelectorAll('.counter-up')

function counter(el) {
    var numberEl = el.querySelector('.number')
    var to = parseInt(numberEl.innerText)
    var count = 0
    var time = 1000;
    var step = to / time
    var counting = setInterval(function() {
        count += step
        if(count > to) {
            clearInterval(counting)
            numberEl.innerText = to
        } else {
            numberEl.innerText = Math.ceil(count)
        }
    }, 1)
}

listCounterup.forEach(function(item) {
    counter(item)
})


var circle = document.querySelectorAll('.circle')
circle.forEach(function(item) {
    item.addEventListener('click', function() {
        
    })
})



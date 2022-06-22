'use strict'

let hoverArea = document.getElementById('hoverArea')
let hoverEls = document.getElementsByClassName('hoverHighlight')

hoverArea.addEventListener('mouseenter', function () {
    for (let el of hoverEls) {
        el.style.backgroundColor = 'yellow'
    }
})

hoverArea.addEventListener('mouseout', function () {
    for (let el of hoverEls) {
        el.style.backgroundColor = ''
    }
})

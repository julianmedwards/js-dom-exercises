'use strict'

function delayedBGColorChange() {
    setTimeout(function () {
        document.getElementById('two').style.backgroundColor = '#89CFF0'
    }, 3500)
}

delayedBGColorChange()

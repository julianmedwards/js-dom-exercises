'use strict'

let form = document.forms.MyForm
form.addEventListener('submit', function (event) {
    event.preventDefault()
    let radius = Number(this.radius.value)

    let result = (4 / 3) * Math.PI * Math.pow(radius, 3)
    result = result.toFixed(3)

    this.volume.value = result
    form.radius.focus()
})

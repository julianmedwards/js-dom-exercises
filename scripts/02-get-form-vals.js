'use strict'

function getFormValue() {
    event.preventDefault()
    let form = document.getElementById('form1')
    console.log('First name: ' + form.fname.value)
    console.log('Last name: ' + form.lname.value)
}

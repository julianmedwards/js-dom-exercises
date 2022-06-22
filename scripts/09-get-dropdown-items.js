'use strict'

function getOptions() {
    let dropdown = document.getElementById('mySelect')
    if (dropdown.childElementCount > 0) {
        let optionArr = []
        for (let option of dropdown.options) {
            optionArr.push(option.value)
        }
        alert(
            'Number of options: ' +
                optionArr.length +
                '\nOptions: ' +
                optionArr.join(', ')
        )
    } else {
        alert('There are no options!')
    }
}

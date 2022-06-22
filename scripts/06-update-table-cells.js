'use strict'

function changeContent() {
    let form = document.getElementById('table-form')
    let row = form['row-num'].value
    let col = form['column-num'].value
    let newText = form['cell-text'].value

    let tbody = document.getElementById('myTable').firstElementChild

    let trow = tbody.children[row - 1]
    if (trow) {
        let tcol = trow.children[col - 1]
        if (tcol) {
            tcol.textContent = newText
        } else {
            alert('There is no such column!')
        }
    } else {
        alert('There is no such row!')
    }
}

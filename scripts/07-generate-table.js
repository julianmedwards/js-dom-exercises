'use strict'

function createTable(event) {
    let form = event.target.parentElement
    let rows = form.rows.value
    let cols = form.cols.value
    if (!rows || !cols) {
        alert('Please enter a number of rows and columns.')
        return false
    }

    let table = document.createElement('table')
    table.border = '1'
    table.style.margin = '1em'
    let tableBody = document.createElement('tbody')
    for (let i = 0; i < rows; i++) {
        let rowEl = document.createElement('tr')
        let rowNum = i + 1
        for (let i = 0; i < cols; i++) {
            let cell = document.createElement('td')
            cell.textContent = 'Row ' + rowNum + ',' + 'Col ' + (i + 1)
            rowEl.append(cell)
        }
        tableBody.append(rowEl)
    }

    table.append(tableBody)
    form.before(table)

    form.reset()
    form.rows.focus()
}

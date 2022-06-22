'use strict'

function insert_Row() {
    let table = document.getElementById('sampleTable')
    let tbody = table.firstElementChild
    for (let i = 0; i < tbody.children.length; i++) {
        console.log(tbody.children[i])
        var newRowNum = i + 1
    }
    console.log(newRowNum)
    let newRow = document.createElement('tr')
    let newCell = document.createElement('td')
    newCell.textContent = 'Row' + newRowNum + ' cell1'
    newRow.append(newCell)
    tbody.append(newRow)
}

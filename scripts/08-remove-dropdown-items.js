'use strict'

function removecolor() {
    let dropdown = document.getElementById('colorSelect')
    if (dropdown.childElementCount > 0) {
        dropdown.remove(dropdown.selectedIndex)
    } else {
        alert('No more options to delete!')
    }
}

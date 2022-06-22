'use strict'

function getAttributes() {
    let hyperLink = document.getElementById('w3r')
    let attrs = []
    attrs.push(hyperLink.getAttribute('href'))
    attrs.push(hyperLink.getAttribute('hreflang'))
    attrs.push(hyperLink.getAttribute('rel'))
    attrs.push(hyperLink.getAttribute('target'))
    attrs.push(hyperLink.getAttribute('type'))

    for (let attr of attrs) {
        console.log(attr)
    }
}

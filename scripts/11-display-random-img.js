'use strict'

let imgform = document.forms.imgForm

let images = {
    image1: {
        src: 'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg',
        width: '240',
        height: '160',
    },
    image2: {
        src: 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg',
        width: '320',
        height: '195',
    },
    image3: {
        src: 'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg',
        width: '500',
        height: '343',
    },
}

imgForm.lastElementChild.addEventListener('click', function () {
    if (!document.body.children.image) {
        var imgEl = document.createElement('img')
        imgEl.id = 'image'
        document.forms.imgForm.after(imgEl)
    } else {
        imgEl = document.body.children.image
    }

    let randImgIndex = Math.floor(Math.random() * 3)
    let image = Object.keys(images)[randImgIndex]
    let imageData = images[image]
    imgEl.setAttribute('src', imageData.src)
    imgEl.setAttribute('width', imageData.width)
    imgEl.setAttribute('height', imageData.height)
})

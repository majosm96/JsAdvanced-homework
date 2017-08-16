var galleryConfig = {
    srcArray: ['img/img_01.jpg','img/img_02.jpg','img/img_03.jpg', 'img/img_04.jpg'],
    img : document.getElementById('img'),
    btnNext: document.getElementById('next'),
    btnPrev: document.getElementById('prev'),
}

var gallery = new Gallery(galleryConfig);
gallery.init();


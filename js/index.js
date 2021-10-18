let imagesCarousel = document.getElementsByClassName("imgCarousel");
let index = imagesCarousel.length;
let time = 0;

function showImage() {
    if (index > 1) {
        index--;
        imagesCarousel[index].style.opacity = 0;
    }
    else {
        imagesCarousel[imagesCarousel.length - 1].style.opacity = 1;
        reloadImage();
        index = imagesCarousel.length;
        time = 0;
    }
}
function loopImage() {
    setTimeout(function() {
        showImage();
        time++;
        if (time < 10) {
            loopImage();
        }            
    }, 10000);
}
function reloadImage() {
    for(let i = 0; i < imagesCarousel.length; i++) {
        imagesCarousel[i].style.opacity = 1;
    }
}
function clicRight() {
    imagesCarousel[index].classList.toogle("isDone");
    index--;
    imagesCarousel[index].classList.toogle("isDone");
}
function clicLeft() {
    index++;
    imagesCarousel[index].classList.toogle("isDone");
}

loopImage();
// this.classList.toggle("isDone")

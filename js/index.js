let imagesCarousel = document.getElementsByClassName("imgCarousel");
let index = imagesCarousel.length;
let delay;
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

loopImage();
// this.classList.toggle("isDone")

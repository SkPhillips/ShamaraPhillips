// nmobile navbar variables //

const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");


// carousel variables //

const slides = document.getElementsByClassName("carousel-item");

let slidePosition = 0;

const totalSlides = slides.length;

const next = document.getElementById("carousel-button-next")
const previous = document.getElementById("carousel-button-prev")



// mobile navbar //
open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})





// carousel navigation //

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

// btn-right //
next.addEventListener("click", function moveToNextSlide() {

    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;

    } else {
        slidePosition++;

    }

    slides[slidePosition].classList.add("carousel-item-visible");
});

// btn-left //

previous.addEventListener("click", function moveToPrevSlide() {

    hideAllSlides();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");


});












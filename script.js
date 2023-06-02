


// Mobile Navbar //
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    // Set nav active status with boolean
    let isActive = false;
    console.log("nav-active : " + isActive)
    

    burger.addEventListener("click", ()=>{

        //Toggle nav
        nav.classList.toggle("nav-active");

        // Toggle nav active status to true/false
        isActive = !isActive;
        console.log("nav-active : " + isActive)
        
        //Animate link
        navLinks.forEach((link, index)=>{
            if(isActive) {
                link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
                console.log("nav li: "+ index + " in");
            } else {
                // link.style.animation = "";
                link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
                // link.style.animation = "";
                console.log("nav li: "+ index + " out");
            }
            console.log(link.style.animation);
        });
        
        //Burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();





// carousel variables //

const slides = document.getElementsByClassName("carousel-item");

let slidePosition = 0;

const totalSlides = slides.length;

const next = document.getElementById("carousel-button-next")
const previous = document.getElementById("carousel-button-prev")


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










const slides = document.querySelectorAll(".gallery-item");
const slideContainer = document.querySelector(".slide-container");
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});

function updateSlider() {
    slideContainer.style.transform = `translateX(${-index * 100}%)`;
}


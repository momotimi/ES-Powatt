
const bg = document.querySelector(".hero-bg");

const images = [
    "../dryerpictures/dryer 1.png",
    "../dryerpictures/dryer 2.png",
    "../dryerpictures/dryer 3.png",
    "../dryerpictures/dryer 4.png"
];

let index = 0;
const interval = 5000;
const fadeTime = 1000;

// Initial image
bg.style.backgroundImage = `url("${images[index]}")`;

setInterval(() => {
    bg.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        bg.style.backgroundImage = `url("${images[index]}")`;
        bg.style.opacity = 1;
    }, fadeTime);

}, interval);
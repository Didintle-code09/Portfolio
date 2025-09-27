let angle = 0;
const carousel = document.getElementById("carousel");

function rotateCarousel(direction) {
  angle += direction * 60; 
  carousel.style.transform = `rotateY(${angle}deg)`;
}

setInterval(() => rotateCarousel(1), 3000); 

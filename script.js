// Obtener referencia a los elementos del carrusel
const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.children);

// Configurar variables
let currentSlide = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

// Función para mover el carrusel
function moveToSlide(index) {
  carousel.style.transform = `translateX(${-index * slideWidth}px)`;
  currentSlide = index;
}

// Escuchar eventos de botón para navegar por el carrusel
document.querySelector('.prev').addEventListener('click', () => {
  if (currentSlide > 0) {
    moveToSlide(currentSlide - 1);
  } else {
    moveToSlide(slides.length - 1);
  }
});

document.querySelector('.next').addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    moveToSlide(currentSlide + 1);
  } else {
    moveToSlide(0);
  }
});

// Opcional: Autoplay
let intervalId = setInterval(() => {
  moveToSlide((currentSlide + 1) % slides.length);
}, 3000);

// Detener autoplay al pasar el mouse sobre el carrusel
carousel.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

// Reanudar autoplay al quitar el mouse del carrusel
carousel.addEventListener('mouseleave', () => {
  intervalId = setInterval(() => {
    moveToSlide((currentSlide + 1) % slides.length);
  }, 3000);
});

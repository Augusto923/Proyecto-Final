// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el ícono de hamburguesa (el enlace con id 'menu-toggle')
    const menuToggle = document.getElementById('menu-toggle');
    
    // Obtiene el contenedor del menú de navegación (el <nav>)
    const nav = document.querySelector('nav');
    
    // Verifica si el menú hamburguesa y el contenedor del menú existen
    if (menuToggle && nav) {
        // Añade un evento de clic al ícono de hamburguesa
        menuToggle.addEventListener('click', function (e) {
            e.preventDefault();  // Previene que el enlace haga algo, solo manipulamos el menú

            // Alterna la clase 'active' en el contenedor <nav>
            nav.classList.toggle('active');
        });
    }
});

const sliderContainer = document.querySelector('.slider-container');
const productList = document.querySelector('.lista-otros-productos');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

// Control del desplazamiento
let currentTranslate = 0;
const productWidth = productList.firstElementChild.offsetWidth + 16; // Ancho del producto + gap
const maxTranslate = productList.scrollWidth - sliderContainer.offsetWidth;

// Funciones para mover el slider
function slideNext() {
    currentTranslate -= productWidth;
    if (Math.abs(currentTranslate) > maxTranslate) {
        currentTranslate = -maxTranslate; // Límite máximo
    }
    productList.style.transform = `translateX(${currentTranslate}px)`;
}

function slidePrev() {
    currentTranslate += productWidth;
    if (currentTranslate > 0) {
        currentTranslate = 0; // Límite mínimo
    }
    productList.style.transform = `translateX(${currentTranslate}px)`;
}

// Eventos para los botones
nextButton.addEventListener('click', slideNext);
prevButton.addEventListener('click', slidePrev);

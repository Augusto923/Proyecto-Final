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

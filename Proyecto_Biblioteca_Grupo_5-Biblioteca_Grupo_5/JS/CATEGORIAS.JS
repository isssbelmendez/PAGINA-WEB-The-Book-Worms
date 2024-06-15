/*/////////////////////////////////////////////////////JS DE SLIDER//////////////////////////////////////////*/ 
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
        const query = searchInput.value.trim().toLowerCase();

        if (query) {
            // Redirigir a diferentes páginas según el término de búsqueda
            if (query.includes("categorías") || query.includes("categorias")) {
                window.location.href = "CATEGORIAS.html";
            } else if (query.includes("inicio")) {
                window.location.href = "index.html"; // Suponiendo que la página de inicio es index.html
            } else if (query.includes("autores")) {
                window.location.href = "AUTORES.html"; // Cambia esto a la página correcta si existe
            } else {
                alert("No se encontraron resultados para la búsqueda.");
            }
        } else {
            alert("Por favor, ingresa un término de búsqueda.");
        }
    });
});


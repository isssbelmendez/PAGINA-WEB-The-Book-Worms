/*/////////////////////////////////////////////////////JS DE SLIDER//////////////////////////////////////////*/
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializar el slider
showSlide(currentSlide);



/*/////////////////////////////////////////////////////JS DE LAS CARDS//////////////////////////////////////////*/
// Selecciona todas las tarjetas
const cards = document.querySelectorAll('.card');

// Agrega un evento de desplazamiento sobre cada tarjeta
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const image = card.querySelector('.circle-image');
        const title = card.querySelector('h2');
        const text = card.querySelector('.card-text');

        // Aplica las animaciones
        image.style.transform = 'scale(1.1)';
        title.style.transform = 'translateY(-10px)';
        title.style.opacity = '0.8';
        text.style.transform = 'translateY(-10px)';
        text.style.opacity = '0.8';
    });

    // Elimina las animaciones cuando el ratón no está sobre la tarjeta
    card.addEventListener('mouseout', () => {
        const image = card.querySelector('.circle-image');
        const title = card.querySelector('h2');
        const text = card.querySelector('.card-text');

        // Restaura el estado original
        image.style.transform = 'scale(1)';
        title.style.transform = 'translateY(0)';
        title.style.opacity = '1';
        text.style.transform = 'translateY(0)';
        text.style.opacity = '1';
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Añade animación al pasar el ratón sobre la imagen circular
document.querySelectorAll('.circle-image').forEach(circleImage => {
    circleImage.addEventListener('mouseover', () => {
        circleImage.style.transform = 'scale(1.1)';
    });

    circleImage.addEventListener('mouseout', () => {
        circleImage.style.transform = 'scale(1)';
    });
});


/*//////////////////////////////////////////////////JS DE LA COMUNIDAD///////////////////////////////////////*/

document.addEventListener("DOMContentLoaded", function () {
    // Ejemplo de función para animar números (opcional)
    function animateNumbers(elementId, start, end, duration) {
        const element = document.getElementById(elementId);
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, );
            element.textContent = Math.floor(progress * (end - start) + start) + '+';
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }
    // Llamar a la función de animación para cada lector
    animateNumbers("lector1", 0, 2536, 2000);document.addEventListener("DOMContentLoaded", function () {
        // Función para animar números
        function animateNumbers(elementId, start, end, duration) {
            // Obtener el elemento HTML por su ID
            const element = document.getElementById(elementId);
            let startTime = null;
    
            // Función de animación
            function animation(currentTime) {
                // Si es la primera vez que se ejecuta la animación, guardar el tiempo de inicio
                if (startTime === null) startTime = currentTime;
                // Calcular el progreso de la animación
                const progress = Math.min((currentTime - startTime) / duration, 1);
                // Calcular el valor a mostrar en el elemento
                element.textContent = Math.floor(progress * (end - start) + start) + '+';
                // Si la animación no ha terminado, solicitar el siguiente cuadro de animación
                if (progress < 1) {
                    requestAnimationFrame(animation);
                }
            }
            // Iniciar la animación
            requestAnimationFrame(animation);
        }
    
        // Llamar a la función de animación para cada lector con una duración de 4000ms (4 segundos)
        animateNumbers("lector1", 0, 2536, 4000);
        animateNumbers("lector2", 0, 2310, 4000);
        animateNumbers("lector3", 0, 2205, 4000);
        animateNumbers("lector4", 0, 2190, 4000);
    });
    
    animateNumbers("lector2", 0, 2310, 2000);
    animateNumbers("lector3", 0, 2205, 2000);
    animateNumbers("lector4", 0, 2190, 2000);
});
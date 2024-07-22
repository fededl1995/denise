
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    const images = [
        "multimedia/imagenes/1.jpeg",
        "multimedia/imagenes/2.jpeg",
        "multimedia/imagenes/3.jpeg",
        "multimedia/imagenes/4.jpeg",
        "multimedia/imagenes/5.jpeg",
        "multimedia/imagenes/6.jpeg",
        "multimedia/imagenes/7.jpeg",
        "multimedia/imagenes/8.jpeg",
        "multimedia/imagenes/9.jpeg",
        "multimedia/imagenes/10.jpeg",
        "multimedia/imagenes/11.jpeg",
        "multimedia/imagenes/12.jpeg",
        "multimedia/imagenes/13.jpeg",
    ];

    function updateCarousel() {
        // Ajusta el desplazamiento del carrusel en función del índice actual
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function showNextImage() {
        // Avanza al siguiente índice de la imagen
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function showPrevImage() {
        // Retrocede al índice anterior de la imagen
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    function initCarousel() {
        // Rellena el carrusel con las imágenes
        carousel.innerHTML = images.map(src => `<img src="${src}" alt="Image">`).join('');
        updateCarousel();
    }

    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    initCarousel();
});

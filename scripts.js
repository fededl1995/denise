
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    const images = [
        "multimedia/imagenes/1.jpeg",
        "multimedia/imagenes/2.jpeg",
        "multimedia/imagenes/8.jpeg",
        "multimedia/imagenes/4.jpeg",
        "multimedia/imagenes/5.jpeg",
        "multimedia/imagenes/6.jpeg",
        "multimedia/imagenes/7.jpeg",
        "multimedia/imagenes/3.jpeg",
        "multimedia/imagenes/9.jpeg",
        "multimedia/imagenes/10.jpeg",
        "multimedia/imagenes/11.jpeg",
        "multimedia/imagenes/12.jpeg",
        "multimedia/imagenes/13.jpeg",
     ];

    // Muestra solo las primeras 5 imágenes
    const visibleImages = images.slice(0, 13);

    let currentIndex = 0;

    function updateCarousel() {
        // Ajusta el desplazamiento del carrusel en función del índice actual
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function showNextImage() {
        if (currentIndex < visibleImages.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    }

    function showPrevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    function initCarousel() {
        // Rellena el carrusel con las primeras 5 imágenes
        carousel.innerHTML = visibleImages.map(src => `<img src="${src}" alt="Image">`).join('');
        updateCarousel();
    }

    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    initCarousel();
});
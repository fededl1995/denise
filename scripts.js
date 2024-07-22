document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
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

    const imagesPerPage = 12; // Número de imágenes por página
    let currentPage = 0;

    function updateCarousel() {
        carousel.innerHTML = '';
        const start = currentPage * imagesPerPage;
        const end = Math.min(start + imagesPerPage, images.length);
        for (let i = start; i < end; i++) {
            const img = document.createElement('img');
            img.src = images[i];
            img.alt = 'Descripción de la imagen';
            carousel.appendChild(img);
        }
    }

    function showPage(page) {
        const totalPages = Math.ceil(images.length / imagesPerPage);
        if (page < 0) {
            currentPage = totalPages - 1;
        } else if (page >= totalPages) {
            currentPage = 0;
        } else {
            currentPage = page;
        }
        updateCarousel();
    }

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        showPage(currentPage + 1);
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        showPage(currentPage - 1);
    });

    // Inicializar el carrusel mostrando la primera página
    updateCarousel();
});

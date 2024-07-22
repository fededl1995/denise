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

    let currentIndex = 0;

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Descripción de la imagen';
        carousel.appendChild(img);
    });

    function showImage(index) {
        const totalImages = images.length;
        if (index < 0) {
            currentIndex = totalImages - 1;
        } else if (index >= totalImages) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    // Mostrar la primera imagen al cargar
    showImage(currentIndex);
});

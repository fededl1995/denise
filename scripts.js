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

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Descripción de la imagen';
        carousel.appendChild(img);
    });

    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
});

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const images = [
        'multimedia/imagenes/1.jpeg',
        'ruta-de-tu-imagen2.jpg',
        'ruta-de-tu-imagen3.jpg',
        'ruta-de-tu-imagen4.jpg',
        'ruta-de-tu-imagen5.jpg',
        'ruta-de-tu-imagen6.jpg',
        'ruta-de-tu-imagen7.jpg',
        'ruta-de-tu-imagen8.jpg',
        'ruta-de-tu-imagen9.jpg',
        'ruta-de-tu-imagen10.jpg',
        'ruta-de-tu-imagen11.jpg',
        'ruta-de-tu-imagen12.jpg',
        'ruta-de-tu-imagen13.jpg',
        'ruta-de-tu-imagen14.jpg',
        'ruta-de-tu-imagen15.jpg'
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Descripción de la imagen';
        gallery.appendChild(img);
    });
});

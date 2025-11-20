const images = [
    'evidencia1.jpg',
    'evidencia2.jpg',
    'evidencia3.jpg',
    'evidencia4.jpg',
    'evidencia5.jpg',
    'evidencia6.jpg',
    'evidencia7.jpg',
    'evidencia8.jpg',
    'evidencia9.jpg',
    'evidencia10.jpg',
    'evidencia11.jpg',
    'evidencia12.jpg',
    'evidencia13.jpg',
    'evidencia14.jpg',
    'evidencia15.jpg',
    'evidencia16.jpg',
    'evidencia17.jpg',
    'evidencia18.jpg',
    'evidencia19.jpg',
    'evidencia20.jpg',
    'evidencia21.jpg',
    'evidencia22.jpg',
    'evidencia23.jpg',
    'evidencia24.jpg',
    'evidencia25.jpg',
    'evidencia26.jpg',
    'evidencia27.jpg',
    'evidencia28.jpg',
    'evidencia29.jpg',
    'evidencia30.jpg',
    'evidencia31.jpg',
    'evidencia32.jpg',
    'evidencia33.jpg'
];

let current = 0;
let intervalId = null;

function showImage(idx) {
    console.log("showImage llamada:", idx, images[idx]); // debug activo
    const carouselImages = document.querySelector('.carousel-images');
    if (!carouselImages) return;
    carouselImages.innerHTML = '';
    const img = document.createElement('img');
    img.src = '/static/images/' + images[idx];
    img.alt = "evidencia " + (idx + 1);
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '18px';
    img.style.boxShadow = '0 3px 21px #fbd5ef62';
    img.classList.add('carousel-img-anim');
    img.onerror = function() {
        carouselImages.innerHTML = `<div style="color:#ed549d;text-align:center;padding:42px 0;">No se encontró la imagen:<br><b>${images[idx]}</b></div>`;
        console.log("Error cargando imagen:", img.src);
    };
    carouselImages.appendChild(img);
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
    resetInterval();
}
function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
    resetInterval();
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        current = (current + 1) % images.length;
        showImage(current);
    }, 10000);
}

document.addEventListener('DOMContentLoaded', () => {
    if (images.length > 0) showImage(current);
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    resetInterval();

    // Solo crea stylesheet si no existe ya
    if (!document.getElementById('carousel-style')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'carousel-style';
        styleSheet.innerText = `
        .carousel-img-anim {
            animation: fadeInImg 0.7s ease;
        }
        @keyframes fadeInImg {
            from { opacity: 0; transform: scale(0.97);}
            to   { opacity: 1; transform: scale(1);}
        }
        `;
        document.head.appendChild(styleSheet);
    }
});
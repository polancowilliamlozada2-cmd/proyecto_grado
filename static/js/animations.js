// Menú: sombra glass pastel, hamburguesa flotante iOS solo el menú, sin overlay general
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.liquid-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 38) {
            nav.style.background = 'rgba(255, 202, 222, 0.71)';
            nav.style.boxShadow = '0 8px 34px #ed549d36, 0 1.5px 24px #f6e2fc38';
        } else {
            nav.style.background = 'rgba(255, 202, 222, 0.4)';
            nav.style.boxShadow = '0 4px 28px rgb(255 180 200 / 32%)';
        }
    });

    // Burbujas pastel/destello
    const bg = document.querySelector('.animated-bg');
    if (bg) {
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'pastel-sparkle';
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.top = Math.random() * 100 + 'vh';
            sparkle.style.background = `hsla(${Math.random() * 340 + 250},82%,89%,0.47)`;
            sparkle.style.width = sparkle.style.height = (24 + Math.random() * 24) + 'px';
            sparkle.style.borderRadius = '50%';
            sparkle.style.position = 'absolute';
            sparkle.style.filter = 'blur(1.3px)';
            sparkle.style.zIndex = '0';
            sparkle.style.animation = `sparkleMove ${8 + Math.random() * 14}s linear infinite alternate`;
            bg.appendChild(sparkle);
        }
    }

    // Menú mobile glass, solo el ul glass flotante
    const navDropBtn = document.getElementById('navDropBtn');
    const mainMenu = document.getElementById('mainMenu');
    if (navDropBtn && mainMenu) {
        navDropBtn.addEventListener('click', () => {
            mainMenu.classList.toggle('menu-open');
            navDropBtn.classList.toggle('opened');
        });
    }

    // Hover animación pastel para nav
    const navLinks = document.querySelectorAll('.liquid-nav li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.12)';
            this.style.transition = 'transform 0.19s, color 0.28s';
        });
        link.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1.0)';
        });
    });
});

// Animación burbujas pastel y botón gota/hamburguesa
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes sparkleMove {
    0%   { transform: translateY(0px) scale(1); opacity: 1; }
    40%  { opacity: 0.91; }
    90%  { opacity: 0.77; }
    100% { transform: translateY(-70px) scale(1.07); opacity: 0.55; }
}
.pastel-sparkle { pointer-events: none; }
/* Menú gota glass animación iOS */
.nav-drop.opened .drop-bar:nth-child(1) { transform: translateY(12px) rotate(45deg);}
.nav-drop.opened .drop-bar:nth-child(2) { opacity: 0; }
.nav-drop.opened .drop-bar:nth-child(3) { transform: translateY(-12px) rotate(-45deg);}
`;
document.head.appendChild(styleSheet);
// Pastel particles efecto wow
document.addEventListener('DOMContentLoaded', () => {
    const pbg = document.getElementById('particlesBg');
    if (pbg) {
        // Genera 18 partículas, con color random
        for (let i = 0; i < 18; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const tamaño = 16 + Math.random()*36;
            p.style.width = p.style.height = tamaño+'px';
            p.style.left = (Math.random()*96)+'vw';
            p.style.top  = (Math.random()*87)+'vh';
            // Colores pastel custom variados
            const pastel = [
                "#fad7fa", "#a897ed", "#fee7c5", "#fbc2eb", "#c8dbfe", "#d1c9fd", "#ede7fc"
            ];
            p.style.background = pastel[Math.floor(Math.random()*pastel.length)];
            const dur = 9 + Math.random()*9;
            p.style.animationDuration = dur+'s';
            pbg.appendChild(p);
        }
    }
});

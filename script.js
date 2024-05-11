// script.js

function crearConfeti() {
    const confeti = document.createElement('div');
    confeti.className = 'confeti';
    confeti.style.left = Math.random() * window.innerWidth + 'px';
    confeti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confeti.innerText = '🌺'; // Puedes cambiar esto por una imagen de confeti si lo prefieres
    document.body.appendChild(confeti);

    setTimeout(() => {
        confeti.remove();
    }, 5000); // Eliminar el confeti después de 5 segundos
}

setInterval(crearConfeti, 200); // Generar confeti cada 200 milisegundos

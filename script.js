// script.js
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function() {
        const descriptionId = this.getAttribute('data-description');
        document.querySelectorAll('.skill-description').forEach(desc => {
            if (desc.id === descriptionId) {
                desc.classList.toggle('active');
            } else {
                desc.classList.remove('active');
            }
        });
    });
});

// script.js

let profilePic = document.querySelector('.profile-pic');
let explosionTimeout;
let resetTimeout;

// Quand la souris reste sur l'image pendant 15 secondes
profilePic.addEventListener('mouseover', function() {
    explosionTimeout = setTimeout(() => {
        profilePic.classList.add('explode');

        // Après l'explosion, la faire revenir du ciel après un délai
        resetTimeout = setTimeout(() => {
            profilePic.classList.remove('explode');
            profilePic.classList.add('return');

            // Retirer la classe 'return' après l'animation pour réinitialiser l'état
            setTimeout(() => {
                profilePic.classList.remove('return');
            }, 1500);
        }, 1000); // Délai avant le retour
    }, 15000); // 15 secondes
});

// Réinitialiser si la souris quitte l'image avant 15 secondes
profilePic.addEventListener('mouseout', function() {
    clearTimeout(explosionTimeout);
    clearTimeout(resetTimeout);
});

// script.js

// Code existant pour l'easter egg
profilePic.addEventListener('mouseover', function() {
    explosionTimeout = setTimeout(() => {
        profilePic.classList.add('explode');

        resetTimeout = setTimeout(() => {
            profilePic.classList.remove('explode');
            profilePic.classList.add('return');

            setTimeout(() => {
                profilePic.classList.remove('return');
            }, 1500);
        }, 1000);
    }, 15000);
});

profilePic.addEventListener('mouseout', function() {
    clearTimeout(explosionTimeout);
    clearTimeout(resetTimeout);
});






// <!-- Menu contextuel personnalisé -->
// Désactiver le menu contextuel par défaut et afficher un menu personnalisé
const customMenu = document.getElementById('custom-context-menu');

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();

    customMenu.style.top = `${event.clientY}px`;
    customMenu.style.left = `${event.clientX}px`;
    customMenu.style.display = 'block';
});

document.addEventListener('click', function() {
    customMenu.style.display = 'none';
});

// Gestion de l'actualisation avec destruction de la page
const refreshItem = document.getElementById('refresh-page');

refreshItem.addEventListener('click', function() {
    document.body.classList.add('destroy-page');
    
    setTimeout(() => {
        document.body.innerHTML = '<h1 style="color: black; text-align: center; margin-top: 20%;">Error 404: Page Not Found</h1>';
        document.body.style.backgroundColor = 'white';
    }, 1000);

    setTimeout(() => {
        location.reload(); // Recharger la page après l'animation
    }, 3000);
});
















function updateProgress(percentage) {
    if (percentage >= 0 && percentage <= 100) {
        document.documentElement.style.setProperty('--progress', percentage + '%');
    } else {
        console.error('30');
    }
}

// Exemple d'utilisation : définir la progression à 50%
updateProgress(30);




































































// lecteur de musique
const musicPlayer = document.getElementById('music-player');
const closeButton = document.getElementById('close-player');
const dragHandle = document.getElementById('drag-handle');
const resizeHandle = document.getElementById('resize-handle');

let isDragging = false;
let isResizing = false;
let initialX, initialY, initialWidth, initialHeight;

// Fonction pour ouvrir le lecteur de musique
document.getElementById('music-player-option').addEventListener('click', function() {
    musicPlayer.classList.remove('hidden');
    customMenu.style.display = 'none';
});

// Fonction pour fermer le lecteur de musique
closeButton.addEventListener('click', function() {
    musicPlayer.classList.add('hidden');
});

// Fonction pour gérer le déplacement du lecteur de musique
dragHandle.addEventListener('mousedown', function(e) {
    isDragging = true;
    initialX = e.clientX - musicPlayer.offsetLeft;
    initialY = e.clientY - musicPlayer.offsetTop;
    document.addEventListener('mousemove', moveMusicPlayer);
    document.addEventListener('mouseup', function() {
        isDragging = false;
        document.removeEventListener('mousemove', moveMusicPlayer);
    });
});

function moveMusicPlayer(e) {
    if (isDragging) {
        musicPlayer.style.left = `${e.clientX - initialX}px`;
        musicPlayer.style.top = `${e.clientY - initialY}px`;
        musicPlayer.style.bottom = 'auto'; // Empêche le conflit entre top et bottom
        musicPlayer.style.right = 'auto';  // Empêche le conflit entre left et right
    }
}

// Fonction pour gérer le redimensionnement du lecteur de musique
resizeHandle.addEventListener('mousedown', function(e) {
    isResizing = true;
    initialWidth = musicPlayer.offsetWidth;
    initialHeight = musicPlayer.offsetHeight;
    initialX = e.clientX;
    initialY = e.clientY;
    document.addEventListener('mousemove', resizeMusicPlayer);
    document.addEventListener('mouseup', function() {
        isResizing = false;
        document.removeEventListener('mousemove', resizeMusicPlayer);
    });
});

function resizeMusicPlayer(e) {
    if (isResizing) {
        musicPlayer.style.width = `${initialWidth + (e.clientX - initialX)}px`;
        musicPlayer.style.height = `${initialHeight + (e.clientY - initialY)}px`;
    }
}






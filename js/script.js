// Mode éco-responsable
const ecoButton = document.getElementById('eco-mode');
let ecoMode = false;

if (ecoButton) {
    ecoButton.addEventListener('click', () => {
        ecoMode = !ecoMode;
        document.body.classList.toggle('eco-mode', ecoMode);
        ecoButton.textContent = ecoMode ? '🌱 Mode Éco (Activé)' : '🌱 Mode Éco';
        localStorage.setItem('ecoMode', ecoMode);
    });

    // Restaurer le mode au chargement
    if (localStorage.getItem('ecoMode') === 'true') {
        ecoMode = true;
        document.body.classList.add('eco-mode');
        ecoButton.textContent = '🌱 Mode Éco (Activé)';
    }
}

// Menu responsive (à compléter si besoin)

// MENU BURGER SIMPLIFIÉ 
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Empêche la fermeture immédiate
            toggleMenu();
        });
        
        // Fermer en cliquant sur l'overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', closeMenu);
        }
        
        // Fermer en cliquant sur un lien
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Fonctions utilitaires
        function toggleMenu() {
            const isActive = navMenu.classList.contains('active');
            
            if (isActive) {
                closeMenu();
            } else {
                openMenu();
            }
        }
        
        function openMenu() {
            navMenu.classList.add('active');
            menuToggle.classList.add('active');
            if (navOverlay) navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMenu() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Fermer avec la touche Échap
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }
});

// BOUTON HAUT DE PAGE
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Le bouton est toujours visible
        
        // Retour en haut avec animation
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
// Sélectionne tous les boutons d'impression
const printButtons = document.querySelectorAll('.print-cv-btn');

printButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const cvId = btn.getAttribute('data-cv');
        const cvElement = document.getElementById(cvId);
        if (!cvElement) return;

        // Masquer l'autre CV
        const allCVs = document.querySelectorAll('#cvs > div[id^="cv-"]');
        const otherCVs = Array.from(allCVs).filter(cv => cv.id !== cvId);
        
        otherCVs.forEach(cv => {
            cv.style.display = 'none';
        });

        // Lancer l'impression
        window.print();

        // Restaurer l'affichage après impression
        setTimeout(() => {
            otherCVs.forEach(cv => {
                cv.style.display = '';
            });
        }, 500);
    });
});

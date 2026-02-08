// ===== FAQ ACCORDÉON GARANTI =====
document.addEventListener('DOMContentLoaded', function() {
    // FAQ - Version simple et fiable
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            // Initialiser
            question.setAttribute('aria-expanded', 'false');
            
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Fermer tous les autres
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    }
                });
                
                // Basculer l'état de celui-ci
                if (isActive) {
                    item.classList.remove('active');
                    question.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        });
    }
    
    // ===== VALIDATION FORMULAIRE =====
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Validation à la soumission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                alert('Merci ! Votre message a été envoyé. Nous vous répondrons dans les 24h.');
                this.reset();
            } else {
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
        
        // Retirer l'erreur quand on tape
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });
    }
    
    // ===== STYLES POUR LES ERREURS =====
    const style = document.createElement('style');
    style.textContent = `
        .form-input.error,
        .form-select.error,
        .form-textarea.error {
            border-color: #e53935 !important;
            background-color: #ffebee !important;
        }
    `;
    document.head.appendChild(style);
});
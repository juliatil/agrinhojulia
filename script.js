// ==================== INTERATIVIDADE DO SITE ====================

// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const nome = form.elements[0].value;
    const email = form.elements[1].value;
    const mensagem = form.elements[2].value;
    
    // Simular envio
    console.log('Formulário enviado:', { nome, email, mensagem });
    
    // Mostrar mensagem de sucesso
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '✓ Mensagem Enviada!';
    submitBtn.style.background = 'linear-gradient(135deg, #7cb342, #9ccc65)';
    
    // Resetar formulário
    form.reset();
    
    // Restaurar botão após 3 segundos
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 3000);
}

// ==================== ANIMAÇÃO DE SCROLL ====================

// Observador para animar elementos ao entrar na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todos os cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.benefit-card, .plant-card, .dica-card, .step');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// ==================== ACTIVE LINK NA NAVEGAÇÃO ====================

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.style.color = '');
            this.style.color = '#9ccc65';
        });
    });
});

// ==================== SMOOTH SCROLL ====================

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==================== SCROLL REVEAL EFFECT ====================

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Efeito paralax no hero
    const hero = document.querySelector('.hero');
    if (hero && scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `0% ${scrollPosition * 0.5}px`;
    }
});

// ==================== CONTADOR ANIMADO ====================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== ADICIONAR CLASSE ATIVA AO NAVEGAR ====================

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== EFEITO HOVER PARA EMOJIS ====================

document.addEventListener('DOMContentLoaded', () => {
    const emojiElements = document.querySelectorAll('.benefit-icon, .plant-emoji');
    
    emojiElements.forEach(emoji => {
        emoji.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(10deg)';
        });
        
        emoji.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// ==================== DARK MODE TOGGLE (OPCIONAL) ====================

function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

// Verificar preferência salva
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
});

// ==================== FEEDBACK DE CLIQUE ====================

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button, a');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Criar ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.animation = 'ripple-animation 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
        });
    });
});

// ==================== LAZY LOADING PARA IMAGENS ====================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ==================== NOTIFICAÇÃO DE SUPORTE ====================

window.addEventListener('DOMContentLoaded', () => {
    console.log('%c🌿 Bem-vindo ao site Horta em Casa!', 'color: #7cb342; font-size: 16px; font-weight: bold;');
    console.log('%cCultive saúde e sustentabilidade em sua casa.', 'color: #9ccc65; font-size: 12px;');
});

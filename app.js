// PREMIUM INTERACTIONS: Parallax, Tilt, Smooth Scroll

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    lucide.createIcons();
    
    // Init Components
    initNavbar();
    initMobileMenu();
    init3DTilt();
    initSmoothScroll();
    initIntersectionObserver();
});

/* --- 1. NAVBAR LOGIC --- */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('active');
            const icon = menu.classList.contains('active') ? 'x' : 'menu';
            btn.querySelector('i').setAttribute('data-lucide', icon);
            lucide.createIcons();
        });
    }
}

/* --- 2. 3D TILT EFFECT FOR CARDS --- */
function init3DTilt() {
    // Select all cards that should have the premium feel
    const cards = document.querySelectorAll('.glass-card, .feature-card, .category-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });
}

function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on cursor position relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation in degrees
    const maxRotate = 8; 
    
    const rotateX = ((y - centerY) / centerY) * -maxRotate;
    const rotateY = ((x - centerX) / centerX) * maxRotate;
    
    // Apply transform style
    // 'perspective' gives depth. 'scale' ensures edges don't get clipped or look weird.
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    
    // Add Glossy Glare effect dynamically if not present
    /* 
       Note: For a simpler implementation, we rely on the CSS box-shadow changes. 
       Advanced "glare" requires an internal div which might complicate the HTML structure.
    */
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
}

/* --- 3. SMOOTH SCROLL --- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* --- 4. ANIMATION ON SCROLL (Observer) --- */
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Animates once
            }
        });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.animate-on-scroll, .animate-fade-up');
    elements.forEach(el => {
        // Set initial state via JS to avoid FOUT if JS fails
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

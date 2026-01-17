/* ==========================================
   SMOOTH SCROLL BEHAVIOR (CSS handles most)
   Enhanced with JS for fallback support
   ========================================== */

// Simple smooth scroll fallback for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for buttons that should open external links
        if (href === '#' || href.startsWith('http')) {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation active state tracking (optional enhancement)
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission tracking (for analytics if needed later)
document.addEventListener('DOMContentLoaded', () => {
    const enrollLinks = document.querySelectorAll('a[href*="wufoo.com"]');
    
    enrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Can add analytics tracking here
            console.log('User clicked enrollment form');
        });
    });
});

// Mobile menu toggle (if needed for future mobile nav)
const createMobileMenuToggle = () => {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        // Mobile handling can be added here
    }
};

window.addEventListener('resize', createMobileMenuToggle);
createMobileMenuToggle();
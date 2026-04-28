// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-dark');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.card, .portfolio-item, .stat, .contact-form').forEach(el => {
    observer.observe(el);
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Tänan sõnumi eest! Võtame peagi ühendust.');
    this.reset();
});

// Add loading animation to actual button elements only
document.querySelectorAll('button.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalText = this.textContent.trim();
        this.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Laadimine...';
        setTimeout(() => {
            this.textContent = originalText;
        }, 2000);
    });
});
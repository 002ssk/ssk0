window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.padding = '20px 0';
    }
});
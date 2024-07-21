// scripts.js
document.addEventListener('scroll', function () {
    const flames = document.querySelectorAll('.flame');
    const scrollPosition = window.scrollY;

    flames.forEach((flame, index) => {
        if (scrollPosition > 100) {
            flame.style.animation = `rise 2s ease-out forwards ${index * 0.5}s`;
        } else {
            flame.style.opacity = '0';
            flame.style.transform = 'translateY(100px)';
        }
    });
});

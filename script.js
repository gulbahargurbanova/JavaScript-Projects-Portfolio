// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
console.log("JavaScript dosyası başarıyla çalışıyor!");

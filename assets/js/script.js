// Menu Hamburguer

const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a');

menuHamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
});

links.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

// Efeito fade-in scroll da página

let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 90) {
        header.style.background = '#f1f1f1'
    } else {
        header.style.background = 'transparent'
    }

});
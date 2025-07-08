// Initialisation de AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// Scroll fluide vers les sections
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Effet de hover visuel sur les projets
document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
  });
});

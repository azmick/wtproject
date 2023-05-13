const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c !== card ? c.classList.remove('active') : null);
    card.classList.toggle('active');
  });
});



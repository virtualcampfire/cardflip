let cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('rotate-front');
    if (card.classList.contains('rotate-front')) {
      card.classList.remove('rotate-back');
    } else {
      card.classList.add('rotate-back');
    }
  });
});
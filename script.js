const card = document.querySelector('#card');
const openButton = document.querySelector('#open-button');
const hint = document.querySelector('#hint');
const confetti = document.querySelector('#confetti');

function celebrate() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#c55e4c', '#d7aa55', '#446d8b', '#7f927d', '#d98b85', '#f4e4bf'];
  confetti.replaceChildren();
  for (let i = 0; i < 54; i += 1) {
    const piece = document.createElement('i');
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.65}s`;
    piece.style.animationDuration = `${2.3 + Math.random() * 1.2}s`;
    confetti.append(piece);
  }
  window.setTimeout(() => confetti.replaceChildren(), 4000);
}

function setOpen(open) {
  card.classList.toggle('is-open', open);
  card.setAttribute('aria-expanded', String(open));
  card.setAttribute('aria-label', open ? 'Close the birthday card' : 'Open the birthday card');
  openButton.querySelector('span:last-child').textContent = open ? 'Close the card' : 'Open the card';
  openButton.querySelector('.button-icon').textContent = open ? '↙' : '↗';
  hint.textContent = open ? 'Your birthday surprise is open — tap again to fold it away' : 'Tap the card to open your surprise';
  if (open) celebrate();
}

card.addEventListener('click', () => setOpen(!card.classList.contains('is-open')));
openButton.addEventListener('click', () => setOpen(!card.classList.contains('is-open')));

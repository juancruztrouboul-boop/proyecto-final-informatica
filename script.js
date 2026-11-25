const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
const accordion = document.querySelector('.accordion');
const panel = document.getElementById('extraInfo');
accordion.addEventListener('click', () => {
  const isExpanded = accordion.getAttribute('aria-expanded') === 'true';
  accordion.setAttribute('aria-expanded', String(!isExpanded));
  panel.hidden = isExpanded;
  accordion.querySelector('span').textContent = isExpanded ? '＋' : '－';
});

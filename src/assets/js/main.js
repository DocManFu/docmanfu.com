const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

function setNav(open, { focusToggle = false } = {}) {
  if (!toggle || !nav) return;
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  if (focusToggle) toggle.focus();
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    setNav(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setNav(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setNav(false, { focusToggle: true });
    }
  });
  document.addEventListener('click', (event) => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !nav.contains(event.target) && !toggle.contains(event.target)) {
      setNav(false);
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) setNav(false);
  });
}

const header = document.querySelector('[data-header]');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click', async () => {
    const label = button.textContent;
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = label; }, 1600);
    } catch {
      button.textContent = 'Select text';
    }
  });
}

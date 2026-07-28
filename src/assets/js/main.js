const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
}

const header = document.querySelector('[data-header]');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const reveal = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      reveal.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

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

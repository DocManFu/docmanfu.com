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

// Scroll effects: reveal-on-scroll, parallax, and a progress bar. Skipped for reduced motion.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const root = document.documentElement;
  root.classList.add('fx');

  const revealer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in-view');
      // Drop the reveal transition afterwards so parallax tracks the scroll without lag.
      if (entry.target.hasAttribute('data-parallax')) setTimeout(() => entry.target.classList.add('settled'), 1000);
      revealer.unobserve(entry.target);
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  for (const el of document.querySelectorAll('.reveal, .cta-panda')) revealer.observe(el);

  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);

  const parallax = [...document.querySelectorAll('[data-parallax]')];
  let ticking = false;
  const update = () => {
    ticking = false;
    const max = root.scrollHeight - window.innerHeight;
    root.style.setProperty('--scroll-progress', max > 0 ? (window.scrollY / max).toFixed(4) : 0);
    for (const el of parallax) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) continue;
      // -1 when the element's center is at the bottom of the viewport, 1 at the top.
      const offset = 1 - (rect.top + rect.height / 2) / (window.innerHeight / 2);
      el.style.setProperty('--p', Math.max(-1.5, Math.min(1.5, offset)).toFixed(3));
    }
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  // Gentle 3D tilt that follows the pointer on feature cards.
  if (window.matchMedia('(hover: hover)').matches) {
    for (const card of document.querySelectorAll('.bento')) {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--tx', ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
        card.style.setProperty('--ty', ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
      });
      card.addEventListener('pointerleave', () => { card.style.setProperty('--tx', 0); card.style.setProperty('--ty', 0); });
    }
  }
}

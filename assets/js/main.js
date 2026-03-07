/* ── Navbar scroll ── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ── Hamburger ── */
const ham = document.querySelector('.hamburger');
const mob = document.querySelector('.mobile-menu');
if (ham && mob) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
}

/* ── Active nav link ── */
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === page || (page === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* ── Page transitions ── */
document.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto') ||
      href.startsWith('http') || href.startsWith('tel') || a.target === '_blank') return;
  a.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.add('page-exit');
    setTimeout(() => window.location.href = href, 280);
  });
});

/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) { el.target.classList.add('in'); revealObs.unobserve(el.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Typed text ── */
function initTyped(el, strings, speed = 70, pause = 1800) {
  if (!el) return;
  let si = 0, ci = 0, deleting = false;
  const loop = () => {
    const str = strings[si];
    el.textContent = deleting ? str.slice(0, ci--) : str.slice(0, ci++);
    if (!deleting && ci > str.length) { deleting = true; setTimeout(loop, pause); return; }
    if (deleting && ci < 0) { deleting = false; si = (si + 1) % strings.length; ci = 0; }
    setTimeout(loop, deleting ? speed / 2 : speed);
  };
  loop();
}

/* ── FAQ ── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ── Skill bar animation ── */
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(f => f.classList.add('animate'));
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skills-cols').forEach(el => barObs.observe(el));

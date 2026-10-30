// Theme switcher
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('shana-theme');

if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

function updateThemeIcon() {
  themeToggle.textContent =
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? '☀'
      : '☾';
}

updateThemeIcon();

themeToggle.addEventListener('click', () => {
  const dark =
    document.documentElement.getAttribute('data-theme') !== 'dark';

  if (dark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  localStorage.setItem('shana-theme', dark ? 'dark' : 'light');
  updateThemeIcon();
});

// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Scroll animations
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  }

  // Toggle theme on click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // Toggle visibility with ARIA sync
  function toggleVisibility(triggerId, targetId) {
    const trigger = document.getElementById(triggerId);
    const target = document.getElementById(targetId);
    if (trigger && target) {
      trigger.addEventListener('click', () => {
        const isHidden = target.classList.toggle('hidden');
        trigger.setAttribute('aria-expanded', !isHidden);
      });
    }
  }

  toggleVisibility('toggleIntro', 'introText');
  toggleVisibility('showSkills', 'skillsList');
  toggleVisibility('toggleQuote', 'quote');

  // Reveal buttons using aria-controls
  document.querySelectorAll('.reveal').forEach((btn) => {
    const targetId = btn.getAttribute('aria-controls');
    const detail = document.getElementById(targetId);
    if (detail) {
      btn.addEventListener('click', () => {
        const isHidden = detail.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', !isHidden);
      });
    }
  });

  // Contact form submission with debounce
  const form = document.getElementById('contactForm');
  if (form) {
    let submitted = false;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (submitted) return;
      submitted = true;
      alert('Thank you! Your message has been sent.');
      form.reset();
      submitted = false;
    });
  }
});

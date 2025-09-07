document.addEventListener('DOMContentLoaded', () => {
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

  document.querySelectorAll('.reveal').forEach((btn) => {
    btn.addEventListener('click', () => {
      const detail = btn.nextElementSibling;
      if (detail) {
        const isHidden = detail.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', !isHidden);
      }
    });
  });

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

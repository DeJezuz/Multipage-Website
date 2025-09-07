document.addEventListener('DOMContentLoaded', () => {
  const toggleIntro = document.getElementById('toggleIntro');
  const introText = document.getElementById('introText');

  if (toggleIntro && introText) {
    toggleIntro.addEventListener('click', () => {
      const isHidden = introText.classList.toggle('hidden');
      toggleIntro.setAttribute('aria-expanded', !isHidden);
    });
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      form.reset();
    });
  }

  const revealButtons = document.querySelectorAll('.reveal');
  revealButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const detail = btn.nextElementSibling;
      if (detail) detail.classList.toggle('hidden');
    });
  });

  const toggleQuote = document.getElementById('toggleQuote');
  const quote = document.getElementById('quote');
  if (toggleQuote && quote) {
    toggleQuote.addEventListener('click', () => {
      quote.classList.toggle('hidden');
    });
  }

  const showSkills = document.getElementById('showSkills');
  const skillsList = document.getElementById('skillsList');
  if (showSkills && skillsList) {
    showSkills.addEventListener('click', () => {
      skillsList.classList.toggle('hidden');
    });
  }
});

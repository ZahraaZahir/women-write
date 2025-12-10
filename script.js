document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.theory-section');

  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      navButtons.forEach((b) => b.classList.remove('active'));
      sections.forEach((s) => s.classList.remove('active'));

      btn.classList.add('active');

      const targetId = btn.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });

  const actionButtons = document.querySelectorAll('.action-btn');

  actionButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const resultPanel = this.nextElementSibling;

      if (resultPanel) {
        resultPanel.classList.toggle('visible');

        if (resultPanel.classList.contains('visible')) {
          if (!this.dataset.originalText) {
            this.dataset.originalText = this.innerText;
          }
          this.innerText = 'إخفاء';
        } else {
          if (this.dataset.originalText) {
            this.innerText = this.dataset.originalText;
          }
        }
      }
    });
  });
});

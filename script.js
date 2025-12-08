document.addEventListener('DOMContentLoaded', function () {
  // --- Tab Switching Logic ---
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.theory-section');

  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // 1. Remove 'active' class from all buttons and sections
      navButtons.forEach((b) => b.classList.remove('active'));
      sections.forEach((s) => s.classList.remove('active'));

      // 2. Add 'active' class to clicked button
      btn.classList.add('active');

      // 3. Show the target section
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');

      // 4. Scroll to top of content smoothly
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });

  // --- Interactive Box Logic (Show/Hide Result) ---
  const actionButtons = document.querySelectorAll('.action-btn');

  actionButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const panel = this.nextElementSibling; // The result-panel div

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null; // Close
        this.textContent = 'ابدئي التمرين'; // Reset text
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px'; // Open
        this.textContent = 'إخفاء'; // Change text
      }
    });
  });
});

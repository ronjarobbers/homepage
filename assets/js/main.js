// Mobile Menu Toggle
const menuBtn = document.querySelector('[data-menu-btn]');
const mobileNav = document.querySelector('[data-mobile]');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
  });
}

// Navigation Link Click Handler
const navLinks = document.querySelectorAll('[data-nav]');
avLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileNav) {
      mobileNav.style.display = 'none';
    }
  });
});
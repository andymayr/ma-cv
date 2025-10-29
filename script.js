// Theme toggle functionality
const initThemeToggle = () => {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const body = document.body;
  
  if (!themeToggle) return; // Exit if theme toggle button doesn't exist
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.classList.add('dark');
  }
  updateThemeIcon(currentTheme);
  
  themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    
    body.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
    }
  }
};

// Mobile menu toggle functionality
const initMobileMenu = () => {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  
  if (!hamburger || !sidebar) return;
  
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', sidebar.classList.contains('active'));
  });
  
  // Close menu when clicking overlay
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  }
  
  // Close menu when clicking a nav link
  const navLinks = sidebar.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
};

// Smooth scrolling function with error-checking
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`No element found with ID: ${id}`);
  }
};

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  
  // Add smooth scroll to all nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
});

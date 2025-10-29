// Theme toggle functionality
const initThemeToggle = () => {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;
  
  if (!themeToggle) return; // Exit if theme toggle button doesn't exist
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
  
  themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
  }
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

// Set up navigation buttons using event delegation and data attributes
const initNavButtons = () => {
  const navButtons = document.querySelectorAll('.nav-buttons button');
  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const targetId = e.target.dataset.target;
      if (targetId) scrollToSection(targetId);
    });
  });
};

// Contact functions
const contactWhatsApp = () => {
  window.location.href = "https://wa.me/5212222393453";
};

const contactEmail = () => {
  window.location.href = "mailto:mayerandreas3@gmail.com";
};

// Initialize contact buttons
const initContactButtons = () => {
  const whatsappButton = document.getElementById('whatsappButton');
  const emailButton = document.getElementById('emailButton');
  
  if (whatsappButton) {
    whatsappButton.addEventListener('click', contactWhatsApp);
  }
  
  if (emailButton) {
    emailButton.addEventListener('click', contactEmail);
  }
};

// Initialize all functionality when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNavButtons();
    initContactButtons();
  });
} else {
  initThemeToggle();
  initNavButtons();
  initContactButtons();
}

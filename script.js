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
document.querySelectorAll('.nav-buttons button').forEach(button => {
  button.addEventListener('click', (e) => {
    const targetId = e.target.dataset.target;
    if (targetId) scrollToSection(targetId);
  });
});

// Contact functions
const contactWhatsApp = () => {
  window.location.href = "https://wa.me/5212222393453";
};

const contactEmail = () => {
  window.location.href = "mailto:mayerandreas3@gmail.com";
};

document.getElementById('whatsappButton').addEventListener('click', contactWhatsApp);
document.getElementById('emailButton').addEventListener('click', contactEmail);

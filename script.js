// script.js

// Create a "Back to Top" button dynamically
const backToTopButton = document.createElement('button');
backToTopButton.textContent = "↑ Top";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.background = "#333";
backToTopButton.style.color = "#fff";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none"; // hidden by default
document.body.appendChild(backToTopButton);

// Show button after scrolling down 300px
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll smoothly to top when clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

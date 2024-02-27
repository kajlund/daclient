import "./style.css";
import "./assets/reusable.css"
import "./assets/header.css"
import "./assets/media.css"

// Generic selector function to throw error if bad query
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);
};

// Nav styles on scroll
window.addEventListener('scroll', () => {
  const navbarElement = selectElement('#header');
  if(this.scrollY >= 15) {
    navbarElement.classList.add('activated');
  } else {
    navbarElement.classList.remove('activated');
  }
});


// Set copyright year to current year
selectElement("#thisyear").innerText = new Date().getFullYear()

// Menu toggle
const menuToggleIcon = selectElement('#menu-toggle-icon');
menuToggleIcon.addEventListener('click', () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
});

// Check if theme was persisted
const currentTheme = localStorage.getItem('currentTheme');
if (currentTheme) {
  document.body.classList.add('light-theme');
}

// Toggle theme button handler
const themeToggleBtn = selectElement('#theme-toggle-btn');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');

  // If the body has the class of light theme then add it to local Storage,
  // if not remove it
  if (document.body.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', 'light-theme');
  } else {
    localStorage.removeItem('currentTheme');
  }
});

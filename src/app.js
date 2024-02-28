import router from 'page'
import routes from './routes'

import "./style.css";
import "./assets/reusable.css"
import "./assets/header.css"
import "./assets/media.css"

// Import page elements
import './pages/HomePage.js'
import './pages/BlogPage.js'
import './pages/ResourcesPage.js'
import './pages/AboutPage.js'

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

// Routing
let page;
let params;
const appElement = selectElement("#app")
routes.forEach(route => {
  router(
    route.path,
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    () => {
      if (page) {
        //appElement.firstChild.classList.remove('activated');
        appElement.innerHTML = "";
      }
      page = document.createElement(route.component);
      if (page) {
        appElement.appendChild(page);
        //appElement.firstChild.classList.add('activated');
      }
      // nav.setActivePage(route.pageId)
      console.log('page: ', route.pageId, page, params)
    }
  )
})
router.start()

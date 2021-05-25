// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const hamburger = document.getElementById('hamburger-icon');

hamburger.addEventListener('click', () => {
  if (!hamburger.classList.value.split(' ').includes('toggle')) {
    hamburger.classList.add('toggle');
  } else {
    hamburger.classList.remove('toggle');
  }
});

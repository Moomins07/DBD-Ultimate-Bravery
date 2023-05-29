import './style.css';

const global = {
  api: {
    apiUrl: 'https://dbd.tricky.lol/api/',
  },
};

function titlesFadeInOut() {
  return new Promise((resolve) => {
    // Fade in first message
    const firstMessage = document.getElementById('firstMessage');
    firstMessage.classList.remove('opacity-0');

    // After 8 seconds, fade out the first message and fade in the second
    setTimeout(() => {
      firstMessage.classList.remove('animate-fadeInOut');
      firstMessage.classList.add('animate-fadeIn');
      firstMessage.textContent = 'Click to get started!';
      resolve();

      // Allow for the first message to fade out before the second message starts to fade in
    }, 9000); // 8 seconds
  });
}

async function imgPromptAnimation() {
  await titlesFadeInOut();
  const promptBtns = document.querySelectorAll('.promptBtn');
  let timerId = null;
  //   Adds initial bounce animation to prompt user after 12 secs
  setTimeout(() => {
    document.getElementById('srv').classList.add('animate-lessBounce');
    // 1.5 sec delay on other img so they bounce out of sync
    setTimeout(() => {
      document.getElementById('klr').classList.add('animate-lessBounce');
    }, 1500);
  }, 12000);
  //   Remove bounce effect on hover
  promptBtns.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      // If there is a previous timer, clear it
      if (button.dataset.timerId) {
        clearTimeout(button.dataset.timerId);
      }
      button.classList.remove('animate-lessBounce');
      //   Time out function to add bounce effect after 12 seconds of inactivity
      // Set up a new timer
      button.dataset.timerId = setTimeout(() => {
        button.classList.add('animate-lessBounce');
      }, 12000);
    });
  });
}

async function displayPerks() {
  const results = await fetchAPIData('randomperks?role=survivor');

  console.log(results);
}

// Fetch API Data
async function fetchAPIData(endpoint) {
  const API_URL = global.api.apiUrl;

  // showSpinner();

  const response = await fetch(`${API_URL}${endpoint}`);

  const data = await response.json();

  // hideSpinner();

  return data;
}

function init() {
  titlesFadeInOut();
  imgPromptAnimation();
}

document.addEventListener('DOMContentLoaded', init);

displayPerks();

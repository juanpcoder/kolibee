const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  // Show light icon
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

// Listen for toggle button click
themeToggleBtn.addEventListener('click', toggleMode);

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

// Hamburger button listener
btn.addEventListener('click', navToggle);



function toggleMode() {
  // Toggle icon
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  // If is set in localstorage
  if (localStorage.getItem('color-theme')) {
    // If light, make dark and save in localstorage
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  } else {
    // If not in localstorage
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
}


function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-lightRed',
      'border-b-4',
      'md:border-b-0'
    );
  });

  // Hide all panels
  panels.forEach((panel) => panel.classList.add('hidden'));

  // Activate a new tab and panel based on the target
  e.target.classList.add('border-lightRed', 'border-b-4');
  const classString = e.target.getAttribute('data-target');
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden');
}

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
}

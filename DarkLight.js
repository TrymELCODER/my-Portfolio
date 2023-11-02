const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Check if the user has a preference for dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
}

modeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    modeToggle.textContent = 'Light Mode';
}

function enableLightMode() {
    body.classList.remove('dark-mode');
    modeToggle.textContent = 'Dark Mode';
}

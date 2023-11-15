function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the current mode to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for previously saved mode in local storage
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
}
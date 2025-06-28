function toggleDarkMode() {
    const html = document.documentElement;
    const modeIcon = document.getElementById('mode-icon');
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        modeIcon.className = 'fa-solid fa-sun';
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        modeIcon.className = 'fa-solid fa-moon';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const modeIcon = document.getElementById('mode-icon');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {

        modeIcon.className = 'fa-solid fa-moon';
    } else {

        modeIcon.className = 'fa-solid fa-sun';
    }
});
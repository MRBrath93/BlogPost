
const themeToggleButton = document.querySelector('#theme-toggle');
const pageTitle = document.querySelector('.pageTitle');

// Tjekker om temaet allerede er gemt i sessionStorage
if (sessionStorage.getItem('theme')) {
    // Henter det gemte tema
    const theme = sessionStorage.getItem('theme');
    // Sætter temaet på HTML-elementet
    document.documentElement.setAttribute('data-theme', theme);
    // Opdaterer baggrundsbilledet baseret på temaet
    updateBackgroundImage(theme);
} else {
    // Sætter standard tema og baggrund
    sessionStorage.setItem('theme', 'light');
    // Sætter standard temaet på HTML-elementet
    document.documentElement.setAttribute('data-theme', 'light');
    updateBackgroundImage('light');
}

// Tilføjer en event listener til tema-toggle knappen
themeToggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    // Skifter temaet ved klik
    if (currentTheme === 'dark') {
        // Sætter temaet til lys hvis det nuværende er dark
        document.documentElement.setAttribute('data-theme', 'light');
        sessionStorage.setItem('theme', 'light');
        updateBackgroundImage('light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');
        updateBackgroundImage('dark');
    }
});

// Funktion til at opdatere baggrundsbilledet baseret på temaet
function updateBackgroundImage(theme) {
    // Hvis temaet er mørkt
    if (theme === 'dark') {
        pageTitle.classList.remove('background-light');
        pageTitle.classList.add('background-dark');
    } else {
        // Hvis temaet er lyst
        pageTitle.classList.remove('background-dark');
        pageTitle.classList.add('background-light');
    }
}

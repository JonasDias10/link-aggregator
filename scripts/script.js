const themeLink = document.getElementById("theme-link");
const btnTheme = document.querySelector(".button-switcher");
const body = document.body;

btnTheme.addEventListener('click', () => {
    btnTheme.classList.toggle("dark-theme");
    body.classList.toggle("dark-theme");
});
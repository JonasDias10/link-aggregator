const btnTheme = document.getElementById("button-switcher");
const body = document.body;

btnTheme.addEventListener("click", () => {
    btnTheme.classList.toggle("dark-theme");
    body.classList.toggle("dark-theme");
});
const icons = document.querySelectorAll(".icons");
const sections = document.querySelectorAll(".mainPage");
const buttons = document.querySelectorAll(".navBarBtn");
const darkMode = document.querySelector("#darkMode");
const intro = document.querySelector(".introduction");
const navBar = document.querySelector(".navBar");
const container = document.querySelector(".container");
const footer = document.querySelector("footer");
let clicked = false;

console.log(footer)

icons.forEach((x, i) => x.onclick = () => {
    if (i === 0 || i === 3)
        window.location = 'https://www.facebook.com';
    if (i === 1 || i === 4)
        window.location = 'https://www.instagram.com';
    if (i === 2 || i === 5)
        window.location = 'https://www.linkedin.com';
})

buttons.forEach((y, index) => y.onclick = () => {
    console.log("sdmsk")
    buttons.forEach((z) => z.classList.remove("selected"));
    sections.forEach((c) => c.style.display = "none");
    y.classList.add("selected");
    if (index === 0) sections[index].style.display = "block";
    else sections[index].style.display = "flex";
})

darkMode.onclick = () => {
    if (clicked) {
        intro.classList.remove("darkModeClass");
        navBar.classList.remove("darkModeClass");
        sections.forEach(x => x.classList.remove("darkModeClass"));
        container.classList.remove("darkModeMain");
        footer.style.color = "black";
    } else {
        console.log("dark Mode");
        intro.classList.add("darkModeClass");
        navBar.classList.add("darkModeClass");
        sections.forEach(x => x.classList.add("darkModeClass"));
        container.classList.add("darkModeMain");
        footer.style.color = "#e1dbdb";
    }
    clicked = !clicked;
}

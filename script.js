const icons = document.querySelectorAll(".icons");
const sections = document.querySelectorAll(".mainPage");
const buttons = document.querySelectorAll(".navBarBtn");
const darkMode = document.querySelector("#darkMode");
const intro = document.querySelector(".introduction");
const navBar = document.querySelector(".navBar");
const container = document.querySelector(".container");
const footer = document.querySelector("footer");
const resumeCard = document.querySelectorAll(".card2");
const ratingBox = document.querySelectorAll(".rating");
//Modal (Work)
const modal = document.querySelectorAll(".modal");
const modalBtnCard = document.querySelectorAll(".card3");
const closeModal = document.querySelectorAll(".close");
//Modal (Blog)
const modal2 = document.querySelectorAll(".modal2");
const modalBtnCard2 = document.querySelectorAll(".card4");
const closeModal2 = document.querySelectorAll(".close2");

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
    buttons.forEach((z) => z.classList.remove("selected"));
    sections.forEach((c) => c.style.display = "none");
    y.classList.add("selected");
    if (index === 0) sections[index].style.display = "block";
    else sections[index].style.display = "flex";
})
//Dark Mode
darkMode.onclick = () => {
    if (clicked) {
        intro.classList.remove("darkModeClass");
        navBar.classList.remove("darkModeClass");
        sections.forEach(x => x.classList.remove("darkModeClass"));
        container.classList.remove("darkModeMain");
        footer.style.color = "black";
        darkMode.style.color = "black";
        resumeCard.forEach(x => x.classList.remove("darkModeClassCard"));
        ratingBox.forEach(x => x.classList.remove("darkModeClassCard"));
    } else {
        console.log("dark Mode");
        intro.classList.add("darkModeClass");
        navBar.classList.add("darkModeClass");
        sections.forEach(x => x.classList.add("darkModeClass"));
        container.classList.add("darkModeMain");
        footer.style.color = "#e1dbdb";
        darkMode.style.color = "#e1dbdb"
        resumeCard.forEach(x => x.classList.add("darkModeClassCard"));
        ratingBox.forEach(x => x.classList.add("darkModeClassCard"));
    }
    clicked = !clicked;
}

// MODAL (WORK)
modalBtnCard.forEach((x, i) => x.onclick = () => {
    modal[i].style.display = "block";
})

closeModal.forEach((y, j) => y.onclick = () => {
    modal[j].style.display = "none";
})

console.log(modal)



//MODAL (BLOG)
modalBtnCard2.forEach((t, i) => t.onclick = () => {
    if (i===0 || i===3 || i===4)
    modal2[0].style.display = "block";
    else      modal2[1].style.display = "block";
})

closeModal2.forEach((y, j) => y.onclick = () => {
    modal2[j].style.display = "none";
})


//kad paspaudus bet kur ant lango uzsidarytu modal'as
window.onclick = (e) => {
    console.log(e)
    for (let i = 0; i < modal.length; i++) {
        if (e.target === modal[i]) {
            console.log(i, "index")
            modal[i].style.display = "none";
        }
    }
    if (e.target === modal2[0])
        modal2[0].style.display = "none";
    if (e.target === modal2[1])
        modal2[1].style.display = "none";
}
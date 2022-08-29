let slideBar = document.getElementById("bar"),
    aside = document.getElementById("aside");
slideBar.onclick = () => {
    slideBar.classList.toggle("active");
    aside.classList.toggle("link");
};
let light = document.getElementById("light"),
    dark = document.getElementById("dark");
light.onclick = () => {
    light.classList.add("active-icon");
    if (dark.classList.contains('active-icon')) {
    dark.classList.remove("active-icon");
    }
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
};
dark.onclick = () => {
    dark.classList.add("active-icon");
    if (light.classList.contains('active-icon')) {
    light.classList.remove("active-icon");
    }
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
};
window.onload = () => {
    if(localStorage.getItem("theme")==="dark") {
        document.body.classList.add("dark");
    dark.classList.add("active-icon");
    if (light.classList.contains('active-icon')) {
    light.classList.remove("active-icon");
    }
    } else {
        document.body.classList.remove("dark");
        light.classList.add("active-icon");
        if (dark.classList.contains('active-icon')) {
        dark.classList.remove("active-icon");
    }
    }
};


















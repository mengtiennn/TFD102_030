const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".list");
const navlinks = document.querySelector(".listselect");
const links = document.querySelectorAll(".listselect li");

const alinks = document.querySelectorAll(".hamburger div");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
});


hamburger.addEventListener("click", () => {
    alinks[0].classList.toggle("change");
    alinks[1].classList.toggle("change");
    alinks[2].classList.toggle("change");
});
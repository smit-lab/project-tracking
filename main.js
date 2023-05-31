let hamburger = document.getElementById("hamburger"),
  menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menu.classList.toggle("display-grid");
  menu.classList.toggle("menu-animation");
});

window.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && event.target !== hamburger) {
    menu.classList.remove("display-grid");
    hamburger.classList.remove("open");
  }
});

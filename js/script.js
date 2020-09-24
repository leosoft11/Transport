const Open = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const Close = document.querySelector(".menu__close");
const bodylock = document.querySelector("body");

Open.addEventListener("click", function () {
  menu.classList.add("active");
  bodylock.style.overflow = "hidden";

  Close.addEventListener("click", function () {
    menu.classList.remove("active");
    bodylock.style.overflow = "visible";
  });
});

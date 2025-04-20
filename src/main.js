const nav = document.querySelector("#nav");
const abrir = document.querySelector("#open-menu");
const cerrar = document.querySelector("#close-menu");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

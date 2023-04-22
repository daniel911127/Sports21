const menu = document.querySelector(".menu");
const menuMovil = document.querySelector(".inactive");

menu.addEventListener("click", cambioEstadoMenu);

function cambioEstadoMenu() {
  console.log("click", menuMovil);
  const isMenuMobileClosed = menuMovil.classList.contains("inactive");
  console.log(isMenuMobileClosed);
  if (!isMenuMobileClosed) {
    menuMovil.classList.add("inactive");
  } else {
    menuMovil.classList.remove("inactive");
  }
}

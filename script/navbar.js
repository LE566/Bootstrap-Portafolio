let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Si el scroll va hacia abajo, ocultar el navbar
    navbar.classList.add("hidden");
  } else {
    // Si el scroll va hacia arriba, mostrar el navbar
    navbar.classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para que no se vuelva negativo
});

export function menuMobile() {
  const hamburgerMenu = document.querySelector(".menu-hamburger");
  const navContainer = document.querySelector(".nav-container");
  const navLinks = document.querySelectorAll(".nav-container a");

  hamburgerMenu.addEventListener("click", () => {
    const isOpen = hamburgerMenu.classList.toggle("active");

    navContainer.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    hamburgerMenu.setAttribute("aria-expanded", isOpen);
    hamburgerMenu.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu",
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerMenu.classList.remove("active");
      navContainer.classList.remove("active");
      document.body.classList.remove("menu-open");

      hamburgerMenu.setAttribute("aria-expanded", "false");
      hamburgerMenu.setAttribute("aria-label", "Abrir menu");
    });
  });
}

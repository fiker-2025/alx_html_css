// ======= HAMBURGER MENU SCRIPT =======
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Close menu when a link is clicked (optional)
  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });
});
// ======= END OF HAMBURGER MENU SCRIPT =======
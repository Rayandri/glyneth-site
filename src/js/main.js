document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-target]");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.classList.toggle("hidden");
        }
      });
    });
  });
  

document.getElementById("avatar-toggle").addEventListener("click", () => {
  const menu = document.getElementById("menu-buttons");
  menu.hidden = !menu.hidden;
});
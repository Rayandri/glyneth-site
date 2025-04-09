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
  
document.getElementById('avatar').addEventListener('click', function () {
    const buttons = document.querySelectorAll('button[data-target]');
    buttons.forEach(button => {
      button.classList.toggle('hidden');
    });
  });


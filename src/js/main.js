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

// Auto-answer button handler
const bruteForceBtn = document.getElementById('brute-force-btn');
if (bruteForceBtn) {
  bruteForceBtn.addEventListener('click', function() {
    const correctAnswers = [
      "A1_2", // Entreprise
      "A2_1", // Oui à l'informatique
      "A3_1", // Région parisienne
      "A4_2"  // Non au robot
    ];
    
    // Store the correct answers in session storage
    sessionStorage.setItem('reponses', JSON.stringify(correctAnswers));
    
    // Redirect to the contact form
    window.location.href = 'A{1}_{2}B{2}_{1}C{3}_{1}D{4}_{2}.html';
  });
}


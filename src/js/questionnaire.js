//questionnaire

const questions = [
    {
        question : "Quel pays n'existe pas ?",
        options : ["Kirghizistan", "Nouvelle Papouasie", "Malawi", "Sainte Lucie"],
        reponse : "Nouvelle Papouasie"
    }, 
    {
        question : "Sydney est la capitale d'Australie ?", 
        options : ["Vrai", "Faux"],
        reponse : "Faux"
    },
    {
        question : "Quelle est la ville la plus peuplée du monde ?",
        options : ["Tokyo, Japon", "Bombay, Inde", "Shanghai, Chine", "Sao Paulo, Brésil"],
        reponse : "Tokyo, Japon"
    },
    {
        question : "Êtes-vous un robot ?",
        options : ["Oui", "Non"],
        reponse : "Non"
    }]


  
window.onload = () => {
    const container = document.getElementById("questions-container");
    const resultat = document.getElementById("resultat");
    const boutonFormulaire = document.getElementById("acces-formulaire");
    const formulaire = document.getElementById("formulaire");
  
    // Affichage des questions
    questions.forEach((q, index) => {
      const div = document.createElement("div");
      div.className = "form-control";
  
      const label = document.createElement("label");
      label.className = "label";
      label.innerHTML = `
        <span class="label-text">${q.question}</span>
        `;
      div.appendChild(label);
      div.classList.add("space-y-2", "mb-6", "p-2", "bg-base-300");



      q.options.forEach(option => {
        const opt = document.createElement("label");
        opt.className = "label cursor-pointer flex items-center gap-2";
        opt.innerHTML = `
          <input type="radio" name="question${index}" value="${option}" class="radio radio-secondary" />
          <span class="label-text ml-2">${option}</span>
        `;
        div.appendChild(opt);
      });
  
      container.appendChild(div);
    });
  
    // Bouton valider
    document.getElementById("valider").addEventListener("click", () => {
      let score = 0;
  
      questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === q.reponse) {
          score++;
        }
      });
  
      const taux = Math.round((score / questions.length) * 100);
      resultat.classList.remove("hidden");
  
      if (taux === 100) {
        resultat.textContent = `🎉 Bravo ! Vous avez ${taux}% de bonnes réponses.`;
        boutonFormulaire.classList.remove("hidden");
      } else {
        resultat.textContent = `❌ Vous avez obtenu ${taux}%. Réessayez.`;
        boutonFormulaire.classList.add("hidden");
      }
    });
  
    // Bouton pour accéder au formulaire si 100%
    boutonFormulaire.addEventListener("click", () => {
      document.getElementById("questionnaire").classList.add("hidden");
      formulaire.classList.remove("hidden");
    });
  };
 
  



//formulaire

document.getElementById('envoyer-btn').addEventListener('click', function (event) {
    event.preventDefault();
  
    if (validateForm()) {
        const prenom = document.getElementById('prenom').value.trim();
        document.getElementById('bonjour-message').innerText = `Bonjour ${prenom} !`;
        document.getElementById('my_modal').showModal();
    }
});
  
function validateForm() {
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!nom || !prenom || !email || !message) {
        document.getElementById('toast-message').innerText = "Merci de remplir tous les champs avant d'envoyer.";
        const toast = document.getElementById('error-toast');
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3000);
        return false;
    }

    // Simple validation d'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('toast-message').innerText = "L'adresse e-mail n'est pas valide.";
        const toast = document.getElementById('error-toast');
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3000);
        
      return false;
    }

    return true;
}

document.querySelector('button.btn').addEventListener('click', function (event) {
    event.preventDefault(); // éviter l'envoi par défaut

    if (validateForm()) {
      my_modal.showModal(); // afficher le modal si tout est OK
    }
});


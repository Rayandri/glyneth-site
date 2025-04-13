//questionnaire

const questions = [
    {
        qlabel : "Quel pays n'existe pas ?", qid : 1,
        reponses : [{rid : 1, option : "Kirghizistan"}, {rid : 2, option : "Nouvelle Papouasie"}, {rid : 3, option : "Malawi"}, {rid : 4, option : "Sainte Lucie"}],
    }, 
    {
        qlabel : "Sydney est la capitale d'Australie ?", qid : 2,
        reponses : [{rid : 1, rlabel : "Vrai"}, {rid : 2, rlabel : "Faux"}],
    },
    {
        qlabel : "Quelle est la ville la plus peuplée du monde ?", qid : 3,
        reponses: [{rid : 1, rlabel : "Tokyo, Japon"}, {id : 2, rlabel : "Bombay, Inde"}, {id : 3, rlabel : "Shanghai, Chine"}, {id : 4, rlabel : "Sao Paulo, Brésil"}],
    },
    {
        qlabel : "Êtes-vous un robot ?", qid : 4,
        reponses : [{id : 1, rlabel : "Oui"}, {id : 2, rlabel : "Non"}],
    }]

  
window.onload = () => {
    const container = document.getElementById("questions-container");
    const resultat = document.getElementById("resultat");
    const boutonFormulaire = document.getElementById("acces-formulaire");
    const formulaire = document.getElementById("formulaire");
    const quiz = document.getElementById("questionnaire");
  
    // Affichage des questions
    questions.forEach((q, index) => {
      const div = document.createElement("div");
      div.className = "form-control";
  
      const label = document.createElement("label");
      label.className = "label";
      label.textContent = q.q;
      div.appendChild(label);
      div.classList.add("space-y-2", "mb-6", "p-2", "bg-base-300");

      Object.keys(q.options).forEach(key => {
        const opt = document.createElement("label");
        opt.className = "label cursor-pointer flex items-center gap-2";
        
        const input = document.createElement("input")
        input.type = "radio";
        input.name = `question${index}`;
        input.value = key;
        input.className = "radio radio-secondary";

        const span = document.createElement("span");
        span.className = "label-text";
        span.textContent = q.options[key];

        opt.appendChild(input);
        opt.appendChild(span)
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
};
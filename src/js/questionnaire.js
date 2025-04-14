const questions = [
  {
    qlabel: "Quel pays n'existe pas ?", qid: 1,
    reponses: [
      {rid: 1, option: "Kirghizistan"},
      {rid: 2, option: "Nouvelle Papouasie"},
      {rid: 3, option: "Malawi"},
      {rid: 4, option: "Sainte Lucie"}
    ],
    reponse: "Q1.r2"
  },
  {
    qlabel: "Sydney est la capitale d'Australie ?", qid: 2,
    reponses: [
      {rid: 1, rlabel: "Vrai"},
      {rid: 2, rlabel: "Faux"}
    ],
    reponse: "Q2.r2"
  },
  {
    qlabel: "Quelle est la ville la plus peuplée du monde ?", qid: 3,
    reponses: [
      {rid: 1, rlabel: "Tokyo, Japon"},
      {id: 2, rlabel: "Bombay, Inde"},
      {id: 3, rlabel: "Shanghai, Chine"},
      {id: 4, rlabel: "Sao Paulo, Brésil"}
    ],
    reponse: "Q3.r1"
  },
  {
    qlabel: "Êtes-vous un robot ?", qid: 4,
    reponses: [
      {rid: 1, rlabel: "Oui"},
      {rid: 2, rlabel: "Non"}
    ],
    reponse: "Q4.r2"
  }
];
  
window.onload = () => {

  const container = document.getElementById("questions-container");
  const resultat = document.getElementById("resultat");
  const boutonFormulaire = document.getElementById("acces-formulaire");
  const boutonReessayer = document.getElementById("reessayer");
  const boutonValider = document.getElementById("valider");
  
  // Affichage des questions
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "form-control";
  
    const titreQuestion = document.createElement("p");
    titreQuestion.className = "label";
    titreQuestion.textContent = q.qlabel;
    div.appendChild(titreQuestion);
    div.classList.add("space-y-2", "mb-6", "p-2", "bg-base-300");

    q.reponses.forEach((reponse) => {
      const label = document.createElement("label");
      label.className = "label cursor-pointer flex items-center gap-2";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      input.value = `Q${q.qid}.r${reponse.rid}`;
      input.className = "radio radio-secondary";

      const span = document.createElement("span");
      span.className = "label-text";
      span.textContent = reponse.option || reponse.rlabel;

      label.appendChild(input);
      label.appendChild(span);
      div.appendChild(label);
    });

    container.appendChild(div);
  });

  // Bouton valider
  document.getElementById("valider").addEventListener("click", () => {
    let score = 0;
    const reponses = [];

    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}\"]:checked`);
      console.log(`Question ${index + 1}: sélectionné = ${selected ? selected.value : 'aucun'}, correct = ${q.reponse}`);
      if (selected && selected.value === q.reponse) {
        score++;
      }
      reponses.push(selected ? selected.value : null);
    });

    sessionStorage.setItem('reponses', JSON.stringify(reponses));
    const taux = Math.round((score / questions.length) * 100);
    resultat.classList.remove("hidden");

    if (taux === 100) {
      resultat.textContent = `🎉 Bravo ! Vous avez ${taux}% de bonnes réponses.`;
      boutonFormulaire.classList.remove("hidden");
      boutonReessayer.classList.add("hidden");
      boutonValider.classList.add("hidden");
    } else {
      resultat.textContent = `❌ Vous avez obtenu ${taux}%. Réessayez.`;
      boutonFormulaire.classList.add("hidden");
      boutonReessayer.classList.remove("hidden");
      boutonValider.classList.add("hidden");
    }
  });
};

 //modal

 window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.showModal();
  }
});

//bouton brute force


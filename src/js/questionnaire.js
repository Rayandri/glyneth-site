const questions = [
  {
    qlabel: "Qui êtes-vous ?", qid: 1,
    reponses: [
      {rid: 1, rlabel: "Un particulier"},
      {rid: 2, rlabel: "Une entreprise"},
      {rid: 3, rlabel: "Une association"},
      {rid: 4, rlabel: "Une administration publique"}
    ],
    reponse: "Q1.r2"
  },
  {
    qlabel: "Travaillez-vous dans le secteur de l'informatique ?", qid: 2,
    reponses: [
      {rid: 1, rlabel: "Oui"},
      {rid: 2, rlabel: "Non"}
    ],
    reponse: "Q2.r1"
  },
  {
    qlabel: "Où êtes-vous domiciliés ?", qid: 3,
    reponses: [
      {rid: 1, rlabel: "Région parisienne"},
      {id: 2, rlabel: "France métropolitaine"},
      {id: 3, rlabel: "Royaume-Uni"},
      {id: 4, rlabel: "Étranger"}
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
      var tab = 
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
      document.getElementById("brute-force-btn").classList.add("hidden");
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

document.getElementById("brute-force-btn").addEventListener("click", () => {
  bruteForceTest();
  document.getElementById("brute-force-btn").classList.add("hidden");
});

function bruteForceTest() {
  const totalQuestions = questions.length;
  let allAnswers = [];
  
  questions.forEach((q, index) => {
      let questionAnswers = [];
      q.reponses.forEach((reponse) => {
          questionAnswers.push(`Q${q.qid}.r${reponse.rid}`);
      });
      allAnswers.push(questionAnswers);
  });

  let allCombinations = cartesianProduct(allAnswers);
  let highestScore = 0;
  let bestCombination = [];

  allCombinations.forEach((combination) => {
      let score = 0;
      combination.forEach((answer, index) => {
          const input = document.querySelector(`input[value=\"${answer}\"]`);
          if (input) {
              input.checked = true;
          }
          if (answer === questions[index].reponse) {
              score++;
          }
      });
      if (score > highestScore) {
          highestScore = score;
          bestCombination = combination;
      }
  });

  bestCombination.forEach((answer) => {
      const input = document.querySelector(`input[value=\"${answer}\"]`);
      if (input) {
          input.checked = true;
      }
  });
  document.getElementById("valider").click();
}

function cartesianProduct(arr) {
  return arr.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
}


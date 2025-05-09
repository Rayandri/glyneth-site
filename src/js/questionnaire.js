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
      {rid: 2, rlabel: "France métropolitaine"},
      {rid: 3, rlabel: "Royaume-Uni"},
      {rid: 4, rlabel: "Étranger"}
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

let currentQuestionIndex = 0;
let userResponses = [];

function displayQuestion(index) {
  document.getElementById("valider").classList.add("hidden");
  document.getElementById("resultat").classList.add("hidden");
  
  const container = document.getElementById("questions-container");
  container.innerHTML = "";
  
  if (index >= questions.length) {
    checkAnswers();
    return;
  }
  
  const q = questions[index];
  const div = document.createElement("div");
  div.className = "form-control space-y-2 mb-6 p-2 bg-base-300";

  const titreQuestion = document.createElement("p");
  titreQuestion.className = "label";
  titreQuestion.textContent = q.qlabel;
  div.appendChild(titreQuestion);

  q.reponses.forEach((reponse) => {
    const label = document.createElement("label");
    label.className = "label cursor-pointer flex items-center gap-2";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question${index}`;
    input.value = `Q${q.qid}.r${reponse.rid}`;
    input.dataset.qid = q.qid;
    input.dataset.rid = reponse.rid;
    input.className = "radio radio-secondary";
    
    input.addEventListener("click", function() {
      const responseValue = `A${this.dataset.qid}_${this.dataset.rid}`;
      userResponses[index] = responseValue;
      console.log(`Question ${index + 1}: réponse = ${responseValue}`);
      
      setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
      }, 300);
    });

    const span = document.createElement("span");
    span.className = "label-text";
    span.textContent = reponse.option || reponse.rlabel;

    label.appendChild(input);
    label.appendChild(span);
    div.appendChild(label);
  });

  container.appendChild(div);
}

function checkAnswers() {
  const resultat = document.getElementById("resultat");
  const boutonFormulaire = document.getElementById("acces-formulaire");
  const boutonReessayer = document.getElementById("reessayer");
  
  const correctAnswers = [
    "A1_2", // Entreprise
    "A2_1", // Oui à l'informatique
    "A3_1", // Région parisienne
    "A4_2"  // Non au robot
  ];
  
  const isCorrect = userResponses.length === 4 && 
    userResponses[0] === correctAnswers[0] &&
    userResponses[1] === correctAnswers[1] &&
    userResponses[2] === correctAnswers[2] &&
    userResponses[3] === correctAnswers[3];
  
  resultat.classList.remove("hidden");
  
  if (isCorrect) {
    resultat.textContent = `🎉 Merci pour vos réponses ! Vous allez être redirigé vers le formulaire de contact.`;
    boutonFormulaire.classList.remove("hidden");
    boutonReessayer.classList.add("hidden");
  } else {
    resultat.textContent = `Suite à vos réponses, vous ne souhaitez pas être contacté.`;
    boutonReessayer.classList.remove("hidden");
    boutonFormulaire.classList.add("hidden");
  }
  
  sessionStorage.setItem('reponses', JSON.stringify(userResponses));
}

window.onload = () => {
  displayQuestion(currentQuestionIndex);
  document.getElementById("valider").classList.add("hidden");
  
  document.getElementById("reessayer").addEventListener("click", () => {
    currentQuestionIndex = 0;
    userResponses = [];
    displayQuestion(currentQuestionIndex);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.showModal();
  }
});

// Brute force functionality moved to main.js


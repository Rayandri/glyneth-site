var questionaire = [{question : "Quel pays n'existe pas ?", reponses : [{id : 1, reponse : "Kirghizistan"}, {id : 2, reponse : "Guinée Bissau"}, {id : 3, reponse : "Nouvelle Papouasie"}]}, {question : "Sydney est la capitale d'Australie ?", reponses : [{id : 1, reponse : "Vrai"}, {id : 2, reponse : "Faux"}]}]


document.getElementById('send-btn').addEventListener('click', function (event) {
    event.preventDefault();
  
    if (validateForm()) {
        const prenom = document.getElementById('prenom').value.trim();
        document.getElementById('bonjour-message').innerText = `Bonjour ${prenom} !`;
        document.getElementById('my_modal_5').showModal();
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
      my_modal_5.showModal(); // afficher le modal si tout est OK
    }
});


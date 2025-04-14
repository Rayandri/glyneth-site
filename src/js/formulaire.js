document.getElementById('envoyer-btn').addEventListener('click', function (event) {
    event.preventDefault();
  
    if (validateForm()) {
        const nom = document.getElementById('nom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const reponses = { nom, prenom, email, message };
        localStorage.setItem('reponses', JSON.stringify(reponses));

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

    // Validation d'email
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
    event.preventDefault();

    if (validateForm()) {
      my_modal.showModal(); 
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});


document.getElementById('envoyer-mail').addEventListener('click', function () {
    const reponses = JSON.parse(localStorage.getItem('reponses')) || {};
    const nom = reponses.nom || '';
    const prenom = reponses.prenom || '';
    const email = reponses.email || '';
    const message = reponses.message || '';
    const mailtoLink = `mailto:glyneth.lawrence@gmail.com?subject=Résultats du Questionnaire&body=Nom: ${nom}%0D%0APrénom: ${prenom}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
});

    
  
// Charger les avis à partir du localStorage
function loadAvis() {
    const avisContainer = document.getElementById('avisContainer');
    const avisData = JSON.parse(localStorage.getItem('avis')) || [];
    avisContainer.innerHTML = '<h2>Avis :</h2>';
    avisData.forEach(function(avis) {
      const avisDiv = document.createElement('div');
      avisDiv.classList.add('avis');

      const nomElement = document.createElement('p');
      nomElement.classList.add('nom');
      nomElement.textContent = avis.nom;

      const avisElement = document.createElement('p');
      avisElement.textContent = avis.avis;

      avisDiv.appendChild(nomElement);
      avisDiv.appendChild(avisElement);

      avisContainer.appendChild(avisDiv);
    });
  }

  // Sauvegarder un nouvel avis dans le localStorage
  function saveAvis(nom, avis) {
    const avisData = JSON.parse(localStorage.getItem('avis')) || [];
    avisData.push({ nom: nom, avis: avis });
    localStorage.setItem('avis', JSON.stringify(avisData));
  }

  // Événement de soumission du formulaire
  document.getElementById('avisForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const nom = document.getElementById('nom').value;
    const avis = document.getElementById('avis').value;

    if (nom && avis) {
      saveAvis(nom, avis); // Sauvegarde l'avis dans le localStorage
      loadAvis(); // Recharge les avis
      document.getElementById('avisForm').reset(); // Réinitialise le formulaire
    }
  });

  // Charger les avis au démarrage de la page
  loadAvis();
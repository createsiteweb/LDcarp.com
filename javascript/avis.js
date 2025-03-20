// Fonction pour récupérer les commentaires depuis localStorage
function getCommentaires() {
    const commentaires = localStorage.getItem('commentaires');
    return commentaires ? JSON.parse(commentaires) : []; // Si les commentaires existent, on les parse, sinon on retourne un tableau vide
  }

  // Fonction pour sauvegarder les commentaires dans localStorage
  function saveCommentaires(commentaires) {
    localStorage.setItem('commentaires', JSON.stringify(commentaires));
  }

  // Fonction pour afficher les commentaires
  function afficherCommentaires() {
    const commentaireContainer = document.getElementById('commentaireContainer');
    commentaireContainer.innerHTML = '<h2>Commentaires :</h2>'; // Réinitialiser la liste

    const commentaires = getCommentaires(); // Récupérer les commentaires

    // Afficher tous les commentaires
    commentaires.forEach((commentaire, index) => {
      const div = document.createElement('div');
      div.classList.add('commentaire');

      const nomElement = document.createElement('p');
      nomElement.classList.add('nom');
      nomElement.textContent = commentaire.nom;

      const texteElement = document.createElement('p');
      texteElement.textContent = commentaire.commentaire;

      const boutonSupprimer = document.createElement('button');
      boutonSupprimer.textContent = "Supprimer";
      boutonSupprimer.classList.add('supprimer');
      boutonSupprimer.onclick = function() {
        supprimerCommentaire(index);
      };

      div.appendChild(nomElement);
      div.appendChild(texteElement);
      div.appendChild(boutonSupprimer);
      commentaireContainer.appendChild(div);
    });
  }

  // Fonction pour supprimer un commentaire
  function supprimerCommentaire(index) {
    const commentaires = getCommentaires(); // Récupérer les commentaires existants
    commentaires.splice(index, 1); // Supprimer l'élément à l'index spécifié
    saveCommentaires(commentaires); // Sauvegarder les commentaires après suppression

    afficherCommentaires(); // Mettre à jour l'affichage des commentaires
  }

  // Événement de soumission du formulaire
  document.getElementById('commentaireForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const nom = document.getElementById('nom').value;
    const commentaire = document.getElementById('commentaire').value;

    if (nom && commentaire) {
      const commentaires = getCommentaires(); // Récupérer les commentaires existants
      commentaires.push({ nom, commentaire }); // Ajouter le nouveau commentaire
      saveCommentaires(commentaires); // Sauvegarder les commentaires

      // Afficher les commentaires
      afficherCommentaires();

      // Réinitialiser le formulaire
      document.getElementById('commentaireForm').reset();
    }
  });

  // Afficher les commentaires au démarrage de la page
  afficherCommentaires();
// Tableau pour stocker les paniers
let paniers = Array.from({ length: 23 }, () => []);  // Crée un tableau de 23 sous-tableaux

// Fonction pour ajouter un article au panier spécifique
function addItemToCart(cartNumber) {
    const article = document.getElementById(`article${cartNumber}`).value;
    const color = document.getElementById(`color${cartNumber}`).value;
    const quantity = document.getElementById(`quantity${cartNumber}`).value;
    const gramme = document.getElementById(`gramme${cartNumber}`).value;
    const aspect = document.getElementById(`aspect${cartNumber}`).value;

    paniers[cartNumber - 1].push({ article, color, quantity, gramme, aspect });  // Ajouter l'article au panier
    displayCart(cartNumber);  // Afficher le panier mis à jour
}

// Fonction pour afficher le panier spécifique
function displayCart(cartNumber) {
    const cartTableBody = document.getElementById(`cartTable${cartNumber}`).getElementsByTagName('tbody')[0];
    cartTableBody.innerHTML = '';  // Vider le tableau avant de le remplir

    const panier = paniers[cartNumber - 1];

    panier.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.article}</td>
            <td>${item.color}</td>
            <td>${item.quantity}</td>
            <td>${item.gramme}</td>
            <td>${item.aspect}</td>
            <td><button onclick="removeItem(${cartNumber}, ${index})">Supprimer</button></td>
        `;
        cartTableBody.appendChild(row);
    });
}

// Fonction pour supprimer un article d'un panier spécifique
function removeItem(cartNumber, index) {
    paniers[cartNumber - 1].splice(index, 1);  // Retirer l'article du panier
    displayCart(cartNumber);  // Mettre à jour l'affichage du panier
}

// Fonction pour passer la commande
function passerCommande() {
    let emailBody = "Voici les détails de votre commande :\n\n";

    // Parcourir tous les paniers
    paniers.forEach((panier, cartNumber) => {
        panier.forEach(item => {
            emailBody += `\nArticle: ${item.article}\nCouleur: ${item.color}\nQuantité: ${item.quantity}\nGrammes: ${item.gramme}\nAspect: ${item.aspect}\n\n`;
        });
    });

    // Vérifier si le panier est vide
    if (emailBody === "Voici les détails de votre commande :\n\n") {
        alert("Votre panier est vide !");
        return;
    }

    const mailtoLink = `mailto:angeluse1985@gmail.com?subject=Nouvelle%20commande&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
}

let panier = [];
        let prixArticle = 20;
        let fraisDePort = 5;

        function ajouterAuPanier() {
            panier.push("Nom de l'Article");
            document.getElementById("cart").style.display = "block";
            document.getElementById("cart-items").innerText = panier.join(", ");
            document.getElementById("total").innerText = panier.length * prixArticle + fraisDePort;
        }

        function payer() {
            window.location.href = "https://www.laposte.fr/colissimo";
        }
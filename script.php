<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email']; // Email du client
    $total = $_POST['total']; // Montant payé

    // 1️⃣ Simulation de paiement validé (ici, on suppose que c'est validé)
    $paiement_valide = true; // À remplacer par une vraie validation

    if ($paiement_valide) {
        // 2️⃣ Génération du message de facture
        $sujet = "Votre facture - Achat confirmé";
        $message = "Bonjour,\n\nMerci pour votre achat !\n\n";
        $message .= "Montant total : " . $total . "€\n";
        $message .= "Mode de livraison : Colissimo\n";
        $message .= "Votre facture est en pièce jointe.\n\nCordialement,\nL'équipe de la boutique";

        $headers = "From: noreply@votreboutique.com\r\n";
        $headers .= "Reply-To: support@votreboutique.com\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // 3️⃣ Envoi de l'e-mail
        mail($email, $sujet, $message, $headers);

        // 4️⃣ Redirection vers une page de confirmation
        header("Location: confirmation.html");
        exit();
    } else {
        echo "Erreur : Le paiement a échoué.";
    }
}
?>
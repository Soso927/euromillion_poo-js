// Fonction qui génère un tableau de "elementNumber" nombres uniques aléatoires
// compris entre 1 et "maxNumber" inclus
function numbersRandomGenerator(maxNumber, elementNumber) {

    // Crée un tableau vide pour stocker les numéros générés
    const arrayNumbers = [];

    // Boucle jusqu’à ce qu’on ait assez de numéros uniques (pas de doublons)
    while (arrayNumbers.length < elementNumber) {

        // Génère un nouveau nombre aléatoire entre 1 et maxNumber inclus
        // Math.random() retourne un float entre 0 et 1 (exclu), donc on le multiplie
        // puis Math.ceil() arrondit vers le haut => [1, maxNumber]
        let newNumber = Math.ceil(Math.random() * maxNumber);

        // Vérifie si ce nombre n’a pas déjà été généré
        // Si ce n’est PAS trouvé dans le tableau (-1), on l’ajoute
        (arrayNumbers.indexOf(newNumber) == -1)
            ? arrayNumbers.push(newNumber) // ✅ ajoute le nombre s'il est unique
            : null; // ❌ sinon, on ne fait rien (et la boucle continue)
    }

    // Retourne le tableau final avec les nombres uniques générés
    return arrayNumbers;
}


// Attend que toute la page soit complètement chargée (HTML, CSS, images, etc.)
window.addEventListener('load', () => {

    // Appelle la fonction numbersRandomGenerator() deux fois :
    // - d'abord pour générer 5 nombres entre 1 et 50 (les "boules" standards)
    // - ensuite pour générer 2 nombres entre 1 et 12 (les "étoiles")
    // Ensuite, on combine (concatène) les deux tableaux en un seul
    numbersRandomGenerator(50, 5)
        .concat(numbersRandomGenerator(12, 2))
        
        // Pour chaque nombre généré (qu'on appelle "uniqueNumber"), on exécute une fonction
        .forEach((uniqueNumber, index) => {

            // Crée dynamiquement un élément HTML <div> pour chaque numéro
            const numberToAdd = document.createElement("div");

            // Si on est dans les 5 premiers numéros (index < 5), c’est une "boule"
            // Sinon, ce sont les 2 dernières positions => des "étoiles"
            (index < 5)
                ? numberToAdd.classList.add("zone", "boule") // classe CSS pour les boules
                : numberToAdd.classList.add("zone", "etoile"); // classe CSS pour les étoiles

            // Ajoute le texte (le numéro généré) à l'intérieur du <div>
            numberToAdd.textContent = uniqueNumber;

            // Ajoute ce <div> dans un élément HTML qui a l’id "resultat"
            document.getElementById("resultat").append(numberToAdd);

            // Déclenche une animation (ou effet visuel CSS) après un petit délai :
            // - Le délai dépend de l’index, pour créer un effet "séquentiel"
            setTimeout(() => {
                numberToAdd.classList.add("show"); // ajoute une classe qui déclenche une animation CSS
            }, 1000 * index + 500); // ex: 500ms, 1500ms, 2500ms, etc.
        });

});


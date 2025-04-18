// 
const generateur = new Loto();
console.log(generateur.numeroStandard);
console.log(generateur.numeroEtoiles);
console.log(generateur.numeroAll);

window.addEventListener('load', () => {

    // Appelle la fonction numbersRandomGenerator() deux fois :
    // - d'abord pour générer 5 nombres entre 1 et 50 (les "boules" standards)
    // - ensuite pour générer 2 nombres entre 1 et 12 (les "étoiles")
    // Ensuite, on combine (concatène) les deux tableaux en un seul



    generateur.numeroAll.forEach((numero,index) => {

        const numberToAdd = document.createElement("div");

        (index < 5)
            ? numberToAdd.classList.add("zone", "boule") 
            : numberToAdd.classList.add("zone", "etoile"); 

        numberToAdd.textContent = numero;

        document.getElementById("resultat").append(numberToAdd);
        // Déclenche une animation (ou effet visuel CSS) après un petit délai :
            // - Le délai dépend de l’index, pour créer un effet "séquentiel"
            setTimeout(() => {
                numberToAdd.classList.add("show"); // ajoute une classe qui déclenche une animation CSS
            }, 1000 * index + 500); // ex: 500ms, 1500ms, 2500ms, etc.
    })
})
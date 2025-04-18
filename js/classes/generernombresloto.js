class Loto {

    #numeroStandard = [];
    #numeroEtoiles = [];
    #numeroAll;

    constructor() {
        this.#genererNumeroStandard()
        this.#genererNumeroEtoiles()
    }

    get numeroStandard() {
        return this.#numeroStandard
    }


    get numeroEtoiles() {
        return this.#numeroEtoiles
    }
    // la méthode (bind) crée une nouvelle fonction qui lorsqu'elle est appelée, a pour contexte this la valeur passé en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créé
    get numeroAll() {
        return this.numeroStandard.concat(this.numeroEtoiles);
    }


    #genererNumeroStandard() {
        while (this.#numeroStandard.length < 5) {
            // génere un nombre aléatoire en 1 et 50.
            let nombresAleatoire = Math.floor(Math.random() * 50) + 1
            if (!this.#numeroStandard.includes(nombresAleatoire))
                this.#numeroStandard.push(nombresAleatoire);
        }
    }


    #genererNumeroEtoiles() {
        while (this.#numeroEtoiles.length < 2) {
            let nombresAleatoire = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
            if (!this.#numeroEtoiles.includes(nombresAleatoire)) {
                this.#numeroEtoiles.push(nombresAleatoire);
            }
        }
    }



    //affichertirage(){
    //  this.container.innerHTML = ""
    //}

}
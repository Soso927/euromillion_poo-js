class Loto {

    #numeroStandard
    #numeroEtoiles

    constructor(numeroStandard, numeroEtoiles) {
        this.#numeroStandard = numeroStandard
        this.#numeroEtoiles = numeroEtoiles
    }

    get numeroStandard() {
        return this.#numeroStandard
    }

    set numeroStandard(numeroStandard) {
        this.#numeroStandard = numeroStandard;
    }

    get numeroEtoiles() {
        return this.#numeroEtoiles
    }

    set numeroEtoiles(numeroEtoiles) {
        this.#numeroEtoiles = numeroEtoiles
    }

    _genererNombreLoto() {

        let numeroStandard = [];
        while (numeroStandard.length < 5)
            nombresAleatoire = number
        // génere un nombre aléatoire en 1 et 50.
        let nombresAleatoire = Math.floor(Math.random() * 50) + 1
        if(!numeroStandard.includes(nombresAleatoire))
            numeroStandard.push
    }
}
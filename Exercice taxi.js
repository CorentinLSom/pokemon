/// EXERCICE TAXIS


// création de l'array avec les musiques
let arrayMusic = ["ANISSA de WEJDENE", "LA MAXANCE de NAPS", "M'EN ALLER de NAPS","LE FRUIT DE MON EPOQUE de NAPS", "LA KIFFANCE de NAPS"];

// création des 2 classes
class Personnage {
    constructor(name, santeMentale) {
        this.name = name;
        this.santeMentale = santeMentale;
    }
}
let personnage = new Personnage("John", 10);

class Trajet {
    constructor(radio, feuxRouges, nbrChangements) {
        this.radio = radio;
        this.feuxRouges = feuxRouges;
        this.nbrChangements = nbrChangements;
    }
}
let trajet = new Trajet(arrayMusic, 30, 0);

// création de la boucle while qui fonctionne jusqu'à l'explosion de John ou son arrivée chez lui
while(true) {
    let numeroMusique = Math.floor(Math.random() * arrayMusic.length); // choix de la musique aléatoirement

    if (personnage.santeMentale <= 0) {
        console.log(personnage.name + " est lobotomisé, EXPLOSION !");
        break;
    }
    
    if (trajet.feuxRouges <= 0) {
        console.log(personnage.name + " est bien rentré chez lui en changeant " + trajet.nbrChangements + " fois de taxis.");
        break;
    }

    if (numeroMusique == 0) {
        personnage.santeMentale --;
        trajet.nbrChangements ++;
        console.log("La musique est " + trajet.radio[numeroMusique] + ". " + personnage.name +
        " change de taxi, et perd 1 point de santé mentale. Il lui reste " + personnage.santeMentale + " points de santé mentale." + "Il reste " + trajet.feuxRouges + " feux rouges.");
        
    }else{
        console.log("La musique est " + trajet.radio[numeroMusique] + " et il reste " + trajet.feuxRouges + " feux rouges.");
    }

    trajet.feuxRouges --;
}
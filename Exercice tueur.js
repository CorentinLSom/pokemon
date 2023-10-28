/// EXERCICE TUEUR EN SERIE

// création des classes

class Tueur {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
}

class Caracteristique {
    constructor(name, probaMourir, probaDegats, probaMourirDegats) {
        this.name = name;
        this.probaMourir = probaMourir;
        this.probaDegats = probaDegats;
        this.probaMourirDegats = probaMourirDegats;
    }
}

class Survivant {
    constructor(name, caracteristique) {
        this.name = name;
        this.caracteristique = caracteristique;
    }
}

// création des instances

let tueur = new Tueur("Jason", 100);

let arrayCaracteristique = new Array();
arrayCaracteristique.push(new Caracteristique("sportif", 0.2, 0.5, 0.3));
arrayCaracteristique.push(new Caracteristique("nerd", 0.4, 0.2, 0.4));
arrayCaracteristique.push(new Caracteristique("blonde", 0.3, 0.4, 0.3));
arrayCaracteristique.push(new Caracteristique("brute", 0.2, 0.6, 0.2));
arrayCaracteristique.push(new Caracteristique("gothique", 0.5, 0.4, 0.1));

let arrayName = ["Brandon", "Jessica", "Matthew", "John", "CJ", "Luis", "Tiffany", "Monica", "Joey", "Amber", "Dylan", "Rick", "Amy"];

let arraySurvivant = new Array();
for(let i = 1; i <= 5; i++) {
    let numeroName = Math.floor(Math.random() * arrayName.length);
    let numeroCaracteristique = Math.floor(Math.random() * arrayCaracteristique.length);
    let survivant = new Survivant(arrayName[numeroName], arrayCaracteristique[numeroCaracteristique]);
    arraySurvivant.push(survivant);
    arrayName.splice(numeroName, 1);
}

let arrayMort = new Array(); // array pour regrouper les morts

let degatsInflige = 10
let degatsInfligeMort = 15

while(true) {
    if (tueur.hp <= 0) {
        console.log(tueur.name + " est mort. Les survivants ont gagnés mais R.I.P. à " + arrayMort.join(", ") + ".");
        break;
    }

    if (arraySurvivant.length == 0) {
        console.log("Il n'y a plus de survivants en vie, " + tueur.name + " a gagné avec " + tueur.hp + " hp restants.");
        break;
    }

    let numeroCombat = Math.floor(Math.random() * arraySurvivant.length);
    let survivantCombat = arraySurvivant[numeroCombat];

    let survivantLuck = Math.random();

    if (survivantLuck <= survivantCombat.caracteristique.probaMourir) {
        console.log(survivantCombat.name + " a été tué et était " + survivantCombat.caracteristique.name + ".");
        arraySurvivant.splice(numeroCombat, 1);
        arrayMort.push(survivantCombat.name);
    }else if(survivantLuck <= survivantCombat.caracteristique.probaMourir + survivantCombat.caracteristique.probaDegats) {
        console.log(survivantCombat.name + " a esquivé et inflige " + degatsInflige + " DMG à " + tueur.name + ".");
        tueur.hp -= degatsInflige;
    }else{
        console.log(survivantCombat.name + " inflige " + degatsInfligeMort + " DMG a " + tueur.name + ", mais meurt.");
        tueur.hp -= degatsInfligeMort;
        arraySurvivant.splice(numeroCombat, 1);
        arrayMort.push(survivantCombat.name);
    }
}
/// EXERCICE POKEMON

console.log("Exercice combat Pokemon");

// classe :

class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }
    isLucky () {
        return Math.random() < this.luck;
    }

    attackPokemon(pokemonAttaque) {
        let hpPerdu = this.attack - pokemonAttaque.defense;
        pokemonAttaque.hp = pokemonAttaque.hp - hpPerdu;
        console.log(this.name + " inflige " + hpPerdu + " à " + pokemonAttaque.name + " et il lui reste " + pokemonAttaque.hp +" hp.");
    }
}

// objets pokemons :

let pikachu = new Pokemon("Pikachu",60 ,20 ,100 ,0.8);
let bulbizarre = new Pokemon("Bulbizarre",40 ,30 ,100 ,0.9);

// combat :

while(true) {
    if (pikachu.isLucky() == true) {
        pikachu.attackPokemon(bulbizarre);
    }
    
    if (bulbizarre.isLucky() == true) {
        bulbizarre.attackPokemon(pikachu);
    }

    if(bulbizarre.hp <= 0) {
        console.log("Bulbizarre a perdu");
        break;
    }

    if(pikachu.hp <= 0) {
        console.log("Pikachu a perdu");
        break;
    }
}
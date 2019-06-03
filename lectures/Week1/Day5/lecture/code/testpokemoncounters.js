var pokemonCountersModule = require("./pokemoncounters");
console.log(pokemonCountersModule);
var pokemonCounters = pokemonCountersModule.pokemonCounters;

var fireReturn = pokemonCounters("fire");

if( fireReturn.includes("water") && fireReturn.includes("ground") && fireReturn.includes("rock")){
    console.log("pokemonCounters('fire') returned the correct output");
}else{
    console.log("pokemonCounters('fire') returned the incorrect output");
}
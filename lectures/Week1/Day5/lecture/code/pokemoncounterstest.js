var pokemonCountersModule = require("./pokemoncounters");
var pokemonCounters = pokemonCountersModule.pokemonCounters;

console.log(pokemonCountersModule);

//testing 
var fireReturn = pokemonCounters("fire");
console.log(fireReturn);

if(fireReturn.length>0){
    if(fireReturn.includes("water")&&fireReturn.includes("ground")&&fireReturn.includes("rock")){
        console.log("pokemonCounters returned the correct counters for fire type");
    }else{
        console.log("Incorrect counters were returned");
    }
}else{
    console.log("Incorrect counters were returned");
}

var waterReturn = pokemonCounters("water");

if(waterReturn.length>0){
    if(waterReturn.includes("grass")&&waterReturn.includes("electric")){
        console.log("pokemonCounters returned the correct counters for water type");
    }else{
        console.log("Incorrect counters were returned");
    }
}else{
    console.log("Incorrect counters were returned");
}
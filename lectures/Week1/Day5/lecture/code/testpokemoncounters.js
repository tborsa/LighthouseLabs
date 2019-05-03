var pokemonCountersModule = require("./pokemoncounters");
var pokemonCounters = pokemonCountersModule.pokemonCounters;
console.log(pokemonCounters("fire"));

var firereturn = pokemonCounters("fire");
if(firereturn.includes("water")&& firereturn.includes("ground")&&firereturn.includes("rock")){
    console.log("pokemonCounters(fire) returned the correct counters");
}else{
    console.log("pokemonCounters(fire) returned incorrect counters");
}

var waterreturn = pokemonCounters("water");
if(waterreturn.includes("grass")&& waterreturn.includes("electric")){
    console.log("pokemonCounters(water) returned the correct counters");
}else{
    console.log("pokemonCounters(water) returned incorrect counters");
}
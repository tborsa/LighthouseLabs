function pokemonCounters(type){
    var counters= {
        fire : ["water", "ground", "rock"], 
        water: ["grass", "electric"], 
        grass: ["bug", "fire", "flying", "ice", "poison"]
    }
    if(counters[type]){
        return counters[type];
    }else{
        return [];
    }
}

module.exports.pokemonCounters = pokemonCounters;

var fireTest = pokemonCounters("fire");

if( fireTest.includes("water")&&fireTest.includes("ground")&&fireTest.includes("rock")){
    console.log("pokemonCounters('fire') returned the correct counters");
}else {
    console.log("pokemonCounters('fire') returned incorrect counters");
}
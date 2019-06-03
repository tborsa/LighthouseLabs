
// input string of a pokemon type
// return the correct array of counters

//module.exports = {}
function pokemonCounters(type){
    var counters = {
        fire: ["water", "ground", "rock"],
        water: ["grass", "electric"],
        grass: ["bug", "fire", "flying", "ice", "poison"]
    }
    if( counters[type]){
        return counters[type];
    }else{
        return [];
    }
}

module.exports.pokemonCounters = pokemonCounters;



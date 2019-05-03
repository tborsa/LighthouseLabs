
//function that takes in a pokemon type and returns the types weaknesses
function pokemonCounters(type){
    var weaknesses = {
        fire: ["water", "ground", "rock"],
        water: ["electric", "grass"],
        grass: ["bug", "fire", "flying", "ice", "poison"]
    }
    if(weaknesses[type]){
        return weaknesses[type];
    }else{
        return [];
    }
}

module.exports.pokemonCounters = pokemonCounters;



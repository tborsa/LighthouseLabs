//Take in type as a string
//output the weakness or counters to that type
// ["water", "grass"]

var pokemonCounters = function(type){
    var weaknesses = {
        fire: ["water", "ground", "rock"],
        water: ["grass", "electric"],
        grass: ["bug", "fire", "flying", "ice", "poison"]
    }
    //weaknesses.fire ===== weaknesses["fire"]
    if(weaknesses[type]){
        return weaknesses[type];
    }else{
        return [];
    }
}
//Default value of module exports
// module.exports = {};
module.exports.pokemonCounters = pokemonCounters;




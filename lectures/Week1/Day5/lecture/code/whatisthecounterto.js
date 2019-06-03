var pokemonCountersModule = require("./pokemoncounters");
var pokemoncounters = pokemonCountersModule.pokemonCounters;
var chalk = require("chalk");


var input = process.argv[2];

var colors = {
    fire: "red",
    water: "blue",
    grass: "green"
}

var result = pokemoncounters(input);
if(result.length>0){
    if(colors[input]){
        var color = colors[input];
        console.log("The counter to " + chalk[color](input) + " is " + result);
    }else{
        console.log("The counter to " + input + " is " + result);
    }
}else{
    console.log(input +" is not a valid type");
}
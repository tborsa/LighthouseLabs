var pokemonCountersModule = require("./pokemoncounters");
var chalk = require("chalk");

var pokemonCounters = pokemonCountersModule.pokemonCounters;

var input = process.argv[2];

var colors = {
    fire: "red",
    water: "blue",
    ground: "brown",
    electric: "yellow",
    grass: "green"
}

var result = pokemonCounters(input);
if(result.length>0){
    if(colors[input]){
        console.log(chalk[colors[input]](input)+ " is countered by "+ result);
    }else{
        console.log(input+" is countered by "+ result);
    }
}else{
    console.log("Invalid Type.");
}
var pokemonCountersModule = require("./pokemoncounters");
var chalk = require("chalk");

var colors = {
    "fire": "red",
    "water": "blue",
    "grass": "green",
    "electric": "yellow"
}

var pokemonCounters = pokemonCountersModule.pokemonCounters;

var input = process.argv[2];

var result = pokemonCounters(input);

if(result.length>0){
    //input = water;
    //chalk[colors[input]](input)
    //chalk["blue"](input)
    //chalk.blue(input)
    //chalk.blue("water";)
    console.log(chalk[colors[input]](input) +" has the counters "+ result);
}else{
    console.log("Invalid Type.");
}

//function that takes in a pokemon type and returns the types weaknesses
function pokemonCounters(type){
   
}

//test add test for fire water and grass

var firereturn = pokemonCounters("fire");
if(firereturn.includes("water")&& firereturn.includes("ground")&&firereturn.includes("rock")){
    console.log("pokemonCounters(fire) returned the correct counters");
}else{
    console.log("pokemonCounters(fire) returned incorrect counters");
}

// fill out function 

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

// Our function is working but we want to keep
// the function seperate from how it is used or tested
// and we want to be able to use it in other files
//---------------------------------------------------------------->

//comment out test code
//create new file testpokemoncounters.js
//add
var pokemonCountersModule = require("./pokemoncounters");
console.log(pokemonCountersModule);

//To pokemon counters add 

module.exports = "test";

//experiment

module.exports.thing = "test";
module.exports.thingTwo = "hello";

//finally

module.exports.pokemonCounters = pokemonCounters;

//and
var pokemonCounters = pokemonCountersModule.pokemonCounters;
console.log(pokemonCounters("fire"));

//uncomment and add test code to testpokemoncounters.js

//to show we can use the module in multiple files
//add new file whatisthecounterto.js
var pokemonCountersModule = require("./pokemoncounters");
var pokemonCounters = pokemonCountersModule.pokemonCounters;

var input = process.argv[2];

var result = pokemonCounters(input);
if(result.length>0){
    console.log(input+" is countered by "+ result);
}else{
    console.log("Invalid Type.");
}

//------------------------------------------------------------->

// run 
//$ npm init
//$ npm install chalk --save

//Add to whatisthecounterto.js
var chalk = require("chalk");

var colors = {
    fire: "red",
    water: "blue",
    ground: "brown",
    electric: "yellow",
    grass: "green"
}

if(colors[input]){
    console.log(chalk[colors[input]](input)+ " is countered by "+ result);
}else{
    console.log(input+" is countered by "+ result);
}
// talk about .gitignore
// add node_modules/ to gitignore
//---------------------------------------------------->

//run 
//$npm install mocha --save-dev
//$npm install chai --save-dev

//add test folder to project
//add test.js file to test folder
//change package.json scripts to "test": "mocha"

//add to test.js
var assert = require('chai').assert;
var pokemonCounters = require("../pokemoncounters").pokemonCounters;

describe('pokemoncounters module test', function() {
  describe('#pokemonCounters(type)', function() {
    it('should include weaknesses [water, ground, rock] when the type is "fire"', function() {
        var result = pokemonCounters("fire");
        assert.include(result, "water");
        assert.include(result, "ground");
        assert.include(result, "rock");
    });
  });
});
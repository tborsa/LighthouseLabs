//var mocha = require("mocha");
var assert = require("chai").assert;

var pokemonCountersModule = require("../pokemoncounters");
var pokemonCounters = pokemonCountersModule.pokemonCounters;


describe("Testing pokemoncounters module", function(){
    describe("#pokemonCounters(type)", function(){
        var result = pokemonCounters("fire");

        it('Should return ["water", "ground", "rock"] given type fire', function(){
            var result = pokemonCounters("fire");
            assert.include(result, "asdfasdr");
            assert.include(result, "ground");
            assert.include(result, "rock");
        })
        it('Should return ["electric", "grass" ] given type water', function(){
            var result = pokemonCounters("water");
            assert.include(result, "electric");
            assert.include(result, "grass");
        })
        it('Should return ["bug", "fire", "flying", "ice", "poison"] given type grass', function(){
            var result = pokemonCounters("grass");
            assert.include(result, "bug");
            assert.include(result, "flying");
            assert.include(result, "fire");
            assert.include(result, "ice");
            assert.include(result, "poison");

        })
    })

})
var chai = require("chai");
var pokemonCounters = require("../pokemoncounters").pokemonCounters;
var assert = chai.assert;
//describe
//it

describe("Test in pokemoncounters module ", function(){
    describe("pokemoncounters(type) function", function(){
        it("Fire should return [water, ground, rock ]", function(){
            var fireReturn = pokemonCounters("fire");   
            assert.include(fireReturn, "water");
            assert.include(fireReturn, "ground");
            assert.include(fireReturn, "rock");
            assert.include(fireReturn, "dirt");

        })
        it("Water should return [grass, electric]", function(){
            var waterReturn = pokemonCounters("water");   
            assert.include(waterReturn, "grass");
            assert.include(waterReturn, "electric");

        })
        it("Should not return null", function(){
            var fireReturn = pokemonCounters("fire");
            assert.equal(fireReturn, null);
        })
    })

})
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
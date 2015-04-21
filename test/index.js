var combinations = require('../');
var assert = require('assert');

describe('combinations', function(){
	it('should return undefined when k < n', function(){
		assert.isUndefined(combinations(2, 1));
		assert.isUndefined(combinations(5, 2));
		assert.isUndefined(combinations(1000, 25));
	});

	it('should return the number of possible combinations', function(){
		assert.equals(24, combinations(4, 2));
		assert.equals(10, combinations(5, 2));
		assert.equals(40, combinations(5, 3));
		assert.equals(15, combinations(6, 4));
	});
});
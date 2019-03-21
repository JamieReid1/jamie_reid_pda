var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

// write unit tests here in the form of "it should do something..."

// -- Unit tests

  it('should add a number to the previous total', function() {
    calculator.previousTotal = 2;
    calculator.add(2);
    assert.strictEqual(calculator.runningTotal, 4);
  });

  it('should subtract a number from the previous total', function() {
    calculator.previousTotal = 4;
    calculator.subtract(2);
    assert.strictEqual(calculator.runningTotal, 2);
  });

  it('should multiply the previous total by a number', function() {
    calculator.previousTotal = 4;
    calculator.multiply(2);
    assert.strictEqual(calculator.runningTotal, 8);
  });

  it('should divide the previous total by a number', function() {
    calculator.previousTotal = 8;
    calculator.divide(2);
    assert.strictEqual(calculator.runningTotal, 4);
  });

// -- Integration tests

  it('should concatenate multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 123);
  });

  it('should chain multiple operations together', function() {
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 12);
  });

  it('should clear the running total without affecting the calculation', function() {
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 8);
  });

});

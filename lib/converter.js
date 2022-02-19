const Big = require('big.js');

class UnitConverter {

  baseUnitValueFromValue(value) {
    return value;
  }

  valueFromBaseUnitValue(baseUnitValue) {
    return baseUnitValue;
  }
}

class UnitConverterLinear extends UnitConverter {
  constructor(coefficient, constant = 0) {
    super();
    this.coefficient = coefficient;
    this.constant = constant;
  }

  baseUnitValueFromValue(value) {
    return Number(new Big(value).times(this.coefficient).plus(this.constant).toPrecision());
  }

  valueFromBaseUnitValue(baseUnitValue) {
    return Number(new Big(baseUnitValue).minus(this.constant).div(this.coefficient).toPrecision());
  }

  equals(otherConverter) {
    return this.coefficient === otherConverter.coefficient && this.constant === otherConverter.constant;
  }
}

class UnitConverterReciprocal extends UnitConverter {
  constructor(reciprocal) {
    super();
    this.reciprocal = reciprocal;
  }

  baseUnitValueFromValue(value) {
    return Number(new Big(this.reciprocal).div(value).toPrecision());
  }

  valueFromBaseUnitValue(baseUnitValue) {
    return Number(new Big(this.reciprocal).div(baseUnitValue).toPrecision());
  }

  equals(otherConverter) {
    return this.reciprocal === otherConverter.reciprocal;
  }
}

module.exports = {
  UnitConverter,
  UnitConverterLinear,
  UnitConverterReciprocal
};

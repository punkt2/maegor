/* eslint-disable no-prototype-builtins */
const {UnitConverter} = require('./converter');

class Unit {
  constructor(symbol, converter) {
    this.symbol = symbol;
    this.converter = converter;
  }

  equals(otherUnit) {
    return this.symbol === otherUnit.symbol && this.converter.equals(otherUnit.converter);
  }

  static addUnit(name, symbol, converterOrCoefficient) {
    if (this.hasOwnProperty(name)) {
      throw new Error(`Unit '${name}' already defined`);
    }

    let unit = new this(symbol, converterOrCoefficient);

    if (converterOrCoefficient instanceof UnitConverter) {
      unit.converter = converterOrCoefficient;
    }

    Object.defineProperty(this, name, {
      value: unit
    });

    return unit;
  }

  static unitName() {
    throw new Error('You need to implement unitName in your subclass to define its name');
  }

  static baseUnit() {
    throw new Error('You need to override baseUnit in your class to define its base unit');
  }
}

module.exports = Unit;

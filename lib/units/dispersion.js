
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitDispersion extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Dispersion';
  }

  static baseUnit() {
    return UnitDispersion.partsPerMillion;
  }

  static get partsPerMillion() {
    return new UnitDispersion(UnitDispersion.Symbols.partsPerMillion, UnitDispersion.Coefficients.partsPerMillion);
  }

  static get Symbols() {
    return {
      partsPerMillion: 'ppm'
    };
  }

  static get Coefficients() {
    return {
      partsPerMillion: 1.0
    };
  }
}

module.exports = UnitDispersion;

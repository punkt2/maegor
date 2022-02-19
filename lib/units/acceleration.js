
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitAcceleration extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Acceleration';
  }

  static baseUnit() {
    return UnitAcceleration.metersPerSecondSquared;
  }

  static get metersPerSecondSquared() {
    return new UnitAcceleration(UnitAcceleration.Symbols.metersPerSecondSquared, UnitAcceleration.Coefficients.metersPerSecondSquared);
  }

  static get gravity() {
    return new UnitAcceleration(UnitAcceleration.Symbols.gravity, UnitAcceleration.Coefficients.gravity);
  }

  static get Symbols() {
    return {
      metersPerSecondSquared: 'm/s²',
      gravity: 'g'
    };
  }

  static get Coefficients() {
    return {
      metersPerSecondSquared: 1.0,
      gravity: 9.81
    };
  }
}

module.exports = UnitAcceleration;

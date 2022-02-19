
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitIlluminance extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Illuminance';
  }

  static baseUnit() {
    return UnitIlluminance.lux;
  }

  static get lux() {
    return new UnitIlluminance(UnitIlluminance.Symbols.lux, UnitIlluminance.Coefficients.lux);
  }

  static get Symbols() {
    return {
      lux: 'lx'
    };
  }

  static get Coefficients() {
    return {
      lux: 1.0
    };
  }
}

module.exports = UnitIlluminance;

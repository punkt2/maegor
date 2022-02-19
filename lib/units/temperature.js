
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitTemperature extends Unit {
  constructor(symbol, coefficient, constant = 0) {
    super(symbol, new UnitConverterLinear(coefficient, constant));
  }

  static unitName() {
    return 'Temperature';
  }

  static baseUnit() {
    return UnitTemperature.kelvin;
  }

  static get kelvin() {
    return new UnitTemperature(UnitTemperature.Symbols.kelvin, UnitTemperature.Coefficients.kelvin, UnitTemperature.Constants.kelvin);
  }

  static get celsius() {
    return new UnitTemperature(UnitTemperature.Symbols.celsius, UnitTemperature.Coefficients.celsius, UnitTemperature.Constants.celsius);
  }

  static get fahrenheit() {
    return new UnitTemperature(UnitTemperature.Symbols.fahrenheit, UnitTemperature.Coefficients.fahrenheit, UnitTemperature.Constants.fahrenheit);
  }

  static get Symbols() {
    return {
      kelvin: 'K',
      celsius: '°C',
      fahrenheit: '°F'
    };
  }

  static get Coefficients() {
    return {
      kelvin: 1.0,
      celsius: 1.0,
      fahrenheit: 0.55555555555556
    };
  }

  static get Constants() {
    return {
      kelvin: 0.0,
      celsius: 273.15,
      fahrenheit: 255.37222222222427
    };
  }
}

module.exports = UnitTemperature;

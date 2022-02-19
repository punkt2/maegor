
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitPower extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Pressure';
  }

  static baseUnit() {
    return UnitPower.newtonsPerMetersSquared;
  }

  static get newtonsPerMetersSquared() {
    return new UnitPower(UnitPower.Symbols.newtonsPerMetersSquared, UnitPower.Coefficients.newtonsPerMetersSquared);
  }

  static get gigapascals() {
    return new UnitPower(UnitPower.Symbols.gigapascals, UnitPower.Coefficients.gigapascals);
  }

  static get megapascals() {
    return new UnitPower(UnitPower.Symbols.megapascals, UnitPower.Coefficients.megapascals);
  }

  static get kilopascals() {
    return new UnitPower(UnitPower.Symbols.kilopascals, UnitPower.Coefficients.kilopascals);
  }

  static get hectopascals() {
    return new UnitPower(UnitPower.Symbols.hectopascals, UnitPower.Coefficients.hectopascals);
  }

  static get inchesOfMercury() {
    return new UnitPower(UnitPower.Symbols.inchesOfMercury, UnitPower.Coefficients.inchesOfMercury);
  }

  static get bars() {
    return new UnitPower(UnitPower.Symbols.bars, UnitPower.Coefficients.bars);
  }

  static get millibars() {
    return new UnitPower(UnitPower.Symbols.millibars, UnitPower.Coefficients.millibars);
  }

  static get millimetersOfMercury() {
    return new UnitPower(UnitPower.Symbols.millimetersOfMercury, UnitPower.Coefficients.millimetersOfMercury);
  }

  static get poundsForcePerSquareInch() {
    return new UnitPower(UnitPower.Symbols.poundsForcePerSquareInch, UnitPower.Coefficients.poundsForcePerSquareInch);
  }

  static get Symbols() {
    return {
      newtonsPerMetersSquared: 'N/m²',
      gigapascals: 'GPa',
      megapascals: 'MPa',
      kilopascals: 'kPa',
      hectopascals: 'hPa',
      inchesOfMercury: 'inHg',
      bars: 'bar',
      millibars: 'mbar',
      millimetersOfMercury: 'mmHg',
      poundsForcePerSquareInch: 'psi'
    };
  }

  static get Coefficients() {
    return {
      newtonsPerMetersSquared: 1.0,
      gigapascals: 1e9,
      megapascals: 1e6,
      kilopascals: 1e3,
      hectopascals: 1e2,
      inchesOfMercury: 3386.39,
      bars: 1e5,
      millibars: 1e2,
      millimetersOfMercury: 133.322,
      poundsForcePerSquareInch: 6894.76
    };
  }
}

module.exports = UnitPower;


const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitElectricCurrent extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Electric Current';
  }

  static baseUnit() {
    return UnitElectricCurrent.amperes;
  }

  static get megaamperes() {
    return new UnitElectricCurrent(UnitElectricCurrent.Symbols.megaamperes, UnitElectricCurrent.Coefficients.megaamperes);
  }

  static get kiloamperes() {
    return new UnitElectricCurrent(UnitElectricCurrent.Symbols.kiloamperes, UnitElectricCurrent.Coefficients.kiloamperes);
  }

  static get amperes() {
    return new UnitElectricCurrent(UnitElectricCurrent.Symbols.amperes, UnitElectricCurrent.Coefficients.amperes);
  }

  static get milliamperes() {
    return new UnitElectricCurrent(UnitElectricCurrent.Symbols.milliamperes, UnitElectricCurrent.Coefficients.milliamperes);
  }

  static get microamperes() {
    return new UnitElectricCurrent(UnitElectricCurrent.Symbols.microamperes, UnitElectricCurrent.Coefficients.microamperes);
  }

  static get Symbols() {
    return {
      megaamperes: 'MA',
      kiloamperes: 'kA',
      amperes: 'A',
      milliamperes: 'mA',
      microamperes: 'µA'
    };
  }

  static get Coefficients() {
    return {
      megaamperes: 1e6,
      kiloamperes: 1e3,
      amperes: 1.0,
      milliamperes: 1e-3,
      microamperes: 1e-6
    };
  }
}

module.exports = UnitElectricCurrent;

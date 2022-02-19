
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitElectricResistance extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Electric Resistance';
  }

  static baseUnit() {
    return UnitElectricResistance.ohms;
  }

  static get megaohms() {
    return new UnitElectricResistance(UnitElectricResistance.Symbols.megaohms, UnitElectricResistance.Coefficients.megaohms);
  }

  static get kiloohms() {
    return new UnitElectricResistance(UnitElectricResistance.Symbols.kiloohms, UnitElectricResistance.Coefficients.kiloohms);
  }

  static get ohms() {
    return new UnitElectricResistance(UnitElectricResistance.Symbols.ohms, UnitElectricResistance.Coefficients.ohms);
  }

  static get milliohms() {
    return new UnitElectricResistance(UnitElectricResistance.Symbols.milliohms, UnitElectricResistance.Coefficients.milliohms);
  }

  static get microohms() {
    return new UnitElectricResistance(UnitElectricResistance.Symbols.microohms, UnitElectricResistance.Coefficients.microohms);
  }

  static get Symbols() {
    return {
      megaohms: 'MΩ',
      kiloohms: 'kΩ',
      ohms: 'Ω',
      milliohms: 'mΩ',
      microohms: 'µΩ'
    };
  }

  static get Coefficients() {
    return {
      megaohms: 1e6,
      kiloohms: 1e3,
      ohms: 1.0,
      milliohms: 1e-3,
      microohms: 1e-6
    };
  }
}

module.exports = UnitElectricResistance;

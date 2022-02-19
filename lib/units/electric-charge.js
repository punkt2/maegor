
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitElectricCharge extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Electric Charge';
  }

  static baseUnit() {
    return UnitElectricCharge.coulombs;
  }

  static get coulombs() {
    return new UnitElectricCharge(UnitElectricCharge.Symbols.coulombs, UnitElectricCharge.Coefficients.coulombs);
  }

  static get megaampereHours() {
    return new UnitElectricCharge(UnitElectricCharge.Symbols.megaampereHours, UnitElectricCharge.Coefficients.megaampereHours);
  }

  static get kiloampereHours() {
    return new UnitElectricCharge(UnitElectricCharge.Symbols.kiloampereHours, UnitElectricCharge.Coefficients.kiloampereHours);
  }

  static get ampereHours() {
    return new UnitElectricCharge(UnitElectricCharge.Symbols.ampereHours, UnitElectricCharge.Coefficients.ampereHours);
  }

  static get milliampereHour() {
    return new UnitElectricCharge(UnitElectricCharge.Symbols.milliampereHour, UnitElectricCharge.Coefficients.milliampereHour);
  }

  static get microampereHour() {
    return new UnitElectricCharge(UnitElectricCharge.Symbols.microampereHour, UnitElectricCharge.Coefficients.microampereHour);
  }

  static get Symbols() {
    return {
      coulombs: 'C',
      megaampereHours: 'MAh',
      kiloampereHours: 'kAh',
      ampereHours: 'Ah',
      milliampereHour: 'mAh',
      microampereHour: 'µAh'
    };
  }

  static get Coefficients() {
    return {
      coulombs: 1.0,
      megaampereHours: 3.6e9,
      kiloampereHours: 3600000.0,
      ampereHours: 3600.0,
      milliampereHour: 3.6,
      microampereHour: 0.0036
    };
  }
}

module.exports = UnitElectricCharge;

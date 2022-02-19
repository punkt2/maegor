
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitElectricPotentialDifference extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Electric Potential Difference';
  }

  static baseUnit() {
    return UnitElectricPotentialDifference.volts;
  }

  static get megavolts() {
    return new UnitElectricPotentialDifference(UnitElectricPotentialDifference.Symbols.megavolts, UnitElectricPotentialDifference.Coefficients.megavolts);
  }

  static get kilovolts() {
    return new UnitElectricPotentialDifference(UnitElectricPotentialDifference.Symbols.kilovolts, UnitElectricPotentialDifference.Coefficients.kilovolts);
  }

  static get volts() {
    return new UnitElectricPotentialDifference(UnitElectricPotentialDifference.Symbols.volts, UnitElectricPotentialDifference.Coefficients.volts);
  }

  static get millivolts() {
    return new UnitElectricPotentialDifference(UnitElectricPotentialDifference.Symbols.millivolts, UnitElectricPotentialDifference.Coefficients.millivolts);
  }

  static get microvolts() {
    return new UnitElectricPotentialDifference(UnitElectricPotentialDifference.Symbols.microvolts, UnitElectricPotentialDifference.Coefficients.microvolts);
  }

  static get Symbols() {
    return {
      megavolts: 'MV',
      kilovolts: 'kV',
      volts: 'V',
      millivolts: 'mV',
      microvolts: 'µV'
    };
  }

  static get Coefficients() {
    return {
      megavolts: 1e6,
      kilovolts: 1e3,
      volts: 1.0,
      millivolts: 1e-3,
      microvolts: 1e-6
    };
  }
}

module.exports = UnitElectricPotentialDifference;

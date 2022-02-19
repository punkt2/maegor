
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitConcentrationMass extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Concentration Mass';
  }

  static baseUnit() {
    return UnitConcentrationMass.gramsPerLiter;
  }

  static get gramsPerLiter() {
    return new UnitConcentrationMass(UnitConcentrationMass.Symbols.gramsPerLiter, UnitConcentrationMass.Coefficients.gramsPerLiter);
  }

  static get milligramsPerDeciliter() {
    return new UnitConcentrationMass(UnitConcentrationMass.Symbols.milligramsPerDeciliter, UnitConcentrationMass.Coefficients.milligramsPerDeciliter);
  }

  static get millimolesPerLiter() {
    return new UnitConcentrationMass(UnitConcentrationMass.Symbols.millimolesPerLiter, UnitConcentrationMass.Coefficients.millimolesPerLiter);
  }

  static get Symbols() {
    return {
      gramsPerLiter: 'g/L',
      milligramsPerDeciliter: 'mg/dL',
      millimolesPerLiter: 'mmol/L'
    };
  }

  static get Coefficients() {
    return {
      gramsPerLiter: 1.0,
      milligramsPerDeciliter: 0.01,
      millimolesPerLiter: 18.0

    };
  }
}

module.exports = UnitConcentrationMass;

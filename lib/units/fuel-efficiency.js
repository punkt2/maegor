
const UnitConverterReciprocal = require('../converter').UnitConverterReciprocal;
const Unit = require('../unit');

class UnitFuelEfficiency extends Unit {
  constructor(symbol, reciprocal) {
    super(symbol, new UnitConverterReciprocal(reciprocal));
  }

  static unitName() {
    return 'Fuel Efficency';
  }

  static baseUnit() {
    return UnitFuelEfficiency.litersPer100Kilometers;
  }

  static get litersPer100Kilometers() {
    return new UnitFuelEfficiency(UnitFuelEfficiency.Symbols.litersPer100Kilometers, UnitFuelEfficiency.Coefficients.litersPer100Kilometers);
  }

  static get milesPerImperialGallon() {
    return new UnitFuelEfficiency(UnitFuelEfficiency.Symbols.milesPerImperialGallon, UnitFuelEfficiency.Coefficients.milesPerImperialGallon);
  }

  static get milesPerGallon() {
    return new UnitFuelEfficiency(UnitFuelEfficiency.Symbols.milesPerGallon, UnitFuelEfficiency.Coefficients.milesPerGallon);
  }

  static get Symbols() {
    return {
      litersPer100Kilometers: 'L/100km',
      milesPerImperialGallon: 'mpg',
      milesPerGallon: 'mpg'
    };
  }

  static get Coefficients() {
    return {
      litersPer100Kilometers: 1.0,
      milesPerImperialGallon: 282.481,
      milesPerGallon: 235.215
    };
  }
}

module.exports = UnitFuelEfficiency;

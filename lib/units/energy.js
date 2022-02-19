
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitEnergy extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Energy';
  }

  static baseUnit() {
    return UnitEnergy.joules;
  }

  static get kilojoules() {
    return new UnitEnergy(UnitEnergy.Symbols.kilojoules, UnitEnergy.Coefficients.kilojoules);
  }

  static get joules() {
    return new UnitEnergy(UnitEnergy.Symbols.joules, UnitEnergy.Coefficients.joules);
  }

  static get kilocalories() {
    return new UnitEnergy(UnitEnergy.Symbols.kilocalories, UnitEnergy.Coefficients.kilocalories);
  }

  static get calories() {
    return new UnitEnergy(UnitEnergy.Symbols.calories, UnitEnergy.Coefficients.calories);
  }

  static get kilowattHours() {
    return new UnitEnergy(UnitEnergy.Symbols.kilowattHours, UnitEnergy.Coefficients.kilowattHours);
  }

  static get Symbols() {
    return {
      kilojoules: 'kJ',
      joules: 'J',
      kilocalories: 'kCal',
      calories: 'cal',
      kilowattHours: 'kWh'
    };
  }

  static get Coefficients() {
    return {
      kilojoules: 1e3,
      joules: 1.0,
      kilocalories: 4184.0,
      calories: 4.184,
      kilowattHours: 3600000.0
    };
  }
}

module.exports = UnitEnergy;

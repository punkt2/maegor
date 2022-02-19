
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitSpeed extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Speed';
  }

  static baseUnit() {
    return UnitSpeed.metersPerSecond;
  }

  static get metersPerSecond() {
    return new UnitSpeed(UnitSpeed.Symbols.metersPerSecond, UnitSpeed.Coefficients.metersPerSecond);
  }

  static get kilometersPerHour() {
    return new UnitSpeed(UnitSpeed.Symbols.kilometersPerHour, UnitSpeed.Coefficients.kilometersPerHour);
  }

  static get milesPerHour() {
    return new UnitSpeed(UnitSpeed.Symbols.milesPerHour, UnitSpeed.Coefficients.milesPerHour);
  }

  static get knots() {
    return new UnitSpeed(UnitSpeed.Symbols.knots, UnitSpeed.Coefficients.knots);
  }

  static get Symbols() {
    return {
      metersPerSecond: 'm/s',
      kilometersPerHour: 'km/h',
      milesPerHour: 'mph',
      knots: 'kn'

    };
  }

  static get Coefficients() {
    return {
      metersPerSecond: 1.0,
      kilometersPerHour: 0.277778,
      milesPerHour: 0.44704,
      knots: 0.514444
    };
  }
}

module.exports = UnitSpeed;

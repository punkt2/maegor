
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitDuration extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Duration';
  }

  static baseUnit() {
    return UnitDuration.seconds;
  }

  static get seconds() {
    return new UnitDuration(UnitDuration.Symbols.seconds, UnitDuration.Coefficients.seconds);
  }

  static get minutes() {
    return new UnitDuration(UnitDuration.Symbols.minutes, UnitDuration.Coefficients.minutes);
  }

  static get hours() {
    return new UnitDuration(UnitDuration.Symbols.hours, UnitDuration.Coefficients.hours);
  }

  static get Symbols() {
    return {
      seconds: 's',
      minutes: 'm',
      hours: 'h'
    };
  }

  static get Coefficients() {
    return {
      seconds: 1.0,
      minutes: 60.0,
      hours: 3600.0
    };
  }
}

module.exports = UnitDuration;

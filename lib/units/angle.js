
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitAngle extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Angle';
  }

  static baseUnit() {
    return UnitAngle.degrees;
  }

  static get degrees() {
    return new UnitAngle(UnitAngle.Symbols.degrees, UnitAngle.Coefficients.degrees);
  }

  static get arcMinutes() {
    return new UnitAngle(UnitAngle.Symbols.arcMinutes, UnitAngle.Coefficients.arcMinutes);
  }

  static get arcSeconds() {
    return new UnitAngle(UnitAngle.Symbols.arcSeconds, UnitAngle.Coefficients.arcSeconds);
  }

  static get radians() {
    return new UnitAngle(UnitAngle.Symbols.radians, UnitAngle.Coefficients.radians);
  }

  static get gradians() {
    return new UnitAngle(UnitAngle.Symbols.gradians, UnitAngle.Coefficients.gradians);
  }

  static get revolutions() {
    return new UnitAngle(UnitAngle.Symbols.revolutions, UnitAngle.Coefficients.revolutions);
  }

  static get Symbols() {
    return {
      degrees: '°',
      arcMinutes: 'ʹ',
      arcSeconds: 'ʹʹ',
      radians: 'rad',
      gradians: 'grad',
      revolutions: 'rev'
    };
  }

  static get Coefficients() {
    return {
      degrees: 1.0,
      arcMinutes: 1.0 / 60.0,
      arcSeconds: 1.0 / 3600.0,
      radians: 180.0 / Math.PI,
      gradians: 0.9,
      revolutions: 360.0
    };
  }
}

module.exports = UnitAngle;


const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitFrequency extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Frequency';
  }

  static baseUnit() {
    return UnitFrequency.hertz;
  }

  static get terahertz() {
    return new UnitFrequency(UnitFrequency.Symbols.terahertz, UnitFrequency.Coefficients.terahertz);
  }

  static get gigahertz() {
    return new UnitFrequency(UnitFrequency.Symbols.gigahertz, UnitFrequency.Coefficients.gigahertz);
  }

  static get megahertz() {
    return new UnitFrequency(UnitFrequency.Symbols.megahertz, UnitFrequency.Coefficients.megahertz);
  }

  static get kilohertz() {
    return new UnitFrequency(UnitFrequency.Symbols.kilohertz, UnitFrequency.Coefficients.kilohertz);
  }

  static get hertz() {
    return new UnitFrequency(UnitFrequency.Symbols.hertz, UnitFrequency.Coefficients.hertz);
  }

  static get millihertz() {
    return new UnitFrequency(UnitFrequency.Symbols.millihertz, UnitFrequency.Coefficients.millihertz);
  }

  static get microhertz() {
    return new UnitFrequency(UnitFrequency.Symbols.microhertz, UnitFrequency.Coefficients.microhertz);
  }

  static get nanohertz() {
    return new UnitFrequency(UnitFrequency.Symbols.nanohertz, UnitFrequency.Coefficients.nanohertz);
  }

  static get Symbols() {
    return {
      terahertz: 'THz',
      gigahertz: 'GHz',
      megahertz: 'MHz',
      kilohertz: 'kHz',
      hertz: 'Hz',
      millihertz: 'mHz',
      microhertz: 'µHz',
      nanohertz: 'nHz'
    };
  }

  static get Coefficients() {
    return {
      terahertz: 1e12,
      gigahertz: 1e9,
      megahertz: 1e6,
      kilohertz: 1e3,
      hertz: 1.0,
      millihertz: 1e-3,
      microhertz: 1e-6,
      nanohertz: 1e-9
    };
  }
}

module.exports = UnitFrequency;

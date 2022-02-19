
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitPower extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Power';
  }

  static baseUnit() {
    return UnitPower.watts;
  }

  static get terawatts() {
    return new UnitPower(UnitPower.Symbols.terawatts, UnitPower.Coefficients.terawatts);
  }

  static get gigawatts() {
    return new UnitPower(UnitPower.Symbols.gigawatts, UnitPower.Coefficients.gigawatts);
  }

  static get megawatts() {
    return new UnitPower(UnitPower.Symbols.megawatts, UnitPower.Coefficients.megawatts);
  }

  static get kilowatts() {
    return new UnitPower(UnitPower.Symbols.kilowatts, UnitPower.Coefficients.kilowatts);
  }

  static get watts() {
    return new UnitPower(UnitPower.Symbols.watts, UnitPower.Coefficients.watts);
  }

  static get milliwatts() {
    return new UnitPower(UnitPower.Symbols.milliwatts, UnitPower.Coefficients.milliwatts);
  }

  static get microwatts() {
    return new UnitPower(UnitPower.Symbols.microwatts, UnitPower.Coefficients.microwatts);
  }

  static get nanowatts() {
    return new UnitPower(UnitPower.Symbols.nanowatts, UnitPower.Coefficients.nanowatts);
  }

  static get picowatts() {
    return new UnitPower(UnitPower.Symbols.picowatts, UnitPower.Coefficients.picowatts);
  }

  static get femtowatts() {
    return new UnitPower(UnitPower.Symbols.femtowatts, UnitPower.Coefficients.femtowatts);
  }

  static get horsepower() {
    return new UnitPower(UnitPower.Symbols.horsepower, UnitPower.Coefficients.horsepower);
  }

  static get Symbols() {
    return {
      terawatts: 'TW',
      gigawatts: 'GW',
      megawatts: 'MW',
      kilowatts: 'kW',
      watts: 'W',
      milliwatts: 'mW',
      microwatts: 'µW',
      nanowatts: 'nW',
      picowatts: 'nW',
      femtowatts: 'nHz',
      horsepower: 'hp'
    };
  }

  static get Coefficients() {
    return {
      terawatts: 1e12,
      gigawatts: 1e9,
      megawatts: 1e6,
      kilowatts: 1e3,
      watts: 1.0,
      milliwatts: 1e-3,
      microwatts: 1e-6,
      nanowatts: 1e-9,
      picowatts: 1e-12,
      femtowatts: 1e-15,
      horsepower: 745.7
    };
  }
}

module.exports = UnitPower;

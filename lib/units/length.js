
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitLength extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Length';
  }

  static baseUnit() {
    return UnitLength.meters;
  }

  static get megameters() {
    return new UnitLength(UnitLength.Symbols.megameters, UnitLength.Coefficients.megameters);
  }

  static get kilometers() {
    return new UnitLength(UnitLength.Symbols.kilometers, UnitLength.Coefficients.kilometers);
  }

  static get hectometers() {
    return new UnitLength(UnitLength.Symbols.hectometers, UnitLength.Coefficients.hectometers);
  }

  static get decameters() {
    return new UnitLength(UnitLength.Symbols.decameters, UnitLength.Coefficients.decameters);
  }

  static get meters() {
    return new UnitLength(UnitLength.Symbols.meters, UnitLength.Coefficients.meters);
  }

  static get decimeters() {
    return new UnitLength(UnitLength.Symbols.decimeters, UnitLength.Coefficients.decimeters);
  }

  static get centimeters() {
    return new UnitLength(UnitLength.Symbols.centimeters, UnitLength.Coefficients.centimeters);
  }

  static get millimeters() {
    return new UnitLength(UnitLength.Symbols.millimeters, UnitLength.Coefficients.millimeters);
  }

  static get micrometers() {
    return new UnitLength(UnitLength.Symbols.micrometers, UnitLength.Coefficients.micrometers);
  }

  static get nanometers() {
    return new UnitLength(UnitLength.Symbols.nanometers, UnitLength.Coefficients.nanometers);
  }

  static get picometers() {
    return new UnitLength(UnitLength.Symbols.picometers, UnitLength.Coefficients.picometers);
  }

  static get inches() {
    return new UnitLength(UnitLength.Symbols.inches, UnitLength.Coefficients.inches);
  }

  static get feet() {
    return new UnitLength(UnitLength.Symbols.feet, UnitLength.Coefficients.feet);
  }

  static get yards() {
    return new UnitLength(UnitLength.Symbols.yards, UnitLength.Coefficients.yards);
  }

  static get miles() {
    return new UnitLength(UnitLength.Symbols.miles, UnitLength.Coefficients.miles);
  }

  static get scandinavianMiles() {
    return new UnitLength(UnitLength.Symbols.scandinavianMiles, UnitLength.Coefficients.scandinavianMiles);
  }

  static get lightyears() {
    return new UnitLength(UnitLength.Symbols.lightyears, UnitLength.Coefficients.lightyears);
  }

  static get nauticalMiles() {
    return new UnitLength(UnitLength.Symbols.nauticalMiles, UnitLength.Coefficients.nauticalMiles);
  }

  static get fathoms() {
    return new UnitLength(UnitLength.Symbols.fathoms, UnitLength.Coefficients.fathoms);
  }

  static get furlongs() {
    return new UnitLength(UnitLength.Symbols.furlongs, UnitLength.Coefficients.furlongs);
  }

  static get astronomicalUnits() {
    return new UnitLength(UnitLength.Symbols.astronomicalUnits, UnitLength.Coefficients.astronomicalUnits);
  }

  static get parsecs() {
    return new UnitLength(UnitLength.Symbols.parsecs, UnitLength.Coefficients.parsecs);
  }

  static get Symbols() {
    return {
      megameters: 'Mm',
      kilometers: 'km',
      hectometers: 'hm',
      decameters: 'dam',
      meters: 'm',
      decimeters: 'dm',
      centimeters: 'cm',
      millimeters: 'mm',
      micrometers: 'µm',
      nanometers: 'nm',
      picometers: 'pm',
      inches: 'in',
      feet: 'ft',
      yards: 'yd',
      miles: 'mi',
      scandinavianMiles: 'smi',
      lightyears: 'ly',
      nauticalMiles: 'NM',
      fathoms: 'ftm',
      furlongs: 'fur',
      astronomicalUnits: 'ua',
      parsecs: 'pc'
    };
  }

  static get Coefficients() {
    return {
      megameters: 1e6,
      kilometers: 1e3,
      hectometers: 1e2,
      decameters: 1e1,
      meters: 1.0,
      decimeters: 1e-1,
      centimeters: 1e-2,
      millimeters: 1e-3,
      micrometers: 1e-6,
      nanometers: 1e-9,
      picometers: 1e-12,
      inches: 0.0254,
      feet: 0.3048,
      yards: 0.9144,
      miles: 1609.34,
      scandinavianMiles: 10000.0,
      lightyears: 9.461e+15,
      nauticalMiles: 1852.0,
      fathoms: 1.8288,
      furlongs: 201.168,
      astronomicalUnits: 1.496e+11,
      parsecs: 3.086e+16
    };
  }
}

module.exports = UnitLength;

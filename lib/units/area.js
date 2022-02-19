
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitArea extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Area';
  }

  static baseUnit() {
    return UnitArea.squareMeters;
  }

  static get squareMegameters() {
    return new UnitArea(UnitArea.Symbols.squareMegameters, UnitArea.Coefficients.squareMegameters);
  }

  static get squareKilometers() {
    return new UnitArea(UnitArea.Symbols.squareKilometers, UnitArea.Coefficients.squareKilometers);
  }

  static get squareMeters() {
    return new UnitArea(UnitArea.Symbols.squareMeters, UnitArea.Coefficients.squareMeters);
  }

  static get squareCentimeters() {
    return new UnitArea(UnitArea.Symbols.squareCentimeters, UnitArea.Coefficients.squareCentimeters);
  }

  static get squareMillimeters() {
    return new UnitArea(UnitArea.Symbols.squareMillimeters, UnitArea.Coefficients.squareMillimeters);
  }

  static get squareMicrometers() {
    return new UnitArea(UnitArea.Symbols.squareMicrometers, UnitArea.Coefficients.squareMicrometers);
  }

  static get squareNanometers() {
    return new UnitArea(UnitArea.Symbols.squareNanometers, UnitArea.Coefficients.squareNanometers);
  }

  static get squareInches() {
    return new UnitArea(UnitArea.Symbols.squareInches, UnitArea.Coefficients.squareInches);
  }

  static get squareFeet() {
    return new UnitArea(UnitArea.Symbols.squareFeet, UnitArea.Coefficients.squareFeet);
  }

  static get squareYards() {
    return new UnitArea(UnitArea.Symbols.squareYards, UnitArea.Coefficients.squareYards);
  }

  static get squareMiles() {
    return new UnitArea(UnitArea.Symbols.squareMiles, UnitArea.Coefficients.squareMiles);
  }

  static get acres() {
    return new UnitArea(UnitArea.Symbols.acres, UnitArea.Coefficients.acres);
  }

  static get ares() {
    return new UnitArea(UnitArea.Symbols.ares, UnitArea.Coefficients.ares);
  }

  static get hectares() {
    return new UnitArea(UnitArea.Symbols.hectares, UnitArea.Coefficients.hectares);
  }

  static get Symbols() {
    return {
      squareMegameters: 'Mm²',
      squareKilometers: 'km²',
      squareMeters: 'm²',
      squareCentimeters: 'cm²',
      squareMillimeters: 'mm²',
      squareMicrometers: 'µm²',
      squareNanometers: 'nm²',
      squareInches: 'in²',
      squareFeet: 'ft²',
      squareYards: 'yd²',
      squareMiles: 'mi²',
      acres: 'ac',
      ares: 'a',
      hectares: 'ha'
    };
  }

  static get Coefficients() {
    return {
      squareMegameters: 1e12,
      squareKilometers: 1e6,
      squareMeters: 1.0,
      squareCentimeters: 1e-4,
      squareMillimeters: 1e-6,
      squareMicrometers: 1e-12,
      squareNanometers: 1e-18,
      squareInches: 0.00064516,
      squareFeet: 0.092903,
      squareYards: 0.836127,
      squareMiles: 2.59e+6,
      acres: 4046.86,
      ares: 100.0,
      hectares: 10000.0
    };
  }
}

module.exports = UnitArea;

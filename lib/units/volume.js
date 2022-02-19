
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitVolume extends Unit {
  constructor(symbol, coefficient, constant = 0) {
    super(symbol, new UnitConverterLinear(coefficient, constant));
  }

  static unitName() {
    return 'Volume';
  }

  static baseUnit() {
    return UnitVolume.liters;
  }

  static get megaliters() {
    return new UnitVolume(UnitVolume.Symbols.megaliters, UnitVolume.Coefficients.megaliters);
  }

  static get kiloliters() {
    return new UnitVolume(UnitVolume.Symbols.kiloliters, UnitVolume.Coefficients.kiloliters);
  }

  static get liters() {
    return new UnitVolume(UnitVolume.Symbols.liters, UnitVolume.Coefficients.liters);
  }

  static get deciliters() {
    return new UnitVolume(UnitVolume.Symbols.deciliters, UnitVolume.Coefficients.deciliters);
  }

  static get centiliters() {
    return new UnitVolume(UnitVolume.Symbols.centiliters, UnitVolume.Coefficients.centiliters);
  }

  static get milliliters() {
    return new UnitVolume(UnitVolume.Symbols.milliliters, UnitVolume.Coefficients.milliliters);
  }

  static get cubicKilometers() {
    return new UnitVolume(UnitVolume.Symbols.cubicKilometers, UnitVolume.Coefficients.cubicKilometers);
  }

  static get cubicMeters() {
    return new UnitVolume(UnitVolume.Symbols.cubicMeters, UnitVolume.Coefficients.cubicMeters);
  }

  static get cubicDecimeters() {
    return new UnitVolume(UnitVolume.Symbols.cubicDecimeters, UnitVolume.Coefficients.cubicDecimeters);
  }

  static get cubicCentimeters() {
    return new UnitVolume(UnitVolume.Symbols.cubicCentimeters, UnitVolume.Coefficients.cubicCentimeters);
  }
  static get cubicMillimeters() {
    return new UnitVolume(UnitVolume.Symbols.cubicMillimeters, UnitVolume.Coefficients.cubicMillimeters);
  }

  static get cubicInches() {
    return new UnitVolume(UnitVolume.Symbols.cubicInches, UnitVolume.Coefficients.cubicInches);
  }

  static get cubicFeet() {
    return new UnitVolume(UnitVolume.Symbols.cubicFeet, UnitVolume.Coefficients.cubicFeet);
  }

  static get cubicYards() {
    return new UnitVolume(UnitVolume.Symbols.cubicYards, UnitVolume.Coefficients.cubicYards);
  }

  static get cubicMiles() {
    return new UnitVolume(UnitVolume.Symbols.cubicMiles, UnitVolume.Coefficients.cubicMiles);
  }

  static get acreFeet() {
    return new UnitVolume(UnitVolume.Symbols.acreFeet, UnitVolume.Coefficients.acreFeet);
  }

  static get bushels() {
    return new UnitVolume(UnitVolume.Symbols.bushels, UnitVolume.Coefficients.bushels);
  }

  static get teaspoons() {
    return new UnitVolume(UnitVolume.Symbols.teaspoons, UnitVolume.Coefficients.teaspoons);
  }

  static get tablespoons() {
    return new UnitVolume(UnitVolume.Symbols.tablespoons, UnitVolume.Coefficients.tablespoons);
  }

  static get fluidOunces() {
    return new UnitVolume(UnitVolume.Symbols.fluidOunces, UnitVolume.Coefficients.fluidOunces);
  }

  static get cups() {
    return new UnitVolume(UnitVolume.Symbols.cups, UnitVolume.Coefficients.cups);
  }

  static get pints() {
    return new UnitVolume(UnitVolume.Symbols.pints, UnitVolume.Coefficients.pints);
  }

  static get quarts() {
    return new UnitVolume(UnitVolume.Symbols.quarts, UnitVolume.Coefficients.quarts);
  }

  static get gallons() {
    return new UnitVolume(UnitVolume.Symbols.gallons, UnitVolume.Coefficients.gallons);
  }

  static get imperialTeaspoons() {
    return new UnitVolume(UnitVolume.Symbols.imperialTeaspoons, UnitVolume.Coefficients.imperialTeaspoons);
  }

  static get imperialTablespoons() {
    return new UnitVolume(UnitVolume.Symbols.imperialTablespoons, UnitVolume.Coefficients.imperialTablespoons);
  }

  static get imperialFluidOunces() {
    return new UnitVolume(UnitVolume.Symbols.imperialFluidOunces, UnitVolume.Coefficients.imperialFluidOunces);
  }

  static get imperialPints() {
    return new UnitVolume(UnitVolume.Symbols.imperialPints, UnitVolume.Coefficients.imperialPints);
  }

  static get imperialQuarts() {
    return new UnitVolume(UnitVolume.Symbols.imperialQuarts, UnitVolume.Coefficients.imperialQuarts);
  }

  static get imperialGallons() {
    return new UnitVolume(UnitVolume.Symbols.imperialGallons, UnitVolume.Coefficients.imperialGallons);
  }

  static get metricCups() {
    return new UnitVolume(UnitVolume.Symbols.metricCups, UnitVolume.Coefficients.metricCups);
  }

  static get Symbols() {
    return {
      megaliters: 'ML',
      kiloliters: 'kL',
      liters: 'L',
      deciliters: 'dl',
      centiliters: 'cL',
      milliliters: 'mL',
      cubicKilometers: 'km³',
      cubicMeters: 'm³',
      cubicDecimeters: 'dm³',
      cubicCentimeters: 'cm³',
      cubicMillimeters: 'mm³',
      cubicInches: 'in³',
      cubicFeet: 'ft³',
      cubicYards: 'yd³',
      cubicMiles: 'mi³',
      acreFeet: 'af',
      bushels: 'bsh',
      teaspoons: 'tsp',
      tablespoons: 'tbsp',
      fluidOunces: 'fl oz',
      cups: 'cup',
      pints: 'pt',
      quarts: 'qt',
      gallons: 'gal',
      imperialTeaspoons: 'tsp Imperial',
      imperialTablespoons: 'tbsp Imperial',
      imperialFluidOunces: 'fl oz Imperial',
      imperialPints: 'pt Imperial',
      imperialQuarts: 'qt Imperial',
      imperialGallons: 'gal Imperial',
      metricCups: 'metric cup Imperial'
    };
  }

  static get Coefficients() {
    return {
      megaliters: 1e6,
      kiloliters: 1e3,
      liters: 1.0,
      deciliters: 1e-1,
      centiliters: 1e-2,
      milliliters: 1e-3,
      cubicKilometers: 1e12,
      cubicMeters: 1000.0,
      cubicDecimeters: 1.0,
      cubicCentimeters: 0.01,
      cubicMillimeters: 0.001,
      cubicInches: 0.0163871,
      cubicFeet: 28.3168,
      cubicYards: 764.555,
      cubicMiles: 4.168e+12,
      acreFeet: 1.233e+6,
      bushels: 35.2391,
      teaspoons: 0.00492892,
      tablespoons: 0.0147868,
      fluidOunces: 0.0295735,
      cups: 0.24,
      pints: 0.473176,
      quarts: 0.946353,
      gallons: 3.78541,
      imperialTeaspoons: 0.00591939,
      imperialTablespoons: 0.0177582,
      imperialFluidOunces: 0.0284131,
      imperialPints: 0.568261,
      imperialQuarts: 1.13652,
      imperialGallons: 4.54609,
      metricCups: 0.25
    };
  }
}

module.exports = UnitVolume;

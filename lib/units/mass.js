
const UnitConverterLinear = require('../converter').UnitConverterLinear;
const Unit = require('../unit');

class UnitMass extends Unit {
  constructor(symbol, coefficient) {
    super(symbol, new UnitConverterLinear(coefficient));
  }

  static unitName() {
    return 'Mass';
  }

  static baseUnit() {
    return UnitMass.kilograms;
  }

  static get kilograms() {
    return new UnitMass(UnitMass.Symbols.kilograms, UnitMass.Coefficients.kilograms);
  }

  static get grams() {
    return new UnitMass(UnitMass.Symbols.grams, UnitMass.Coefficients.grams);
  }

  static get decigrams() {
    return new UnitMass(UnitMass.Symbols.decigrams, UnitMass.Coefficients.decigrams);
  }

  static get centigrams() {
    return new UnitMass(UnitMass.Symbols.centigrams, UnitMass.Coefficients.centigrams);
  }

  static get milligrams() {
    return new UnitMass(UnitMass.Symbols.milligrams, UnitMass.Coefficients.milligrams);
  }

  static get micrograms() {
    return new UnitMass(UnitMass.Symbols.micrograms, UnitMass.Coefficients.micrograms);
  }

  static get nanograms() {
    return new UnitMass(UnitMass.Symbols.nanograms, UnitMass.Coefficients.nanograms);
  }

  static get picograms() {
    return new UnitMass(UnitMass.Symbols.picograms, UnitMass.Coefficients.picograms);
  }

  static get ounces() {
    return new UnitMass(UnitMass.Symbols.ounces, UnitMass.Coefficients.ounces);
  }

  static get pounds() {
    return new UnitMass(UnitMass.Symbols.pounds, UnitMass.Coefficients.pounds);
  }

  static get stones() {
    return new UnitMass(UnitMass.Symbols.stones, UnitMass.Coefficients.stones);
  }

  static get metricTons() {
    return new UnitMass(UnitMass.Symbols.metricTons, UnitMass.Coefficients.metricTons);
  }

  static get shortTons() {
    return new UnitMass(UnitMass.Symbols.shortTons, UnitMass.Coefficients.shortTons);
  }

  static get carats() {
    return new UnitMass(UnitMass.Symbols.carats, UnitMass.Coefficients.carats);
  }

  static get ouncesTroy() {
    return new UnitMass(UnitMass.Symbols.ouncesTroy, UnitMass.Coefficients.ouncesTroy);
  }

  static get slugs() {
    return new UnitMass(UnitMass.Symbols.slugs, UnitMass.Coefficients.slugs);
  }

  static get Symbols() {
    return {
      kilograms: 'kg',
      grams: 'g',
      decigrams: 'dg',
      centigrams: 'cg',
      milligrams: 'mg',
      micrograms: 'µg',
      nanograms: 'ng',
      picograms: 'pg',
      ounces: 'oz',
      pounds: 'lb',
      stones: 'st',
      metricTons: 't',
      shortTons: 'ton',
      carats: 'ct',
      ouncesTroy: 'oz t',
      slugs: 'slug'
    };
  }

  static get Coefficients() {
    return {
      kilograms: 1.0,
      grams: 1e-3,
      decigrams: 1e-4,
      centigrams: 1e-5,
      milligrams: 1e-6,
      micrograms: 1e-9,
      nanograms: 1e-12,
      picograms: 1e-15,
      ounces: 0.0283495,
      pounds: 0.453592,
      stones: 0.157473,
      metricTons: 1000.0,
      shortTons: 907.185,
      carats: 0.0002,
      ouncesTroy: 0.03110348,
      slugs: 14.5939
    };
  }
}

module.exports = UnitMass;

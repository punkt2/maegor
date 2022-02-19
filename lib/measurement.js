
class Measurement {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  canBeConvertedTo(unit) {
    return this.unit.constructor.unitName() === unit.constructor.unitName();
  }

  valueConvertedToUnit(unit) {
    if (!this.canBeConvertedTo(unit)) {
      throw new TypeError('Unable to convert ');
    }
    let baseUnitValue = this.unit.converter.baseUnitValueFromValue(this.value);
    return unit.converter.valueFromBaseUnitValue(baseUnitValue);
  }

  convertTo(unit) {
    this.value = this.valueConvertedToUnit(unit);
    this.unit = unit;
  }

  convertedTo(unit) {
    return new Measurement(this.valueConvertedToUnit(unit), unit);
  }

  toString() {
    return `${this.value} ${this.unit.symbol}`;
  }
}

module.exports = Measurement;

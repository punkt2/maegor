# maegor [![CircleCI](https://circleci.com/gh/lukaskollmer/maegor.svg?style=svg)](https://circleci.com/gh/lukaskollmer/maegor) [![Build Status](https://travis-ci.org/lukaskollmer/maegor.svg?branch=master)](https://travis-ci.org/lukaskollmer/maegor)  [![Coverage Status](https://coveralls.io/repos/github/lukaskollmer/maegor/badge.svg?branch=master)](https://coveralls.io/github/lukaskollmer/maegor?branch=master)

> Unit conversion library


## Install

```
$ npm install --save maegor
```


## Examples

**Converting Distances**
```js
const {Measurement, Length} = require('maegor');

let distance = new Measurement(58.7, Length.kilometers);

distance.convertedTo(Length.meters);  //=> '58700 m'
distance.convertedTo(Length.miles);   //=> '36.47457964134366 mi'
distance.convertedTo(Length.yards);   //=> '64195.10061242345 yd'
```
<br>

**Converting Temperature**
```js
const {Measurement, Temperature} = require('maegor');

let temp = new Measurement(23.12, Temperature.celsius);
temp.convertedTo(Temperature.fahrenheit);  //=> '73.61599999999567 °F'
```

## API

### `Measurement`

- `Measurement#canBeConvertedTo(unit)`: Check if a measurement can be converted to the specified unit
- `Measurement#convertedTo(unit)`: Returns a new `Measurement` created by converting to the specified unit
- `Measurement#convertTo(unit)`: Converts the measurement to the specified unit (In-Place)

### `Unit`
`Unit` is the baseclass all dimensions (like `Length` or `Mass`) extend.
You can define custom units either by extending a dimension's class or by using the API:

1. Defining custom units via the API:

```js
// earth's radius is approx. 6371 meters
Length.addUnit('earthRadius', 'er', 6371);

let marathon = new Measurement(42.195, Length.kilometers);
marathon.convertTo(Length.earthRadius);  //=> '6.622979124156333 er'
```

2. Defining custom units via subclassing:

```js
class LengthAdditions extends Length {
  static get earthRadius() {
    return new Length('er', 6371);
  }
}

let marathon = new Measurement(42.195, Length.kilometers);
len.convertTo(LengthAdditions.earthRadius); // //=> '6.622979124156333 er'
```

#### `Unit.addUnit(name, symbol, converterOrCoefficient) -> Unit`
Register a custom unit.

| Parameter | Description |
| :-------- | :---------- |
| `name`   | The name of the custom unit |
| `symbol` | Unit symbol. This will be used when converting values of this unit to strings |
| `converterOrCoefficient` | Either the coefficient for converting the dimensions base unit to the custom unit or a converter object |
| **Returns** | A `Unit` object that can be passed to `Measurement#convert{ed}To` |

> **Note:** This will throw an error if an unit with `name` already exists


## Units
| Dimension | Units | Base Unit |
| :-------: | :---- | :-------: |
| **Acceleration** | • `metersPerSecondSquared` (m/s²) <br> • `gravity` (g) | `metersPerSecondSquared` (m/s²) |
| **Angle** | • `degrees` (°) <br> • `arcMinutes` (ʹ) <br> • `arcSeconds` (ʹʹ) <br> • `radians` (rad) <br> • `gradians` (grad) <br> • `revolutions` (rev) | `degrees` (°) |
| **Area** | • `squareMegameters` (Mm²) <br> • `squareKilometers` (km²) <br> • `squareMeters` (m²) <br> • `squareCentimeters` (cm²) <br> • `squareMillimeters` (mm²) <br> • `squareMicrometers` (µm²) <br> • `squareNanometers` (nm²) <br> • `squareInches` (in²) <br> • `squareFeet` (ft²) <br> • `squareYards` (yd²) <br> • `squareMiles` (mi²) <br> • `acres` (ac) <br> • `ares` (a) <br> • `hectares` (ha) | `squareMeters` (m²) |
| **Concentration Mass** | • `gramsPerLiter` (g/L) <br> • `milligramsPerDeciliter` (mg/dL) <br> • `millimolesPerLiter` (mmol/L) | `gramsPerLiter` (g/L) |
| **Dispersion** | • `partsPerMillion` (ppm) | `partsPerMillion` (ppm) |
| **Duration** | • `seconds` (s) <br> • `minutes` (m) <br> • `hours` (h) | `seconds` (s) |
| **Electric Charge** | • `coulombs` (C) <br> • `megaampereHours` (MAh) <br> • `kiloampereHours` (kAh) <br> • `ampereHours` (Ah) <br> • `milliampereHour` (mAh) <br> • `microampereHour` (µAh) | `coulombs` (C) |
| **Electric Current** | • `megaamperes` (MA) <br> • `kiloamperes` (kA) <br> • `amperes` (A) <br> • `milliamperes` (mA) <br> • `microamperes` (µA) | `amperes` (A) |
| **Electric Potential Difference** | • `megavolts` (MV) <br> • `kilovolts` (kV) <br> • `volts` (V) <br> • `millivolts` (mV) <br> • `microvolts` (µV) | `volts` (V) |
| **Electric Resistance** | • `megaohms` (MΩ) <br> • `kiloohms` (kΩ) <br> • `ohms` (Ω) <br> • `milliohms` (mΩ) <br> • `microohms` (µΩ) | `ohms` (Ω) |
| **Energy** | • `kilojoules` (kJ) <br> • `joules` (J) <br> • `kilocalories` (kCal) <br> • `calories` (cal) <br> • `kilowattHours` (kWh) | `joules` (J) |
| **Frequency** | • `terahertz` (THz) <br> • `gigahertz` (GHz) <br> • `megahertz` (MHz) <br> • `kilohertz` (kHz) <br> • `hertz` (Hz) <br> • `millihertz` (mHz) <br> • `microhertz` (µHz) <br> • `nanohertz` (nHz) | `hertz` (Hz) |
| **Fuel Efficency** | • `litersPer100Kilometers` (L/100km) <br> • `milesPerImperialGallon` (mpg) <br> • `milesPerGallon` (mpg) | `litersPer100Kilometers` (L/100km) |
| **Illuminance** | • `lux` (lx) | `lux` (lx) |
| **Length** | • `megameters` (Mm) <br> • `kilometers` (km) <br> • `hectometers` (hm) <br> • `decameters` (dam) <br> • `meters` (m) <br> • `decimeters` (dm) <br> • `centimeters` (cm) <br> • `millimeters` (mm) <br> • `micrometers` (µm) <br> • `nanometers` (nm) <br> • `picometers` (pm) <br> • `inches` (in) <br> • `feet` (ft) <br> • `yards` (yd) <br> • `miles` (mi) <br> • `scandinavianMiles` (smi) <br> • `lightyears` (ly) <br> • `nauticalMiles` (NM) <br> • `fathoms` (ftm) <br> • `furlongs` (fur) <br> • `astronomicalUnits` (ua) <br> • `parsecs` (pc) | `meters` (m) |
| **Mass** | • `kilograms` (kg) <br> • `grams` (g) <br> • `decigrams` (dg) <br> • `centigrams` (cg) <br> • `milligrams` (mg) <br> • `micrograms` (µg) <br> • `nanograms` (ng) <br> • `picograms` (pg) <br> • `ounces` (oz) <br> • `pounds` (lb) <br> • `stones` (st) <br> • `metricTons` (t) <br> • `shortTons` (ton) <br> • `carats` (ct) <br> • `ouncesTroy` (oz t) <br> • `slugs` (slug) | `kilograms` (kg) |
| **Power** | • `terawatts` (TW) <br> • `gigawatts` (GW) <br> • `megawatts` (MW) <br> • `kilowatts` (kW) <br> • `watts` (W) <br> • `milliwatts` (mW) <br> • `microwatts` (µW) <br> • `nanowatts` (nW) <br> • `picowatts` (nW) <br> • `femtowatts` (nHz) <br> • `horsepower` (hp) | `watts` (W) |
| **Pressure** | • `newtonsPerMetersSquared` (N/m²) <br> • `gigapascals` (GPa) <br> • `megapascals` (MPa) <br> • `kilopascals` (kPa) <br> • `hectopascals` (hPa) <br> • `inchesOfMercury` (inHg) <br> • `bars` (bar) <br> • `millibars` (mbar) <br> • `millimetersOfMercury` (mmHg) <br> • `poundsForcePerSquareInch` (psi) | `newtonsPerMetersSquared` (N/m²) |
| **Speed** | • `metersPerSecond` (m/s) <br> • `kilometersPerHour` (km/h) <br> • `milesPerHour` (mph) <br> • `knots` (kn) | `metersPerSecond` (m/s) |
| **Temperature** | • `kelvin` (K) <br> • `celsius` (°C) <br> • `fahrenheit` (°F) | `kelvin` (K) |
| **Volume** | • `megaliters` (ML) <br> • `kiloliters` (kL) <br> • `liters` (L) <br> • `deciliters` (dl) <br> • `centiliters` (cL) <br> • `milliliters` (mL) <br> • `cubicKilometers` (km³) <br> • `cubicMeters` (m³) <br> • `cubicDecimeters` (dm³) <br> • `cubicCentimeters` (cm³) <br> • `cubicMillimeters` (mm³) <br> • `cubicInches` (in³) <br> • `cubicFeet` (ft³) <br> • `cubicYards` (yd³) <br> • `cubicMiles` (mi³) <br> • `acreFeet` (af) <br> • `bushels` (bsh) <br> • `teaspoons` (tsp) <br> • `tablespoons` (tbsp) <br> • `fluidOunces` (fl oz) <br> • `cups` (cup) <br> • `pints` (pt) <br> • `quarts` (qt) <br> • `gallons` (gal) <br> • `imperialTeaspoons` (tsp Imperial) <br> • `imperialTablespoons` (tbsp Imperial) <br> • `imperialFluidOunces` (fl oz Imperial) <br> • `imperialPints` (pt Imperial) <br> • `imperialQuarts` (qt Imperial) <br> • `imperialGallons` (gal Imperial) <br> • `metricCups` (metric cup Imperial) | `liters` (L) |

## TODO
- [ ] Add methods to add, subtract, multiply and divide `Measurement` objects of the same `Unit`
- [ ] Add an API to extends existing `Unit`s as well as defining new ones
- [ ] Find a workaround to avoid floating point percision problems

## License

MIT © [Lukas Kollmer](https://lukas.vip)

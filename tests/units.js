import test from 'ava';
import {
  Acceleration,
  Angle,
  Area,
  ConcentrationMass,
  Dispersion,
  Duration,
  ElectricCharge,
  ElectricCurrent,
  ElectricPotentialDifference,
  ElectricResistance,
  Energy,
  Frequency,
  FuelEfficiency,
  Illuminance,
  Length,
  Mass,
  Power,
  Pressure,
  Speed,
  Temperature,
  Volume,
  Unit
} from '../lib/';

test('`Unit` subclasses need to override `unitName` and `baseUnit`', t => {
  t.throws(() => {
    new Unit().unitName();
  });

  t.throws(() => {
    new Unit().baseUnit();
  });
});

test('Check base units', t => {
  t.is(Acceleration.baseUnit().equals(Acceleration.metersPerSecondSquared), true);
  t.is(Angle.baseUnit().equals(Angle.degrees), true);
  t.is(Area.baseUnit().equals(Area.squareMeters), true);
  t.is(ConcentrationMass.baseUnit().equals(ConcentrationMass.gramsPerLiter), true);
  t.is(Dispersion.baseUnit().equals(Dispersion.partsPerMillion), true);
  t.is(Duration.baseUnit().equals(Duration.seconds), true);
  t.is(ElectricCharge.baseUnit().equals(ElectricCharge.coulombs), true);
  t.is(ElectricCurrent.baseUnit().equals(ElectricCurrent.amperes), true);
  t.is(ElectricPotentialDifference.baseUnit().equals(ElectricPotentialDifference.volts), true);
  t.is(ElectricResistance.baseUnit().equals(ElectricResistance.ohms), true);
  t.is(Energy.baseUnit().equals(Energy.joules), true);
  t.is(Frequency.baseUnit().equals(Frequency.hertz), true);
  t.is(FuelEfficiency.baseUnit().equals(FuelEfficiency.litersPer100Kilometers), true);
  t.is(Illuminance.baseUnit().equals(Illuminance.lux), true);
  t.is(Length.baseUnit().equals(Length.meters), true);
  t.is(Mass.baseUnit().equals(Mass.kilograms), true);
  t.is(Power.baseUnit().equals(Power.watts), true);
  t.is(Pressure.baseUnit().equals(Pressure.newtonsPerMetersSquared), true);
  t.is(Speed.baseUnit().equals(Speed.metersPerSecond), true);
  t.is(Temperature.baseUnit().equals(Temperature.kelvin), true);
  t.is(Volume.baseUnit().equals(Volume.liters), true);
});

test('Check unit symbols', t => {
  t.is(Acceleration.unitName(), 'Acceleration');
  t.is(Angle.unitName(), 'Angle');
  t.is(Area.unitName(), 'Area');
  t.is(ConcentrationMass.unitName(), 'Concentration Mass');
  t.is(Dispersion.unitName(), 'Dispersion');
  t.is(Duration.unitName(), 'Duration');
  t.is(ElectricCharge.unitName(), 'Electric Charge');
  t.is(ElectricCurrent.unitName(), 'Electric Current');
  t.is(ElectricPotentialDifference.unitName(), 'Electric Potential Difference');
  t.is(ElectricResistance.unitName(), 'Electric Resistance');
  t.is(Energy.unitName(), 'Energy');
  t.is(Frequency.unitName(), 'Frequency');
  t.is(FuelEfficiency.unitName(), 'Fuel Efficency');
  t.is(Illuminance.unitName(), 'Illuminance');
  t.is(Length.unitName(), 'Length');
  t.is(Mass.unitName(), 'Mass');
  t.is(Power.unitName(), 'Power');
  t.is(Pressure.unitName(), 'Pressure');
  t.is(Speed.unitName(), 'Speed');
  t.is(Temperature.unitName(), 'Temperature');
  t.is(Volume.unitName(), 'Volume');
});

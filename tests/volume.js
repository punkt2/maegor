import test from 'ava';
import {
	Measurement,
	Volume
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert liters', t => {
  let vol = new Measurement(1, Volume.liters);

  vol.convertTo(Volume.megaliters);
  t.is(vol.value, 1e-6);

  vol.convertTo(Volume.kiloliters);
  t.is(vol.value, 1e-3);

  vol.convertTo(Volume.deciliters);
  t.is(vol.value, 1e1);

  vol.convertTo(Volume.centiliters);
  t.is(vol.value, 1e2);

  vol.convertTo(Volume.milliliters);
  t.is(vol.value, 1e3);

  vol.convertTo(Volume.liters);
  t.is(vol.value, 1);
});

test('Convert metric volume units', t => {
  let vol = new Measurement(1, Volume.cubicMeters);

  vol.convertTo(Volume.cubicKilometers);
  t.is(vol.value, 1e-9);

  vol.convertTo(Volume.cubicDecimeters);
  t.is(vol.value, 1e3);

  vol.convertTo(Volume.cubicCentimeters);
  t.is(vol.value, 1e5);

  vol.convertTo(Volume.cubicMillimeters);
  t.is(vol.value, 1e6);

  vol.convertTo(Volume.cubicMeters);
  t.is(vol.value, 1);
});

test('Convert imperial volume units', () => {
  let vol = new Measurement(1, Volume.imperialTeaspoons);

  vol.convertTo(Volume.imperialTablespoons);
  assertAccuracy(vol.value, 0.3333327702131973);

  vol.convertTo(Volume.imperialFluidOunces);
  assertAccuracy(vol.value, 0.20833312802897255);

  vol.convertTo(Volume.imperialPints);
  assertAccuracy(vol.value, 0.01041667473220932);

  vol.convertTo(Volume.imperialQuarts);
  assertAccuracy(vol.value, 0.005208346531517263);

  vol.convertTo(Volume.imperialGallons);
  assertAccuracy(vol.value, 0.0013020837686891372);

  vol.convertTo(Volume.imperialTeaspoons);
  assertAccuracy(vol.value, 1);
});

test('Convert cubic{inches/feet/yards/miles}', () => {
  let vol = new Measurement(1e6, Volume.cubicInches);

  vol.convertTo(Volume.cubicFeet);
  assertAccuracy(vol.value, 578.7059272234151);

  vol.convertTo(Volume.cubicYards);
  assertAccuracy(vol.value, 21.433513612493545);

  vol.convertTo(Volume.cubicMiles);
  assertAccuracy(vol.value, 3.93164587332e-9);

  vol.convertTo(Volume.cubicInches);
  assertAccuracy(vol.value, 1e6, 1e-6);
});

test('Convert cups/pints/quarts/gallons', () => {
  let initial = 12.5;
  let vol = new Measurement(initial, Volume.gallons);

  vol.convertTo(Volume.cups);
  assertAccuracy(vol.value, 197.15677083333333);

  vol.convertTo(Volume.pints);
  assertAccuracy(vol.value, 100, 1e-4);

  vol.convertTo(Volume.quarts);
  assertAccuracy(vol.value, 50, 1e-4);

  vol.convertTo(Volume.gallons);
  assertAccuracy(vol.value, initial);
});

test('Convert teaspoons/tablespoons', () => {
  let initial = 2.75;
  let vol = new Measurement(initial, Volume.teaspoons);

  vol.convertTo(Volume.tablespoons);
  assertAccuracy(vol.value, 0.9166641869775746);

  vol.convertTo(Volume.teaspoons);
  assertAccuracy(vol.value, initial);
});

test('Convert other units', () => {
  let initial = 42e5;
  let vol = new Measurement(initial, Volume.liters);

  vol.convertTo(Volume.acreFeet);
  assertAccuracy(vol.value, 3.40632603406326);

  vol.convertTo(Volume.bushels);
  assertAccuracy(vol.value, 119185.79078353307);

  vol.convertTo(Volume.fluidOunces);
  assertAccuracy(vol.value, 142019037.31381136);

  vol.convertTo(Volume.metricCups);
  assertAccuracy(vol.value, 16800000);

  vol.convertTo(Volume.liters);
  assertAccuracy(vol.value, initial);
});

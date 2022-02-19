import test from 'ava';
import {
	Measurement,
	Area
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert metric units', t => {
  let initialValue = 420;
  let area = new Measurement(initialValue, Area.squareMeters);

  area.convertTo(Area.squareMegameters);
  t.is(area.value, 4.2e-10);

  area.convertTo(Area.squareKilometers);
  t.is(area.value, 0.00042);

  area.convertTo(Area.squareMeters);
  t.is(area.value, initialValue);

  area.convertTo(Area.squareCentimeters);
  t.is(area.value, 4.2e+6);

  area.convertTo(Area.squareMillimeters);
  t.is(area.value, 4.2e+8);

  area.convertTo(Area.squareMicrometers);
  t.is(area.value, 4.2e+14);

  area.convertTo(Area.squareNanometers);
  t.is(area.value, 4.2e+20);

  area.convertTo(Area.squareMeters);
  t.is(area.value, initialValue);
});

test('Convert square inches/feet/yards/miles', () => {
  let initialValue = 1;
  let area = new Measurement(initialValue, Area.squareInches);

  area.convertTo(Area.squareFeet);
  assertAccuracy(area.value, 0.006944447434420848);

  area.convertTo(Area.squareYards);
  assertAccuracy(area.value, 0.0007716052704912054);

  area.convertTo(Area.squareMiles);
  assertAccuracy(area.value, 2.490965251e-10);
});

test('Convert acres/ares/hectares', () => {
  let initial = 420;
  let area = new Measurement(initial, Area.squareMeters);

  area.convertTo(Area.acres);
  assertAccuracy(area.value, 0.10378416846641594);

  area.convertTo(Area.ares);
  assertAccuracy(area.value, 4.2);

  area.convertTo(Area.hectares);
  assertAccuracy(area.value, 0.042);

  area.convertTo(Area.squareMeters);
  assertAccuracy(area.value, initial);
});

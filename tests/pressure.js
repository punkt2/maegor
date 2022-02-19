import test from 'ava';
import {
  Measurement,
  Pressure
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert newtonsPerMetersSquared to bars', t => {
  let pressure = new Measurement(12.6, Pressure.newtonsPerMetersSquared);

  pressure.convertTo(Pressure.bars);
  t.is(pressure.value, 0.000126);

  pressure.convertTo(Pressure.millibars);
  t.is(pressure.value, 0.126);
});

test('Convert pascals', t => {
  let pressure = new Measurement(12.4, Pressure.gigapascals);

  pressure.convertTo(Pressure.megapascals);
  t.is(pressure.value, 12400);

  pressure.convertTo(Pressure.kilopascals);
  t.is(pressure.value, 12400000);

  pressure.convertTo(Pressure.hectopascals);
  t.is(pressure.value, 124000000);

  pressure.convertTo(Pressure.gigapascals);
  t.is(pressure.value, 12.4);
});

test('Convert newtonsPerMetersSquared to inchesOfMercury to millimetersOfMercury', t => {
  let initial = 12.6;
  let pressure = new Measurement(initial, Pressure.newtonsPerMetersSquared);

  pressure.convertTo(Pressure.inchesOfMercury);
  assertAccuracy(pressure.value, 0.003720776402009219);

  pressure.convertTo(Pressure.millimetersOfMercury);
  t.is(pressure.value, 0.09450803318282054);

  pressure.convertTo(Pressure.newtonsPerMetersSquared);
  t.is(pressure.value, initial);
});

test('Convert bars to poundsForcePerSquareInch to newtonsPerMetersSquared', t => {
  let initial = 38.9;
  let pressure = new Measurement(initial, Pressure.bars);

  pressure.convertTo(Pressure.poundsForcePerSquareInch);
  assertAccuracy(pressure.value, 564.1965782710348);

  pressure.convertTo(Pressure.newtonsPerMetersSquared);
  t.is(pressure.value, 3890000);

  pressure.convertTo(Pressure.bars);
  t.is(pressure.value, initial);
});

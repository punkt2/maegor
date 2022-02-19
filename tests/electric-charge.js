import test from 'ava';
import {
  Measurement,
  ElectricCharge
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert coulombs to ampereHours', () => {
  let charge = new Measurement(13.4, ElectricCharge.coulombs);

  charge.convertTo(ElectricCharge.ampereHours);
  assertAccuracy(charge.value, 0.0037222, 1e-7);
});

test('Convert amperes', t => {
  let charge = new Measurement(1, ElectricCharge.ampereHours);

  charge.convertTo(ElectricCharge.megaampereHours);
  t.is(charge.value, 1e-6);

  charge.convertTo(ElectricCharge.kiloampereHours);
  t.is(charge.value, 1e-3);

  charge.convertTo(ElectricCharge.milliampereHour);
  t.is(charge.value, 1e3);

  charge.convertTo(ElectricCharge.microampereHour);
  t.is(charge.value, 1e6);

  charge.convertTo(ElectricCharge.ampereHours);
  t.is(charge.value, 1);
});

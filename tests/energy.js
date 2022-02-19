import test from 'ava';
import {
  Measurement,
  Energy
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert joules to calories', () => {
  let energy = new Measurement(12.7, Energy.joules);

  energy.convertTo(Energy.calories);
  assertAccuracy(energy.value, 3.0353728489);

  energy.convertTo(Energy.joules);
  assertAccuracy(energy.value, 12.7);
});

test('Convert kilocalories to kilowattHours', () => {
  let energy = new Measurement(47.3, Energy.kilocalories);

  energy.convertTo(Energy.kilowattHours);
  assertAccuracy(energy.value, 0.0549731, 1e-5);
});

test('Convert kilowattHours to joules', t => {
  let energy = new Measurement(35.9, Energy.kilowattHours);

  energy.convertTo(Energy.joules);
  t.is(energy.value, 129240000);
});

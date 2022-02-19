import test from 'ava';
import {
  Measurement,
  ElectricPotentialDifference
} from '../lib/';

test('Convert volts', t => {
  let initial = 15000;
  let diff = new Measurement(initial, ElectricPotentialDifference.volts);

  diff.convertTo(ElectricPotentialDifference.megavolts);
  t.is(diff.value, 0.015);

  diff.convertTo(ElectricPotentialDifference.kilovolts);
  t.is(diff.value, 15);

  diff.convertTo(ElectricPotentialDifference.millivolts);
  t.is(diff.value, 15000000);

  diff.convertTo(ElectricPotentialDifference.microvolts);
  t.is(diff.value, 15000000000);

  diff.convertTo(ElectricPotentialDifference.volts);
  t.is(diff.value, initial);
});

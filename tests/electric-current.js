import test from 'ava';
import {
  Measurement,
  ElectricCurrent
} from '../lib/';

test('Convert volts', t => {
  let initial = 7200;
  let diff = new Measurement(initial, ElectricCurrent.amperes);

  diff.convertTo(ElectricCurrent.megaamperes);
  t.is(diff.value, 0.0072);

  diff.convertTo(ElectricCurrent.kiloamperes);
  t.is(diff.value, 7.2);

  diff.convertTo(ElectricCurrent.milliamperes);
  t.is(diff.value, 7200000);

  diff.convertTo(ElectricCurrent.microamperes);
  t.is(diff.value, 7200000000);

  diff.convertTo(ElectricCurrent.amperes);
  t.is(diff.value, initial);
});

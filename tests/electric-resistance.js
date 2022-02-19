import test from 'ava';
import {
  Measurement,
  ElectricResistance
} from '../lib/';

test('Convert ohms', t => {
  let resistance = new Measurement(1, ElectricResistance.ohms);

  resistance.convertTo(ElectricResistance.megaohms);
  t.is(resistance.value, 1e-6);

  resistance.convertTo(ElectricResistance.kiloohms);
  t.is(resistance.value, 1e-3);

  resistance.convertTo(ElectricResistance.milliohms);
  t.is(resistance.value, 1e3);

  resistance.convertTo(ElectricResistance.microohms);
  t.is(resistance.value, 1e6);

  resistance.convertTo(ElectricResistance.ohms);
  t.is(resistance.value, 1);
});

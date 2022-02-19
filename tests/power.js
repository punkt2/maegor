import test from 'ava';
import {
	Measurement,
	Power
} from '../lib/';

test('Convert horsepower to watts', t => {
  let initial = 30;
  let power = new Measurement(initial, Power.horsepower);

  power.convertTo(Power.watts);
  t.is(power.value, 22371);

  power.convertTo(Power.horsepower);
  t.is(power.value, initial);
});

test('Convert watts', t => {
  let power = new Measurement(1, Power.watts);

  power.convertTo(Power.terawatts);
  t.is(power.value, 1e-12);

  power.convertTo(Power.gigawatts);
  t.is(power.value, 1e-9);

  power.convertTo(Power.megawatts);
  t.is(power.value, 1e-6);

  power.convertTo(Power.kilowatts);
  t.is(power.value, 1e-3);

  power.convertTo(Power.milliwatts);
  t.is(power.value, 1e3);

  power.convertTo(Power.microwatts);
  t.is(power.value, 1e6);

  power.convertTo(Power.nanowatts);
  t.is(power.value, 1e9);

  power.convertTo(Power.picowatts);
  t.is(power.value, 1e12);

  power.convertTo(Power.femtowatts);
  t.is(power.value, 1e15);

  power.convertTo(Power.watts);
  t.is(power.value, 1);
});

import test from 'ava';
import {
	Measurement,
  Temperature
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert celsius to fahrenheit', () => {
  let temp = new Measurement(20, Temperature.celsius);

  temp.convertTo(Temperature.fahrenheit);
  assertAccuracy(temp.value, 68);
});

test('Convert fahrenheit to kelvin', () => {
  let temp = new Measurement(100, Temperature.fahrenheit);

  temp.convertTo(Temperature.kelvin);
  assertAccuracy(temp.value, 310.928, 1e-3);
});

test('Convert kelvin to celsius', () => {
  let temp = new Measurement(100, Temperature.kelvin);

  temp.convertTo(Temperature.celsius);
  assertAccuracy(temp.value, -173.15);
});

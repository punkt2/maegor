import test from 'ava';
import {
	Measurement,
	Acceleration
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert metersPerSecondSquared to gravity and back', () => {
  let initialValue = 5;
  let initial = new Measurement(initialValue, Acceleration.metersPerSecondSquared);

  let asGravity = initial.convertedTo(Acceleration.gravity);
  assertAccuracy(asGravity.value, 0.509683995922528);

  let back = asGravity.convertedTo(Acceleration.metersPerSecondSquared);
  assertAccuracy(back.value, initialValue);
});

test('Convert gravity to metersPerSecondSquared and back', () => {
  let initialValue = 12.6;
  let initial = new Measurement(initialValue, Acceleration.gravity);

  let asMetersPerSecondSquared = initial.convertedTo(Acceleration.metersPerSecondSquared);
  assertAccuracy(asMetersPerSecondSquared.value, 123.606);

  let back = asMetersPerSecondSquared.convertedTo(Acceleration.gravity);
  assertAccuracy(back.value, initialValue);
});

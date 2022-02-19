import test from 'ava';
import {
	Measurement,
	Angle
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert degrees to arcMinutes to arcSeconds and back', () => {
  let initialValue = 5;
  let initial = new Measurement(initialValue, Angle.degrees);

  let asArcMinutes = initial.convertedTo(Angle.arcMinutes);
  assertAccuracy(asArcMinutes.value, 300);

  let asArcSeconds = asArcMinutes.convertedTo(Angle.arcSeconds);
  assertAccuracy(asArcSeconds.value, 18000);

  let back = asArcSeconds.convertedTo(Angle.degrees);
  assertAccuracy(back.value, initialValue);
});

test('Convert degrees to radians to gradians and back', () => {
  let initialValue = 12.6;
  let initial = new Measurement(initialValue, Angle.degrees);

  let asRadians = initial.convertedTo(Angle.radians);
  assertAccuracy(asRadians.value, 0.21991148575);

  let asGradians = asRadians.convertedTo(Angle.gradians);
  assertAccuracy(asGradians.value, 14);

  let back = asGradians.convertedTo(Angle.degrees);
  assertAccuracy(back.value, initialValue);
});

test('Convert revolutions to arcSeconds to degrees and back', () => {
  let initialValue = 13;
  let initial = new Measurement(initialValue, Angle.revolutions);

  let asArcSeconds = initial.convertedTo(Angle.arcSeconds);
  assertAccuracy(asArcSeconds.value, 16848000);

  let asDegrees = asArcSeconds.convertedTo(Angle.degrees);
  assertAccuracy(asDegrees.value, 4680);

  let back = asDegrees.convertedTo(Angle.revolutions);
  assertAccuracy(back.value, initialValue);
});

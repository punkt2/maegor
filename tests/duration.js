import test from 'ava';
import {
	Measurement,
	Duration
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert minutes to hours', () => {
  let initial = new Measurement(30, Duration.minutes);

  let inHours = initial.convertedTo(Duration.hours);
  assertAccuracy(inHours.value, 0.5);

  let back = inHours.convertedTo(Duration.minutes);
  assertAccuracy(back.value, 30);
});

test('Convert hours to seconds to minutes', () => {
  let initial = new Measurement(18.7, Duration.hours);

  let inSeconds = initial.convertedTo(Duration.seconds);
  assertAccuracy(inSeconds.value, 67320);

  let inMinutes = inSeconds.convertedTo(Duration.minutes);
  assertAccuracy(inMinutes.value, 1122);
});

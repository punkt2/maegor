import test from 'ava';
import {
	Measurement,
	Duration,
  Length
} from '../lib/';

test('Attempt to convert to unit of different type', t => {
  let initial = new Measurement(30, Duration.minutes);
  t.throws(() => {
    initial.convertTo(Length.meters);
  });
});

test('Measurement#toString()', t => {
  let value = new Measurement(45, Duration.minutes);

  t.is(value.toString(), '45 m');
});

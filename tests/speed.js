import test from 'ava';
import {
  Measurement,
  Speed
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert metersPerSecond to kilometersPerHour', () => {
  let speed = new Measurement(47, Speed.metersPerSecond);

  speed.convertTo(Speed.kilometersPerHour);
  assertAccuracy(speed.value, 169.1998646401);
});

test('Convert kilometersPerHour to milesPerHour', () => {
  let speed = new Measurement(250, Speed.kilometersPerHour);

  speed.convertTo(Speed.milesPerHour);
  assertAccuracy(speed.value, 155.3429223335);
});

test('Convert metersPerSecond to knots', () => {
  let speed = new Measurement(25, Speed.metersPerSecond);

  speed.convertTo(Speed.knots);
  assertAccuracy(speed.value, 48.5961542947);
});

test('Convert knots to kilometersPerHour', () => {
  let speed = new Measurement(50, Speed.knots);

  speed.convertTo(Speed.kilometersPerHour);
  assertAccuracy(speed.value, 92.5998459201);
});

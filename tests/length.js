import test from 'ava';
import {
	Measurement,
	Length
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert centimeters to inches', () => {
  let initial = new Measurement(1, Length.inches);

  let asCentimeters = initial.convertedTo(Length.centimeters);
  assertAccuracy(asCentimeters.value, 2.54);

  let convertedValueAsInches = asCentimeters.convertedTo(Length.inches);
  assertAccuracy(convertedValueAsInches.value, 1);
});

test('Convert feet to yards in place', () => {
  let initialValue = 12.6;
  let length = new Measurement(initialValue, Length.feet);

  length.convertTo(Length.yards);
  assertAccuracy(length.value, 4.2);

  length.convertTo(Length.feet);
  assertAccuracy(length.value, initialValue);
});

test('Convert metric units', () => {
  let initialValue = 2849;
  let length = new Measurement(initialValue, Length.meters);

  length.convertTo(Length.megameters);
  assertAccuracy(length.value, 0.002849);

  length.convertTo(Length.kilometers);
  assertAccuracy(length.value, 2.849);

  length.convertTo(Length.hectometers);
  assertAccuracy(length.value, 28.49);

  length.convertTo(Length.decameters);
  assertAccuracy(length.value, 284.9);

  length.convertTo(Length.meters);
  assertAccuracy(length.value, initialValue);

  length.convertTo(Length.decimeters);
  assertAccuracy(length.value, 28490);

  length.convertTo(Length.centimeters);
  assertAccuracy(length.value, 284900);

  length.convertTo(Length.millimeters);
  assertAccuracy(length.value, 2849000);

  length.convertTo(Length.micrometers);
  assertAccuracy(length.value, 2.849e+9);

  length.convertTo(Length.nanometers);
  assertAccuracy(length.value, 2.849e+12);

  length.convertTo(Length.picometers);
  assertAccuracy(length.value, 2.849e+15);
});

test('Convert Miles to Lightyears to AUs to parsecs', () => {
  let distance = new Measurement(105000, Length.miles);

  distance.convertTo(Length.lightyears);
  assertAccuracy(distance.value, 1.78607652468e-8);

  distance.convertTo(Length.astronomicalUnits);
  assertAccuracy(distance.value, 0.001129550133689671);

  distance.convertTo(Length.parsecs);
  assertAccuracy(distance.value, 5.47571937783e-9);
});

test('Convert some other obscure units', () => {
  let initial = 42;
  let distance = new Measurement(initial, Length.miles);

  distance.convertTo(Length.scandinavianMiles);
  assertAccuracy(distance.value, 6.759228);

  distance.convertTo(Length.nauticalMiles);
  assertAccuracy(distance.value, 36.49691144708423);

  distance.convertTo(Length.fathoms);
  assertAccuracy(distance.value, 36959.90813648294);

  distance.convertTo(Length.furlongs);
  assertAccuracy(distance.value, 335.9991648771176);

  distance.convertTo(Length.miles);
  assertAccuracy(distance.value, initial);
});

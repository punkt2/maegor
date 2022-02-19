import test from 'ava';
import {
	Measurement,
	FuelEfficiency
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert litersPer100Kilometers to milesPerGallon', () => {
  let initialValue = 5;
  let efficency = new Measurement(initialValue, FuelEfficiency.litersPer100Kilometers);

  efficency.convertTo(FuelEfficiency.milesPerGallon);
  assertAccuracy(efficency.value, 1176.075);
});

test('Convert milesPerGallon to milesPerImperialGallon', () => {
  let initialValue = 5;
  let efficency = new Measurement(initialValue, FuelEfficiency.milesPerGallon);

  efficency.convertTo(FuelEfficiency.milesPerImperialGallon);
  assertAccuracy(efficency.value, 6.00474034394065);
});

test('Convert milesPerImperialGallon to litersPer100Kilometers', () => {
  let initialValue = 5;
  let efficency = new Measurement(initialValue, FuelEfficiency.milesPerImperialGallon);

  efficency.convertTo(FuelEfficiency.litersPer100Kilometers);
  assertAccuracy(efficency.value, 0.017700305507273056);
});

import test from 'ava';
import {
	Measurement,
	ConcentrationMass
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert gramsPerLiter to millimolesPerLiter', () => {
  let initialValue = 2.5;
  let efficency = new Measurement(initialValue, ConcentrationMass.gramsPerLiter);

  efficency.convertTo(ConcentrationMass.millimolesPerLiter);
  assertAccuracy(efficency.value, 0.1388888888888);
});

test('Convert milligramsPerDeciliter to gramsPerLiter', () => {
  let initialValue = 5;
  let efficency = new Measurement(initialValue, ConcentrationMass.milligramsPerDeciliter);

  efficency.convertTo(ConcentrationMass.gramsPerLiter);
  assertAccuracy(efficency.value, 0.05);
});

test('Convert millimolesPerLiter to milligramsPerDeciliter', () => {
  let initialValue = 5;
  let efficency = new Measurement(initialValue, ConcentrationMass.millimolesPerLiter);

  efficency.convertTo(ConcentrationMass.milligramsPerDeciliter);
  assertAccuracy(efficency.value, 9000);
});


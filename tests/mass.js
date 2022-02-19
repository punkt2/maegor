import test from 'ava';
import {
	Measurement,
	Mass
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Convert other weight units', () => {
  let mass = new Measurement(1, Mass.kilograms);

  mass.convertTo(Mass.ounces);
  assertAccuracy(mass.value, 35.27399072294044);

  mass.convertTo(Mass.pounds);
  assertAccuracy(mass.value, 2.2046244201837775);

  mass.convertTo(Mass.stones);
  assertAccuracy(mass.value, 6.3502949712014125);

  mass.convertTo(Mass.shortTons);
  assertAccuracy(mass.value, 0.0011023109950010197);

  mass.convertTo(Mass.carats);
  assertAccuracy(mass.value, 5000);

  mass.convertTo(Mass.ouncesTroy);
  assertAccuracy(mass.value, 32.150743260882706);

  mass.convertTo(Mass.slugs);
  assertAccuracy(mass.value, 0.06852177964766101);

  mass.convertTo(Mass.kilograms);
  assertAccuracy(mass.value, 1);
});

test('Convert metric weight units', t => {
  let mass = new Measurement(1, Mass.kilograms);

  mass.convertTo(Mass.grams);
  t.is(mass.value, 1e3);

  mass.convertTo(Mass.decigrams);
  t.is(mass.value, 1e4);

  mass.convertTo(Mass.centigrams);
  t.is(mass.value, 1e5);

  mass.convertTo(Mass.milligrams);
  t.is(mass.value, 1e6);

  mass.convertTo(Mass.micrograms);
  t.is(mass.value, 1e9);

  mass.convertTo(Mass.nanograms);
  t.is(mass.value, 1e12);

  mass.convertTo(Mass.picograms);
  t.is(mass.value, 1e15);

  mass.convertTo(Mass.metricTons);
  t.is(mass.value, 1e-3);

  mass.convertTo(Mass.kilograms);
  t.is(mass.value, 1);
});

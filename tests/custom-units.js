import test from 'ava';
import {
	Measurement,
  UnitConverterLinear,
  Length
} from '../lib/';
import assertAccuracy from './_assert-accuracy';

test('Register custom unit via the API and access the new unit directly via name', () => {
  Length.addUnit('earthDiameter', 'ed', 12742);

  let len = new Measurement(42.195, Length.kilometers);
  len.convertTo(Length.earthDiameter);

  assertAccuracy(len.value, 3.3114895620781666);
});

test('Register custom unit via the API and access the new unit via the returned object', () => {
  let moonRadius = Length.addUnit('moonRadius', 'mr', 1737);

  let len = new Measurement(42.195, Length.kilometers);
  len.convertTo(moonRadius);

  assertAccuracy(len.value, 24.29188255613126);
});

test('Register custom unit via subclassing', () => {
  class LengthAdditions extends Length {
    static get earthRadius() {
      return new Length('er', 6371);
    }
  }

  let len = new Measurement(42.195, Length.kilometers);
  len.convertTo(LengthAdditions.earthRadius);

  assertAccuracy(len.value, 6.622979124156333);
});

test('Register a custom unit with a custom converter', t => {
  let imperialMeters = Length.addUnit('imperialMeters', 'im', new UnitConverterLinear(2, -1));

  let len = new Measurement(2, Length.meters);
  len.convertTo(imperialMeters);
  t.is(len.value, 1.5);

  len = new Measurement(4, Length.meters);
  len.convertTo(imperialMeters);
  t.is(len.value, 2.5);
});

test('Attempting to re-define existing units should throw an error', t => {
  t.throws(() => {
    Length.addUnit('meters', 'm', 2);
  });
});

test('Attempting to re-define custom units added via the API should throw an error', t => {
  let customUnitName = 'secretUnit';

  Length.addUnit(customUnitName, 'su', 0.5);

  t.throws(() => {
    Length.addUnit(customUnitName, 'su', 0.4);
  });
});

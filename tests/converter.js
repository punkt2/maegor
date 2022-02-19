import test from 'ava';
import {
  UnitConverter,
  UnitConverterLinear
} from '../lib/';

test('`UnitConverter` linearity', t => {
  let coefficient = 7.0;
  let baseUnitConverter = new UnitConverterLinear(coefficient);
  t.is(baseUnitConverter.valueFromBaseUnitValue(coefficient), 1.0);
  t.is(baseUnitConverter.baseUnitValueFromValue(1), coefficient);
});

test('`UnitConverter` base class returns input values', t => {
  let converter = new UnitConverter(12);
  t.is(converter.baseUnitValueFromValue(5), 5);
  t.is(converter.valueFromBaseUnitValue(5), 5);
});

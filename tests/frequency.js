import test from 'ava';
import {
  Measurement,
  Frequency
} from '../lib/';

test('Convert hertz', t => {
  let freq = new Measurement(1, Frequency.hertz);

  freq.convertTo(Frequency.terahertz);
  t.is(freq.value, 1e-12);

  freq.convertTo(Frequency.gigahertz);
  t.is(freq.value, 1e-9);

  freq.convertTo(Frequency.megahertz);
  t.is(freq.value, 1e-6);

  freq.convertTo(Frequency.kilohertz);
  t.is(freq.value, 1e-3);

  freq.convertTo(Frequency.millihertz);
  t.is(freq.value, 1e3);

  freq.convertTo(Frequency.microhertz);
  t.is(freq.value, 1e6);

  freq.convertTo(Frequency.nanohertz);
  t.is(freq.value, 1e9);

  freq.convertTo(Frequency.hertz);
  t.is(freq.value, 1);
});

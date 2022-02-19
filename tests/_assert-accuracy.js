const assert = require('assert');

module.exports = (input, expected, accuracy = 1e-9) => {
  assert(Math.abs(input - expected) <= Math.abs(accuracy), `Error: ${input} is not equal to ${expected} +/- ${accuracy}`);
};

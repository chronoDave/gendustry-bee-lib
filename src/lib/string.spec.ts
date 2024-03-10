import test from 'tape';

import { camelCase } from './string';

test('[camelCase] returns camelCase', t => {
  t.equal(
    camelCase('Test Honey Comb'),
    'testHoneyComb',
    'returns camelcase'
  );

  t.end();
});

import test from 'tape';

import { formatStack } from './format';

test('[formatStack] formats drop', t => {
  t.equal(
    formatStack({ n: 0.25, id: 'S:gendustry:"HoneyComb.test"' }),
    '25% S:gendustry:"HoneyComb.test"',
    'formats drop'
  );

  t.end();
});

test('[formatStack] clamps drop percent', t => {
  t.equal(
    formatStack({ n: 2, id: '' }),
    '100% ',
    'clamps 100%'
  );

  t.equal(
    formatStack({ n: -0.5, id: '' }),
    '0% ',
    'clamps 0%'
  );

  t.end();
});

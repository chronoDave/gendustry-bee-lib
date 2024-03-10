import test from 'tape';

import { formatDrop } from './format';

test('[formatDrop] formats drop', t => {
  t.equal(
    formatDrop({ n: 0.25, id: 'S:gendustry:"HoneyComb.test"' }),
    '25% S:gendustry:"HoneyComb.test"',
    'formats drop'
  );

  t.end();
});

test('[formatDrop] clamps drop percent', t => {
  t.equal(
    formatDrop({ n: 2, id: '' }),
    '100% ',
    'clamps 100%'
  );

  t.equal(
    formatDrop({ n: -0.5, id: '' }),
    '0% ',
    'clamps 0%'
  );

  t.end();
});

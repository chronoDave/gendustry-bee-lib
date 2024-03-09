import test from 'tape';

import formatFrop from './drop';

test('[drop] formats drop', t => {
  t.equal(
    formatFrop({ n: 0.25, id: 'S:gendustry:"HoneyComb.test"' }),
    '25% S:gendustry:"HoneyComb.test"',
    'formats drop'
  );

  t.end();
});

test('[drop] clamps drop percent', t => {
  t.equal(
    formatFrop({ n: 2, id: '' }),
    '100% ',
    'clamps 100%'
  );

  t.equal(
    formatFrop({ n: -0.5, id: '' }),
    '0% ',
    'clamps 0%'
  );

  t.end();
});

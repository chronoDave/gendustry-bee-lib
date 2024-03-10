import test from 'tape';

import { formatHoneyDrop } from './item';

test('[formatHoneyDrop] formats lang', t => {
  t.equal(
    formatHoneyDrop(1)({
      name: 'Red Honey Drop',
      color: {
        primary: '#000000',
        secondary: '#000000'
      }
    }).lang,
    'gendustry.honeydrop.redHoneyDrop.name=Red Honey Drop'
  );

  t.end();
});

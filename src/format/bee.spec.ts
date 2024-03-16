import test from 'tape';

import { formatBee } from './bee';

test('[bee] formats bee', t => {
  const data = {
    branch: 'Branch',
    name: 'Name',
    latin: 'Latin',
    glowing: true,
    nocturnal: false,
    author: 'Chronocide',
    color: {
      primary: '#111111',
      secondary: '#222222'
    },
    traits: {
      base: 'base'
    }
  };
  const bee = formatBee(data);

  t.true(
    bee.cfg[0].includes(data.name.toLowerCase()),
    'lowercases bee name'
  );

  t.true(
    bee.cfg[1].includes('No'),
    'formats undefined boolean'
  );

  t.true(
    bee.cfg[2].includes('Yes'),
    'formats true'
  );

  t.true(
    bee.cfg[8].includes('No'),
    'formats false'
  );

  t.end();
});

test('[bee] limits author field', t => {
  const bee = formatBee({
    branch: 'Branch',
    name: 'name',
    latin: 'latin',
    author: 'Chronocide',
    traits: {
      base: 'base'
    },
    color: {
      primary: '#111111',
      secondary: '#222222'
    }
  });

  t.true(
    bee.cfg[10].includes('Chron.'),
    'concatenates author'
  );

  t.end();
});

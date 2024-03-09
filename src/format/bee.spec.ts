import test from 'tape';

import formatBee from './bee';

test('[bee] formats bee', t => {
  const branch = 'branch';
  const data = {
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
    },
    mutation: {
      n: 0.1,
      left: 'left',
      right: 'right'
    }
  };
  const bee = formatBee(branch)(data);

  t.true(
    bee[0].includes(data.name.toLowerCase()),
    'lowercases bee name'
  );

  t.true(
    bee[1].includes('No'),
    'formats undefined boolean'
  );

  t.true(
    bee[2].includes('Yes'),
    'formats true'
  );

  t.true(
    bee[8].includes('No'),
    'formats false'
  );

  t.end();
});

test('[bee] limits author field', t => {
  const bee = formatBee('')({
    name: 'name',
    latin: 'latin',
    author: 'Chronocide',
    traits: {
      base: 'base'
    },
    mutation: {
      n: 0.1,
      left: '',
      right: ''
    },
    color: {
      primary: '#111111',
      secondary: '#222222'
    }
  });

  t.true(
    bee[10].includes('Chron.'),
    'concatenates author'
  );

  t.end();
});

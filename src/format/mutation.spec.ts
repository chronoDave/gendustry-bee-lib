import test from 'tape';

import formatMutation from './mutation';

test('[mutation] formats mutation', t => {
  t.equal(
    formatMutation('test')({ left: 'left', right: 'right', n: 0.2 })[0].join(' '),
    'mutation: 20% "left" + "right" => "test"',
    'formats mutation'
  );

  t.end();
});

test('[mutation] formats requirements', t => {
  const mutation = formatMutation('test')({
    left: 'left',
    right: 'right',
    n: 0.2,
    requirements: {
      temperature: 'hellish',
      biome: 'nether'
    }
  });

  t.true(
    mutation.length === 2,
    'has requirements'
  );
  t.true(
    mutation[1].some(x => x.includes('Req Biome Hell')),
    'has biome requirement'
  );

  t.end();
});

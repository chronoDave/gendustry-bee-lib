import test from 'tape';

import formatMutation from './mutation';
import { formatBiome } from './requirement';

test('[mutation] formats mutation', t => {
  t.equal(
    formatMutation('test')({ left: 'left', right: 'right', n: 0.2 }).join(' '),
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
    requirement: formatBiome('nether')
  });

  t.true(
    mutation.some(x => x.includes('Req Biome Hell')),
    'has biome requirement'
  );

  t.end();
});

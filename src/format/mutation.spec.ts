import test from 'tape';

import { formatMutation } from './mutation';
import { formatBiome } from './requirement';

test('[mutation] formats mutation', t => {
  t.equal(
    formatMutation({ left: 'left', right: 'right', out: 'test', n: 0.2 }),
    'mutation: 20% "left" + "right" => "gendustry.bee.test"',
    'formats mutation'
  );

  t.end();
});

test('[mutation] formats requirements', t => {
  const mutation = formatMutation({
    left: 'left',
    right: 'right',
    out: 'test',
    n: 0.2,
    requirement: formatBiome('nether')
  });

  t.true(
    mutation.includes('Req Biome Hell'),
    'has biome requirement'
  );

  t.end();
});

import test from 'tape';

import { formatOreDictionary } from './ingredient';

import formatFlower from './flower';

test('[flower] formats flower', t => {
  const flower = formatFlower({
    id: 'goldBlocks',
    dominant: true,
    flowers: [
      formatOreDictionary('blockGold'),
      formatOreDictionary('blockIron')
    ],
    spread: formatOreDictionary('oreGold')
  });

  t.true(flower[1] === '\tDominant', 'Has dominant');

  t.end();
});

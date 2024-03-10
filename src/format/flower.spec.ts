import test from 'tape';

import { formatOreDictionary } from './ingredient';

import formatFlower from './flower';

test('[flower] formats flower', t => {
  const flower = formatFlower({
    name: 'Gold Blocks',
    dominant: true,
    flowers: [
      formatOreDictionary('blockGold'),
      formatOreDictionary('blockIron')
    ],
    spread: formatOreDictionary('oreGold')
  });

  t.true(flower.cfg[1] === '\tDominant', 'Has dominant');

  t.end();
});

test('[flower] formats flower language', t => {
  const flower = formatFlower({
    name: 'Gold Blocks',
    dominant: true,
    flowers: [
      formatOreDictionary('blockGold'),
      formatOreDictionary('blockIron')
    ],
    spread: formatOreDictionary('oreGold')
  });

  t.equal(
    flower.lang,
    'gendustry.allele.flowers.goldBlocks=Gold Blocks',
    'Formats language'
  );

  t.end();
});

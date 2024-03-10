import test from 'tape';

import { FLOWER } from '../const/allele';

import formatTraits from './traits';

test('[traits] formats boolean traits', t => {
  const traits = formatTraits({
    base: '',
    nocturnal: false,
    cave: true,
  });

  t.true(
    traits[1].includes('forestry.allele.false'),
    'formats falsy boolean'
  );
  t.true(
    traits[2].includes('forestry.allele.true'),
    'formats truthy boolean'
  );
  t.true(
    traits.filter(x => x.includes('Tolerant_Flyer')).length === 0,
    'does not format undefined'
  );

  t.end();
});

test('[traits] formats custom flowers', t => {
  t.true(
    formatTraits({ base: '', flower: 'goldBlocks' })[1]
      .includes('gendustry.flowersGoldBlocks'),
    'formats custom flower'
  );

  t.false(
    formatTraits({ base: '', flower: 'nether' })[1]
      .includes('gendustry.flowers'),
    'formats known flower key'
  );

  t.false(
    formatTraits({ base: '', flower: FLOWER.nether })[1]
      .includes('gendustry.flowers'),
    'formats known flower value'
  );

  t.end();
});

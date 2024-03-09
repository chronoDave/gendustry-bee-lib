import test from 'tape';

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

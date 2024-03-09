import { Bee } from '../types/bee';

import formatDrop from './drop';
import formatTraits from './traits';
import formatMutation from './mutation';

const formatBool = (x?: boolean) => x ? 'Yes' : 'No';
const formatHex = (x: string) => {
  if (!/^#[0-9A-F]{6}$/i.test(x)) throw new Error('Invalid hex code');
  return `0x${x.slice(1).toUpperCase()}`;
};
const formatAuthor = (x: string) => x.length > 6 ?
  `${x.slice(0, 5)}.` :
  x;

export default (branch: string) => (bee: Bee) => {
  const id = bee.name.toLowerCase();

  return [
    `cfg ${id} {`,
    `\tDominant = ${formatBool(bee.dominant)}`,
    `\tGlowing = ${formatBool(bee.glowing)}`,
    `\tPrimaryColor = ${formatHex(bee.color.primary)}`,
    `\tSecondaryColor = ${formatHex(bee.color.secondary)}`,
    `\tSecret = ${formatBool(bee.secret)}`,
    `\tHumidity = ${bee.humidity ?? 'Normal'}`,
    `\tTemperatue = ${bee.temperature ?? 'Normal'}`,
    `\tNocturnal = ${formatBool(bee.nocturnal)}`,
    `\tBinominal = ${bee.latin}`,
    `\tAuthority = ${formatAuthor(bee.author)}`,
    `\tBranch = ${branch}`,
    '\tProducts = DropsList(',
    ...(bee.drops?.regular?.map(formatDrop).map(x => `\t\t${x}`) ?? []),
    '\t)',
    '\tSpeciality = DropsList(',
    ...(bee.drops?.special?.map(formatDrop).map(x => `\t\t${x}`) ?? []),
    '\t)',
    '\tcfg Traits {',
    ...formatTraits(bee.traits).map(x => `\t\t${x}`),
    '\t}',
    '}',
    '',
    'recipes {',
    ...bee.mutations.map(formatMutation(id)).map(x => `\t${x}`),
    '}'
  ];
};

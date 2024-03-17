import type { Traits } from './traits';
import type { Stack } from '../lib/format';

import { formatHex, formatStack } from '../lib/format';
import { camelCase } from '../lib/string';

import formatTraits from './traits';

export type Bee = {
  branch: string
  name: string
  latin: string
  /** Truncated at 7 characters or more */
  author: string
  description?: string | { text: string, author: string }
  color: {
    primary: string
    secondary: string
  }
  dominant?: boolean
  glowing?: boolean
  secret?: boolean
  nocturnal?: boolean
  humidity?: string
  temperature?: string
  drops?: {
    regular?: Stack[]
    special?: Stack[]
  }
  traits: Traits
};

const formatBool = (x?: boolean) => x ? 'Yes' : 'No';
const formatAuthor = (x: string) => x.length > 6 ?
  `${x.slice(0, 5)}.` :
  x;

const formatDescription = (x: Bee['description']) => {
  if (!x) return null;
  if (typeof x === 'string') return x;
  return `"${x.text}"|${x.author}`;
};

/**
 * @see [Adding Bee Species - BDew](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-bee-species/)
 */
export const formatBee = (bee: Bee) => {
  const id = camelCase(bee.name);

  return ({
    lang: [
      `gendustry.bees.species.${id}=${bee.name}`,
      bee.description && `gendustry.bees.species.${id}.description=${formatDescription(bee.description)}`
    ]
      .filter(x => x) as string[],
    cfg: [
      `cfg ${id} {`,
      `\tDominant = ${formatBool(bee.dominant)}`,
      `\tGlowing = ${formatBool(bee.glowing)}`,
      `\tPrimaryColor = ${formatHex(bee.color.primary)}`,
      `\tSecondaryColor = ${formatHex(bee.color.secondary)}`,
      `\tSecret = ${formatBool(bee.secret)}`,
      `\tHumidity = ${bee.humidity ?? 'Normal'}`,
      `\tTemperature = ${bee.temperature ?? 'Normal'}`,
      `\tNocturnal = ${formatBool(bee.nocturnal)}`,
      `\tBinominal = ${bee.latin.toLowerCase()}`,
      `\tAuthority = ${formatAuthor(bee.author)}`,
      `\tBranch = "${bee.branch}"`,
      '\tProducts = DropsList(',
      ...(bee.drops?.regular?.map(formatStack).map(x => `\t\t${x}`) ?? []),
      '\t)',
      '\tSpecialty = DropsList(',
      ...(bee.drops?.special?.map(formatStack).map(x => `\t\t${x}`) ?? []),
      '\t)',
      '',
      '\tcfg Traits {',
      ...formatTraits(bee.traits).map(x => `\t\t${x}`),
      '\t}',
      '}',
    ]
  });
};

export const formatBees = (...bees: Bee[]) => {
  const formatted = bees.map(formatBee);

  return ({
    lang: formatted.map(bee => bee.lang).flat(),
    cfg: [
      'cfg Bees {',
      ...formatted.map(bee => bee.cfg.map(x => `\t${x}`).join('\n')),
      '}'
    ]
  });
};

import type { Traits } from './traits';
import type { Mutation } from './mutation';
import type TEMPERATURE from '../const/temperature';
import type HUMIDITY from '../const/humidity';
import type { Drop } from '../lib/format';

import { formatHex, formatDrop } from '../lib/format';
import { camelCase } from '../lib/string';

import formatTraits from './traits';
import formatMutation from './mutation';

export type Bee = {
  name: string
  latin: string
  author: string
  description?: string
  color: {
    primary: string
    secondary: string
  }
  dominant?: boolean
  glowing?: boolean
  secret?: boolean
  nocturnal?: boolean
  humidity?: keyof typeof HUMIDITY
  temperature?: keyof typeof TEMPERATURE
  drops?: {
    regular?: Drop[]
    special?: Drop[]
  }
  traits: Traits
  mutations: Mutation[]
};

const formatBool = (x?: boolean) => x ? 'Yes' : 'No';
const formatAuthor = (x: string) => x.length > 6 ?
  `${x.slice(0, 5)}.` :
  x;

export default (branch: string) => (bee: Bee) => {
  const id = camelCase(bee.name);

  return ({
    lang: [
      `gendustry.bees.species.${id}=${bee.name}`,
      bee.description && `gendustry.bees.species.${id}.description=${bee.description}`
    ]
      .filter(x => x) as string[],
    cfg: {
      bee: [
        'cfg Bees {',
        `\tcfg ${id} {`,
        `\t\tDominant = ${formatBool(bee.dominant)}`,
        `\t\tGlowing = ${formatBool(bee.glowing)}`,
        `\t\tPrimaryColor = ${formatHex(bee.color.primary)}`,
        `\t\tSecondaryColor = ${formatHex(bee.color.secondary)}`,
        `\t\tSecret = ${formatBool(bee.secret)}`,
        `\t\tHumidity = ${bee.humidity ?? 'Normal'}`,
        `\t\tTemperature = ${bee.temperature ?? 'Normal'}`,
        `\t\tNocturnal = ${formatBool(bee.nocturnal)}`,
        `\t\tBinominal = ${bee.latin.toLowerCase()}`,
        `\t\tAuthority = ${formatAuthor(bee.author)}`,
        `\t\tBranch = "${branch}"`,
        '\t\tProducts = DropsList(',
        ...(bee.drops?.regular?.map(formatDrop).map(x => `\t\t\t${x}`) ?? []),
        '\t\t)',
        '\t\tSpecialty = DropsList(',
        ...(bee.drops?.special?.map(formatDrop).map(x => `\t\t\t${x}`) ?? []),
        '\t\t)',
        '',
        '\t\tcfg Traits {',
        ...formatTraits(bee.traits).map(x => `\t\t\t${x}`),
        '\t\t}',
        '\t}',
        '}'
      ],
      mutations: [
        'recipes {',
        bee.mutations
          .map(formatMutation(id))
          .map(x => `\t${x.join(' ')}`),
        '}'
      ]
    }
  });
};

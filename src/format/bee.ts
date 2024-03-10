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
      .filter(x => x),
    cfg: {
      bee: [
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
        `\tBranch = "${branch}"`,
        '\tProducts = DropsList(',
        ...(bee.drops?.regular?.map(formatDrop).map(x => `\t\t${x}`) ?? []),
        '\t)',
        '\tSpecialty = DropsList(',
        ...(bee.drops?.special?.map(formatDrop).map(x => `\t\t${x}`) ?? []),
        '\t)',
        '',
        '\tcfg Traits {',
        ...formatTraits(bee.traits).map(x => `\t\t${x}`),
        '\t}',
        '}',
      ],
      mutations: bee.mutations
        .map(formatMutation(id))
        .map(x => x.join(' '))
    }
  });
};

import type { Bee } from './bee';

import { camelCase } from '../lib/string';

import formatBee from './bee';

export type Branch = {
  name: string
  description?: string
  bees: Bee[]
};

export default (id: string) => (branch: Branch) => {
  const uid = `${id}.${camelCase(branch.name)}`;
  const bees = branch.bees.map(formatBee(uid));

  return ({
    lang: [
      `for.genus.${uid}=${branch.name}`,
      `for.genus.${uid}.description=${branch.description}`,
      ...bees.map(bee => bee.lang).flat()
    ],
    cfg: [
      'cfg Branches {',
      `\tcfg ${uid} {`,
      `\t\tUID = "${uid}"`,
      '\t\tParent = apidae',
      `\t\tScientific = ${branch.name}`,
      '\t}',
      '}',
      '',
      'cfg Bees {',
      ...bees
        .map(bee => bee.cfg.bee)
        .flat()
        .map(cfg => `\t${cfg}`),
      '}',
      '',
      'recipes {',
      ...bees
        .map(bee => bee.cfg.mutations)
        .flat()
        .map(mutation => `\t${mutation}`),
      '}'
    ]
  });
};

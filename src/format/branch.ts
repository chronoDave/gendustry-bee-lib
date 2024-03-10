import type { Bee } from './bee';

import { camelCase } from '../lib/string';

import formatBee from './bee';

export type Branch = {
  name: string
  latin: string
  description?: string
  bees: Bee[]
};

export default (id: string) => (branch: Branch) => {
  const uid = `${id}.${camelCase(branch.name)}`;
  const bees = branch.bees.map(formatBee(uid));

  return ({
    lang: [
      `for.genus.${uid}=${branch.name}`,
      branch.description && `for.genus.${uid}.description=${branch.description}`,
      ...bees.map(bee => bee.lang).flat()
    ]
      .filter(x => x) as string[],
    cfg: [
      'cfg Branches {',
      `\tcfg ${camelCase(branch.name)} {`,
      `\t\tUID = "${uid}"`,
      '\t\tParent = apidae',
      `\t\tScientific = ${branch.latin}`,
      '\t}',
      '}',
      '',
      'cfg Bees {',
      ...bees
        .map(bee => bee.cfg.bee.slice(1, -1))
        .flat(),
      '}',
      '',
      'recipes {',
      ...bees.map(bee => bee.cfg.mutations[1]).flat(),
      '}'
    ]
  });
};

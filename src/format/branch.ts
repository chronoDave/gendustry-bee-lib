import type { Bee } from './bee';

import formatBee from './bee';

export type Branch = {
  name: string
  latin: string
  bees: Bee[]
};

export default (id: string) => (branch: Branch) => {
  const name = branch.name.toLowerCase();
  const uid = `${id}.${name}`;
  const bees = branch.bees.map(formatBee(id));

  return ({
    lang: [
      `for.genus.${uid}=${branch.latin}`,
      ...bees.map(bee => bee.lang)
    ],
    cfg: [
      'cfg Branches {',
      `\tcfg ${name} {`,
      `\t\tUID = ${uid}`,
      '\t\tParent = apidae',
      `\t\tScientific = ${branch.latin}`,
      '\t}',
      '}',
      '',
      'cfg Bees {',
      ...bees.map(bee => `\t${bee.cfg}`),
      '}'
    ]
  });
};

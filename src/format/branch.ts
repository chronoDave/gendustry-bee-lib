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

  return [
    'cfg Branches {',
    `\tcfg ${name} {`,
    `\t\tUID = ${uid}`,
    '\t\tParent = apidae',
    `\t\tScientific = ${branch.latin}`,
    '\t}',
    '}',
    '',
    'cfg Bees {',
    ...branch.bees.map(formatBee(id)).map(x => `\t${x}`),
    '}'
  ];
};

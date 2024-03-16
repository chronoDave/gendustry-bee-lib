import type { Stack } from '../lib/format';

import { formatStack } from '../lib/format';

export type Centrifuge = {
  in: string
  out: Stack[]
  cycles: number
};

/**
 * @see [Centrifuge Recipes - BDew](https://bdew.net/gendustry/configuration/centrifuge-recipes/)
 */
export default (centrifuge: Centrifuge) => [
  `centrifuge: ${centrifuge.in}, ${centrifuge.cycles} cycles => {`,
  ...centrifuge.out.map(formatStack).map(x => `\t${x}`),
  '}'
];

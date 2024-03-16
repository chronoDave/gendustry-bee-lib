import type { Stack } from '../lib/format';

import { formatStack } from '../lib/format';

export type Squeezer = {
  in: string
  cycles: number
  liquid: Stack
  bonus?: Stack
};

/**
 * @see [Squeezer Recipes - BDew](https://bdew.net/gendustry/configuration/squeezer-recipes/)
 */
export default (squeezer: Squeezer) => [
  'squeezer:',
  `${squeezer.in},`,
  `${squeezer.cycles} cycles =>`,
  `${squeezer.liquid.id} ${squeezer.liquid.n} mb`,
  squeezer.bonus && `+ ${formatStack(squeezer.bonus)}`
]
  .filter(x => x)
  .join(' ');

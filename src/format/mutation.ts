import { clamp } from '../lib/math';

export type Mutation = {
  /** [0, 1] */
  n: number
  left: string
  right: string
  out: string
  /** Must be formatted requirement */
  requirement?: string
};

/**
 * @param id Custom bee ID
 * @see [Mutation "Recipes" - BDew](https://bdew.net/gendustry/configuration/mutation-recipes/)
 */
export const formatMutation = (mutation: Mutation) => [
  'mutation:',
  `${Math.round(clamp(0, 1, mutation.n) * 100)}%`,
  `"${mutation.left}"`,
  '+',
  `"${mutation.right}"`,
  '=>',
  `"gendustry.bee.${mutation.out}"`,
  mutation.requirement
]
  .filter(x => x)
  .join(' ');

export const formatMutations = (mutations: string[] | Mutation[]) => [
  'recipes {',
  ...mutations.map(x => typeof x === 'string' ? x : formatMutation(x)),
  '}'
];

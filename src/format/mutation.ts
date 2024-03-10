import { clamp } from '../lib/math';

export type Mutation = {
  n: number
  left: string
  right: string
  requirement?: string
};

export default (id: string) => (mutation: Mutation) => [
  'mutation:',
  `${Math.round(clamp(0, 1, mutation.n) * 100)}%`,
  `"${mutation.left}"`,
  '+',
  `"${mutation.right}"`,
  '=>',
  `"gendustry.bee.${id}"`,
  mutation.requirement
]
  .filter(x => x) as string[];

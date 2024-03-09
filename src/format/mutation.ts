import { clamp } from '../lib/math';
import { Mutation } from '../types/bee';

export default (id: string) => (mutation: Mutation) => [
  'mutation:',
  `${Math.round(clamp(0, 1, mutation.n) * 100)}%`,
  `"${mutation.left}"`,
  '+',
  `"${mutation.right}"`,
  '=>',
  `"${id}"`,
  mutation.requirement
]
  .filter(x => x) as string[];

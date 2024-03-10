import { clamp } from '../lib/math';

export type Drop = {
  n: number
  id: string
};

export default (drop: Drop) =>
  `${Math.round(clamp(0, 1, drop.n) * 100)}% ${drop.id}`;

import { clamp } from '../lib/math';
import { Drop } from '../types/bee';

export default (drop: Drop) =>
  `${Math.round(clamp(0, 1, drop.n) * 100)}% ${drop.id}`;

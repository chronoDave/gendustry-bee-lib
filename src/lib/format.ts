import { clamp } from './math';

export type Drop = { id: string, n: number };

export const formatDrop = (drop: Drop) =>
  `${Math.round(clamp(0, 1, drop.n) * 100)}% ${drop.id}`;

export const formatHex = (x: string) => {
  if (!/^#[0-9A-F]{6}$/i.test(x)) throw new Error('Invalid hex code');
  return `0x${x.slice(1).toUpperCase()}`;
};
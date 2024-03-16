import { clamp } from './math';

export type Stack = {
  id: string,
  /** [0, 1] */
  n: number
};

export const formatStack = (stack: Stack) =>
  `${Math.round(clamp(0, 1, stack.n) * 100)}% ${stack.id}`;

/**
 * @param x `#xxxxxx`
 * */
export const formatHex = (x: string) => {
  if (!/^#[0-9A-F]{6}$/i.test(x)) throw new Error('Invalid hex code');
  return `0x${x.slice(1).toUpperCase()}`;
};

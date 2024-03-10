export type Ingredient = {
  id: string
  mod?: string
  meta?: string | number
};

const charStart = (char: string) => (x?: string | number) => x ?
  `${char}${x}` :
  '';

const charEnd = (char: string) => (x?: string | number) => x ?
  `${x}${char}` :
  '';

const formatColon = charEnd(':');
const formatAt = charStart('@');

export const formatBlock = (block: Ingredient) => [
  'B:',
  formatColon(block.mod),
  block.id,
  formatAt(block.meta)
].join('');

export const formatItem = (item: Ingredient) => [
  'I:',
  formatColon(item.mod),
  item.id,
  formatAt(item.meta)
].join('');

export const formatCustom = (id: string) =>
  `S:gendustry:"${id}"`;

export const formatOreDictionary = (id: string) =>
  `OD:${id}`;

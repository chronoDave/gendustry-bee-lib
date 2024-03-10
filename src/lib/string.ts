export const capitalize = (x: string) =>
  `${x[0].toUpperCase()}${x.slice(1)}`;

export const camelCase = (x: string) => x
  .split(' ')
  .map((y, i) => i === 0 ? y.toLowerCase() : capitalize(y))
  .join('');

export const pascalCase = (x: string) => x
  .split(' ')
  .map(capitalize)
  .join('');

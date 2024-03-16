import { camelCase, pascalCase } from '../lib/string';

export type Flower = {
  name: string
  flowers: string[]
  spread: string | { id: string, n: number }
  dominant?: boolean
};

const formatSpread = (spread: Flower['spread']) => {
  if (typeof spread === 'string') return `${spread} 1.0`;
  return `${spread.id} ${spread.n}`;
};

/**
 * @param flower.n [0, 1]
 */
export default (flower: Flower) => ({
  id: `gendustry.flowers${pascalCase(flower.name)}`,
  lang: `gendustry.allele.flowers.${camelCase(flower.name)}=${flower.name}`,
  cfg: [
    `FlowerAllele ${camelCase(flower.name)} {`,
    `\t${flower.dominant ? 'Dominant' : 'Recessive'}`,
    `\tAccepts ${flower.flowers.join(', ')}`,
    `\tSpread ${formatSpread(flower.spread)}`,
    '}'
  ]
});

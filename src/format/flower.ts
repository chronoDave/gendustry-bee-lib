import { Flower } from '../types/flower';

const formatSpread = (spread: Flower['spread']) => {
  if (typeof spread === 'string') return `${spread} 1.0`;
  return `${spread.id} ${spread.n}`;
};

export default (flower: Flower) => [
  `FlowerAllele ${flower.id} {`,
  `\t${flower.dominant ? 'Dominant' : 'Recessive'}`,
  `\tAccepts ${flower.flowers.join(', ')}`,
  `\tSpread ${formatSpread(flower.spread)}`,
  '}'
];

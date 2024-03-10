export type Flower = {
  id: string
  flowers: string[]
  spread: string | { id: string, n?: number }
  dominant?: boolean
};

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

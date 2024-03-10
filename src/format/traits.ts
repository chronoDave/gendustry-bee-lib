import {
  EFFECT,
  FLOWER,
  FERTILITY,
  FLOWERING,
  LIFESPAN,
  SPEED,
  TERRITORY,
  TOLERANCE
} from '../const/allele';

export type Traits = {
  base: string
  speed?: keyof typeof SPEED
  lifespan?: keyof typeof LIFESPAN
  fertility?: keyof typeof FERTILITY
  temperature?: keyof typeof TOLERANCE
  humidity?: keyof typeof TOLERANCE
  nocturnal?: boolean
  cave?: boolean
  rain?: boolean
  flower?: keyof typeof FLOWER | string
  pollinate?: keyof typeof FLOWERING
  territory?: keyof typeof TERRITORY
  effect?: keyof typeof EFFECT
};

const formatBool = (x: undefined | boolean) => {
  if (typeof x !== 'boolean') return x;
  return x ?
    'forestry.allele.true' :
    'forestry.allele.false';
};

const formatConst = <T extends Record<string, string>>(obj: T, key: keyof T | undefined) => {
  if (!key) return key;
  return obj[key];
};

const formatFlower = (x: string | undefined) => {
  if (!x || Object.values(FLOWER).some(v => v === x)) return x;
  if (Object.keys(FLOWER).some(k => k === x)) return FLOWER[x as keyof typeof FLOWER];

  return `gendustry.flowers${x[0].toUpperCase()}${x.slice(1)}`;
};

export default (traits: Traits) => [
  ['Base', traits.base],
  ['Speed', formatConst(SPEED, traits.speed)],
  ['Lifespan', formatConst(LIFESPAN, traits.lifespan)],
  ['Fertility', formatConst(FERTILITY, traits.fertility)],
  ['Temperature_Tolerance', formatConst(TOLERANCE, traits.temperature)],
  ['Humidity_Tolerance', formatConst(TOLERANCE, traits.humidity)],
  ['Nocturnal', formatBool(traits.nocturnal)],
  ['Cave_Dwelling', formatBool(traits.cave)],
  ['Tolerant_Flyer', formatBool(traits.rain)],
  ['Flower_Provider', formatFlower(traits.flower)],
  ['Flowering', formatConst(FLOWERING, traits.pollinate)],
  ['Territory', formatConst(TERRITORY, traits.territory)],
  ['Effect', formatConst(EFFECT, traits.effect)]
]
  .filter(([, x]) => x !== undefined)
  .map(([k, v]) => `${k} = "${v}"`);

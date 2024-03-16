import {
  EFFECT,
  FLOWER,
  FERTILITY,
  POLLINATION,
  LIFESPAN,
  SPEED,
  TERRITORY,
  TOLERANCE
} from '../const/allele';

export type Traits = {
  /** Must use {@link SPECIES}, does not work with custom bees */
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
  pollination?: keyof typeof POLLINATION
  territory?: keyof typeof TERRITORY
  effect?: keyof typeof EFFECT
};

const formatBool = (x: undefined | boolean) => {
  if (typeof x !== 'boolean') return x;
  return x ?
    'forestry.boolTrue' :
    'forestry.boolFalse';
};

const formatConst = <T extends Record<string, string>>(obj: T, key: keyof T | undefined) => {
  if (!key) return key;
  return obj[key];
};

const formatFlower = (x: string | undefined) => {
  if (Object.keys(FLOWER).some(k => k === x)) return FLOWER[x as keyof typeof FLOWER];
  return x;
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
  ['Flowering', formatConst(POLLINATION, traits.pollination)],
  ['Territory', formatConst(TERRITORY, traits.territory)],
  ['Effect', formatConst(EFFECT, traits.effect)]
]
  .filter(([, x]) => x !== undefined)
  .map(([k, v]) => `${k} = "${v}"`);

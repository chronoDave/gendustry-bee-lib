import { Traits } from '../types/bee';
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
  ['Flower_Provider', formatConst(FLOWER, traits.flower)],
  ['Flowering', formatConst(FLOWERING, traits.pollinate)],
  ['Territory', formatConst(TERRITORY, traits.territory)],
  ['Effect', formatConst(EFFECT, traits.effect)]
]
  .filter(([, x]) => x !== undefined)
  .map(([k, v]) => `${k} = "${v}"`);

export type Traits = {
  /** {@link SPECIES} */
  base: string
  /** {@link SPEED} */
  speed?: string
  /** {@link LIFESPAN} */
  lifespan?: string
  /** {@link FERTILITY} */
  fertility?: string
  /** {@link TEMPERATURE} */
  temperature?: string
  /** {@link HUMIDITY} */
  humidity?: string
  nocturnal?: boolean
  cave?: boolean
  rain?: boolean
  /** {@link FLOWER} */
  flower?: string
  /** {@link POLLINATION} */
  pollination?: string
  /** {@link TERRITORY} */
  territory?: string
  /** {@link EFFECT} */
  effect?: string
};

const formatBool = (x: undefined | boolean) => {
  if (typeof x !== 'boolean') return x;
  return x ?
    'forestry.boolTrue' :
    'forestry.boolFalse';
};

export default (traits: Traits) => [
  ['Base', traits.base],
  ['Speed', traits.speed],
  ['Lifespan', traits.lifespan],
  ['Fertility', traits.fertility],
  ['Temperature_Tolerance', traits.temperature],
  ['Humidity_Tolerance', traits.humidity],
  ['Nocturnal', formatBool(traits.nocturnal)],
  ['Cave_Dwelling', formatBool(traits.cave)],
  ['Tolerant_Flyer', formatBool(traits.rain)],
  ['Flower_Provider', traits.flower],
  ['Flowering', traits.pollination],
  ['Territory', traits.territory],
  ['Effect', traits.effect]
]
  .filter(([, x]) => x !== undefined)
  .map(([k, v]) => `${k} = "${v}"`);

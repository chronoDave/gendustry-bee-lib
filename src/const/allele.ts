/**
 * @see [Effect - Feed The Beast Wiki](https://ftbwiki.org/Effect)
 */
export const EFFECT = {
  /** Turns Dirt into Sand (as if "dissolving" it through acids). */
  acidic: 'extrabees.effect.acid',
  /** Spawns fireworks. */
  birthday: 'extrabees.effect.birthday',
  /** Causes blindness to the player when in range. */
  darkness: 'extrabees.effect.blindness',
  /** Increases the speed at which tree fruits ripen. */
  ripening: 'extrabees.effect.bonemeal_fruit',
  /** Bonemeals nearby mushrooms  */
  mushroom: 'extrabees.effect.bonemeal_mushroom',
  /** Bonemeals nearby saplings  */
  growth: 'extrabees.effect.bonemeal_sapling',
  /** Continually applies 10 seconds of Nausea to the player when in range. */
  confusion: 'extrabees.effect.confusion',
  /** Chance of spawning Ectoplasm. */
  ectoplasm: 'extrabees.effect.ectoplasm',
  festival: 'extrabees.effect.festival',
  /** Spawns fireworks with explosions with colors based on the bee. */
  fireworks: 'extrabees.effect.fireworks',
  /** Fills up hunger bar when in range. */
  nourishment: 'extrabees.effect.food',
  /** Increases jump distance when in range. */
  gravity: 'extrabees.effect.gravity',
  /** Causes hunger to the player when in range. */
  hunger: 'extrabees.effect.hunger',
  /** Causes frequent lightning strikes within the territory. Not compatible with the Lightning Rod. (Don't use in wooden house!) */
  lightning: 'extrabees.effect.lightning',
  /** Spawns fire charges high up in the air to rain down. Do not use in a wooden house! */
  meteor: 'extrabees.effect.meteor',
  /** Very slowly charges nearby machines with MJ (BuildCraft power). */
  power: 'extrabees.effect.power',
  /** Causes two hearts of damage repeatedly, will quickly kill any unprotected players. Much faster than "Radioact." effect. */
  unstable: 'extrabees.effect.radioactive',
  /** Uses potion effect Weakness on nearby player for 10 seconds  */
  slowness: 'extrabees.effect.slow',
  /** Chance of spawning Creepers at low enough light level. Not to be confused with the "Creeper" effect. */
  creepers: 'extrabees.effect.spawn_creeper',
  /** Chance of spawning Skeletons at low enough light level. */
  skeletons: 'extrabees.effect.spawn_skeleton',
  /** Chance of spawning Zombies and Angry Zombies at low enough light level. */
  zombies: 'extrabees.effect.spawn_zombie',
  /** Randomly teleports the player a short distance when in range. */
  teleport: 'extrabees.effect.teleport',
  antigravity: 'extrabees.effect.thief',
  /** Fills nearby tanks with water. */
  water: 'extrabees.effect.water',
  wither: 'extrabees.effect.wither',
  /** Causes small amount of damage repeatedly to the player when in range. */
  aggressive: 'forestry.effectAggressive',
  /** Continually applies 1-2 seconds of Regeneration to the player when in range. */
  beatific: 'forestry.effectBeatific',
  /** Causes spontaneous explosions centered at the player. Does not destroy blocks and deals a variable amount of damage, potentially killing in one blast. The effect's damage is not affected by any kind of armor. Not to be confused with the "Creepers" effect. */
  creeper: 'forestry.effectCreeper',
  /** Causes nausea */
  drunkard: 'forestry.effectDrunkard',
  /** Continuously grants player XP when in range. */
  explorer: 'forestry.effectExploration',
  fertile: 'forestry.effectFertile',
  festive: 'forestry.effectFestiveEaster',
  /** Causes water in territory to turn into Ice. */
  freezing: 'forestry.effectGlacial',
  /** Attacks nearby monsters. */
  heroic: 'forestry.effectHeroic',
  /** Sets player permanently aflame when in range. */
  flammable: 'forestry.effectIgnition',
  /** Poisons the player when in range. */
  poison: 'forestry.effectMiasmic',
  /** Causes massive amount of damage to players in range. */
  ends: 'forestry.effectMisanthrope',
  /** Randomly turns nearby grass blocks into mycelium, makes mushrooms giant, and turns cows into mooshrooms. */
  mycophilic: 'forestry.effectMycophilic',
  /** No effect. */
  none: 'forestry.effectNone',
  /** Causes two hearts of damage repeatedly when in range. Much slower than "Unstable" effect. May also destroy blocks. */
  radioactive: 'forestry.effectRadioactive',
  /** Spawns Skeletons, Zombies, or Blazes if their drops are lying around. */
  reanimation: 'forestry.effectReanimation',
  /** Nearby mobs try to move away from the player. */
  repulsion: 'forestry.effectRepulsion',
  /** Spawns Creeper, Endermen, Spiders, Cave Spiders, Ghasts, or Ender Dragons if their drops are lying around. */
  resurrection: 'forestry.effectResurrection',
  /** Snow begins to fall slowly (not spawn snow cover). */
  snow: 'forestry.effectSnowing',
} as const;

/**
 * @see [Flower (Forestry) - Feed The Beest Wiki](https://ftbwiki.org/Flower_(Forestry))
 */
export const FLOWER = {
  books: 'extrabees.flower.book',
  deadBush: 'extrabees.flower.dead',
  fruit: 'extrabees.flower.fruit',
  leaves: 'extrabees.flower.leaves',
  mystical: 'extrabees.flower.mystical',
  redstone: 'extrabees.flower.redstone',
  rocks: 'extrabees.flower.rock',
  saplings: 'extrabees.flower.sapling',
  reeds: 'extrabees.flower.sugar',
  lilyPad: 'extrabees.flower.water',
  wood: 'extrabees.flower.wood',
  cacti: 'forestry.flowersCacti',
  end: 'forestry.flowersEnd',
  gourds: 'forestry.flowersGourd',
  jungle: 'forestry.flowersJungle',
  mushroom: 'forestry.flowersMushrooms',
  nether: 'forestry.flowersNether',
  snow: 'forestry.flowersSnow',
  flowers: 'forestry.flowersVanilla',
  wheat: 'forestry.flowersWheat',
} as const;

/**
 * @see [Fertility - Feed The Beast Wiki](https://ftbwiki.org/Fertility)
 */
export const FERTILITY = {
  /** 1x Drones */
  normal: 'forestry.fertilityNormal',
  /** 2x Drones */
  low: 'forestry.fertilityLow',
  /** 3x Drones */
  high: 'forestry.fertilityHigh',
  /** 4x Drones */
  maximum: 'forestry.fertilityMaximum',
} as const;

/**
 * Determines how fast a flower grows.
 *
 * Every bee tick, there are 10 random chances for a flower to be planted within a bee's {@link TERRITORY territory}. Each chance is calculated as follows:
 *
 * `Chance = Pollination * Housing Modifier`
 *
 * Where housing modifier is:
 * * Bee House (300%)
 * * Apiary (100%)
 * * Alveary (100%)
 * @see [Pollination - Feed The Beast Wiki](https://ftbwiki.org/Pollination)
 */
export const POLLINATION = {
  /** Slowest (5%) */
  slowest: 'forestry.floweringSlowest',
  /** Slower (10%) */
  slower: 'forestry.floweringSlower',
  /** Slow (15%) */
  slow: 'forestry.floweringSlow',
  /** Average (20%) */
  average: 'forestry.floweringAverage',
  /** Fast (25%) */
  fast: 'forestry.floweringFast',
  /** Faster (30%) */
  faster: 'forestry.floweringFaster',
  /** Fastest (35%) */
  fastest: 'forestry.floweringFastest',
  /** Maximum (99%) */
  maximum: 'forestry.floweringMaximum',
} as const;

/**
 * Determines how many cycles (27.5s) Queen will live for.
 *
 * @see [Lifespan - Feed The Beast Wiki](https://ftbwiki.org/Lifespan)
 */
export const LIFESPAN = {
  /** 70 (32:05) */
  elongated: 'forestry.lifespanElongated',
  /** 60 (27:30) */
  long: 'forestry.lifespanLong',
  /** 50 (22:55) */
  longer: 'forestry.lifespanLonger',
  /** 45 (20:37) */
  longest: 'forestry.lifespanLongest',
  /** 40 (18:20) */
  normal: 'forestry.lifespanNormal',
  /** 35 (16:02) */
  short: 'forestry.lifespanShort',
  /** 30 (13:45) */
  shortened: 'forestry.lifespanShortened',
  /** 20 (9:10) */
  shorter: 'forestry.lifespanShorter',
  /** 10 (4:35) */
  shortest: 'forestry.lifespanShortest',
} as const;

/**
 * Chance of bee product
 *
 * `Production = Speed * Housing Modifier * Difficulty`
 *
 * Where Housing Modifier:
 * * Bee House: 25%
 * * Apiary: 10%
 * * Alveary: 100%
 *
 * Where Difficulty:
 * * Easy: 100%
 * * Normal: 100%
 * * Hard: 100%
 * * Hardcore: 80%
 * * Insane: 60%
 *
 * If total housing production exceeds 1600% there a chance of a bee becoming [Ignoble](https://ftbwiki.org/Ignoble_stock)
 *
 * Comb drops are calculated as:
 *
 * `Comb Chance * Production`
 *
 * Where:
 * * Normal drops cap at 200%
 * * Special drops cap at 100%
 *
 * Examples (Assuming "Normal" difficulty):
 *
 * "Slowest"-Speed Diamond Queen in Alveary with 1 Frame, trying for Diamond Combs:
 * * Chance / tick: 1% (1% x 30% x 100% x 100%)
 *
 * "Slowest"-Speed Diamond Queen in Alveary with 4 Frames (max), trying for Diamond Combs:
 * * Chance / tick: 5% (1% x 30% x 100% x 1600%)
 *
 * "Fastest"-Speed Diamond Queen in Alveary with 4 Frames (max), trying for Diamond Combs:
 * * Chance / tick: 27% (1% x 170% x 100% x 1600%)
 *
 * "Fastest"-Speed Imperial Queen in Alveary with 4 Frames (max), trying for Royal Jelly:
 * * Chance / tick: 408% (capped at 100%) (15% x 170% x 100% x 1600%)
 *
 * @see [Speed - Feed The Beast Wiki](https://ftbwiki.org/Speed)
 */
export const SPEED = {
  /** +70% */
  fastest: 'forestry.speedFastest',
  /** +40% */
  faster: 'forestry.speedFaster',
  /** +20% */
  fast: 'forestry.speedFast',
  /** 0% */
  normal: 'forestry.speedNormal',
  /** -20% */
  slow: 'forestry.speedSlow',
  /** -40% */
  slower: 'forestry.speedSlower',
  /** -70% */
  slowest: 'forestry.speedSlowest',
} as const;

/**
 * Area {@link EFFECT `effect`} and {@link POLLINATION `pollination`} affect.
 *
 * @see [Area - Feed The Beast Wiki](https://ftbwiki.org/Area)
 */
export const TERRITORY = {
  /**
   * Effect: `9x6x9`
   *
   * Pollination: `27x18x27`
   */
  average: 'forestry.territoryAverage',
  /**
   * Effect: `11x8x11`
   *
   * Pollination: `33x24x33`
   */
  large: 'forestry.territoryLarge',
  /**
   * Effect: `13x12x13`
   *
   * Pollination: `39x36x39`
   */
  larger: 'forestry.territoryLarger',
  /**
   * Effect: `15x13x15`
   *
   * Pollination: `45x39x45`
   */
  largest: 'forestry.territoryLargest'
} as const;

/**
 * [Climate](https://ftbwiki.org/Climate) / [humidity](https://ftbwiki.org/Humidity) range a bee can live in.
 *
 * @see [Temperature Tolerance - Feed The Beast Wiki](https://ftbwiki.org/Temperature_Tolerance)
 * @see [Humidity Tolerance - Feed The Beast Wiki](https://ftbwiki.org/Humidity_Tolerance)
 */
export const TOLERANCE = {
  /**
   * Temperature: Cold, Normal, Warm
   * Humidity: Dry, Normal, Damp
   */
  both1: 'forestry.toleranceBoth1',
  /**
   * Temperature: Icy, Cold, Normal, Warm, Hot
   * Humidity: Dry, Normal, Damp
   */
  both2: 'forestry.toleranceBoth2',
  /**
   * Temperature: Icy, Cold, Normal, Warm, Hot, Hellish
   * Humidity: Dry, Normal, Damp
   */
  both3: 'forestry.toleranceBoth3',
  /** @deprecated Unused */
  both4: 'forestry.toleranceBoth4',
  /** @deprecated Unused */
  both5: 'forestry.toleranceBoth5',
  /**
   * Temperature: Normal, Cold
   * Humidity: Normal, Damp
  */
  down1: 'forestry.toleranceDown1',
  /**
   * Temperature: Normal, Cold, Icy
   * Humidity: Normal, Damp
   * */
  down2: 'forestry.toleranceDown2',
  /** @deprecated Unusued */
  down3: 'forestry.toleranceDown3',
  /** @deprecated Unusued */
  down4: 'forestry.toleranceDown4',
  /** @deprecated Unusued */
  down5: 'forestry.toleranceDown5',
  /**
   * Temperature: Normal
   * Humidity: Normal
   */
  none: 'forestry.toleranceNon',
  /**
   * Temperature: Normal, Warm
   * Humidity: Normal, Arid
   */
  up1: 'forestry.toleranceUp1',
  /**
   * Temperature: Normal, Warm, Hot
   *
   * Humidity: Normal, Arid
   */
  up2: 'forestry.toleranceUp2',
  /**
   * Temperature: Normal, Warm, Hot, Hellish
   * Humidity: Normal, Arid
   */
  up3: 'forestry.toleranceUp3',
  /** @deprecated Unused */
  up4: 'forestry.toleranceUp4',
  /** @deprected Unused */
  up5: 'forestry.toleranceUp5',
} as const;

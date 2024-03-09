import {
  EFFECT,
  FERTILITY,
  FLOWER,
  FLOWERING,
  LIFESPAN,
  SPECIES,
  SPEED,
  TERRITORY,
  TOLERANCE
} from '../const/allele';
import { HUMIDITY, TEMPERATURE, BIOME } from '../const/bee';

export type Drop = {
  n: number
  id: string
};

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
  flower?: keyof typeof FLOWER
  pollinate?: keyof typeof FLOWERING
  territory?: keyof typeof TERRITORY
  effect?: keyof typeof EFFECT
};

export type Mutation = {
  n: number
  left: keyof typeof SPECIES | string
  right: keyof typeof SPECIES | string
  requirements?: {
    temperature?: keyof typeof TEMPERATURE
    humidity?: keyof typeof HUMIDITY
    biome?: keyof typeof BIOME
    block?: string
  }
};

export type Bee = {
  name: string
  latin: string
  author: string
  description?: string
  color: {
    primary: string
    secondary: string
  }
  drops?: {
    regular?: Drop[]
    special?: Drop[]
  }
  traits: Traits
  mutation: Mutation
  dominant?: boolean
  glowing?: boolean
  secret?: boolean
  nocturnal?: boolean
  humidity?: keyof typeof HUMIDITY
  temperature?: keyof typeof TEMPERATURE
};

export type Branch = {
  name: string
  latin: string
  bees: Bee[]
};

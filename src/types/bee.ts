import {
  EFFECT,
  FERTILITY,
  FLOWER,
  FLOWERING,
  LIFESPAN,
  SPEED,
  TERRITORY,
  TOLERANCE
} from '../const/allele';
import SPECIES from '../const/species';
import { HUMIDITY, TEMPERATURE } from '../const/bee';

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
  flower?: keyof typeof FLOWER | string
  pollinate?: keyof typeof FLOWERING
  territory?: keyof typeof TERRITORY
  effect?: keyof typeof EFFECT
};

export type Mutation = {
  n: number
  left: keyof typeof SPECIES | string
  right: keyof typeof SPECIES | string
  requirement?: string
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
  dominant?: boolean
  glowing?: boolean
  secret?: boolean
  nocturnal?: boolean
  humidity?: keyof typeof HUMIDITY
  temperature?: keyof typeof TEMPERATURE
  drops?: {
    regular?: Drop[]
    special?: Drop[]
  }
  traits: Traits
  mutations: Mutation[]
};

export type Branch = {
  name: string
  latin: string
  bees: Bee[]
};

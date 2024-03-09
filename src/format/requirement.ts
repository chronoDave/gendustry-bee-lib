import { Block } from '../types/stack';
import { BIOME, HUMIDITY, TEMPERATURE } from '../const/bee';

import { formatBlock as formatIngredientBlock } from './ingredient';

const formatRequirement = (type: string) => (x: string) =>
  `Req ${type} ${x}`;

const formatConst = <T extends Record<string, string>>(obj: T) => (type: string) => (x: keyof T) => formatRequirement(type)(obj[x]);

export const formatTemperature = formatConst(TEMPERATURE)('Temperature');
export const formatHumidity = formatConst(HUMIDITY)('Humidity');
export const formatBiome = formatConst(BIOME)('Biome');
export const formatBlock = (block: Block) => formatRequirement('Block')(formatIngredientBlock(block));

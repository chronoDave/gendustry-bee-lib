import type { Ingredient } from './ingredient';

import { formatBlock as formatIngredientBlock } from './ingredient';

const formatRequirement = (type: string) => (x: string) =>
  `Req ${type} ${x.includes(' ') ? `"${x}"` : x}`;

export const formatTemperature = formatRequirement('Temperature');
export const formatHumidity = formatRequirement('Humidity');
export const formatBiome = formatRequirement('Biome');
export const formatBlock = (block: Ingredient) => formatRequirement('Block')(formatIngredientBlock(block));

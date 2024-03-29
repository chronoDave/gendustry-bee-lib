import { formatHex } from '../lib/format';
import { camelCase } from '../lib/string';

export type Item = {
  name: string
  color: {
    primary: string
    secondary: string
  }
};

const formatItem = (type: string) => (id: number) => (item: Item) => ({
  id: `${type.slice(0, -1)}.${camelCase(item.name)}`,
  lang: `gendustry.${type.toLowerCase().slice(0, -1)}.${camelCase(item.name)}.name=${item.name}`,
  cfg: [
    `cfg ${type} {`,
    `\tcfg ${camelCase(item.name)} {`,
    `\t\tID = ${id}`,
    `\t\tPrimaryColor = ${formatHex(item.color.primary)}`,
    `\t\tSecondaryColor = ${formatHex(item.color.secondary)}`,
    '\t}',
    '}'
  ]
});

/** @see [Adding Honey Drops and Combs - BDew](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-honey-drops-and-combs/) */
export const formatHoneyDrop = formatItem('HoneyDrops');

/** @see [Adding Honey Drops and Combs - BDew](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-honey-drops-and-combs/) */
export const formatHoneyComb = formatItem('HoneyCombs');

import { camelCase } from '../lib/string';

export type Branch = {
  name: string
  latin: string
  description?: string
};

/**
 * @param id Mod id
 * @see [Adding Bee Branches - BDew](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-bee-branches/)
 */
export default (id: string) => (branch: Branch) => {
  const uid = `${id}.${camelCase(branch.name)}`;

  return ({
    lang: [
      `for.genus.${uid}=${branch.name}`,
      branch.description && `for.genus.${uid}.description=${branch.description}`
    ]
      .filter(x => x) as string[],
    cfg: [
      'cfg Branches {',
      `\tcfg ${camelCase(branch.name)} {`,
      `\t\tUID = "${uid}"`,
      '\t\tParent = apidae',
      `\t\tScientific = ${branch.latin}`,
      '\t}',
      '}'
    ]
  });
};

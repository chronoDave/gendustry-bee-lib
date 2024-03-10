<div align="center">
  <h1>gendustry-bee-lib</h1>
  <p>TypeScript library for <a href="https://bdew.net/gendustry/configuration/adding-custom-bees/">Gendustry custom bees</a>.</p>
</div>

<div align="center">
  <a href="/LICENSE">
    <img alt="License GPLv3" src="https://img.shields.io/badge/license-GPLv3-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/gendustry-bee-lib">
    <img alt="NPM" src="https://img.shields.io/npm/v/gendustry-bee-lib?label=npm">
  </a>
</div>

## Install

```shell
$ npm i gendustry-bee-lib
```

_Note: This package requires Node >10.12.0 and Minecraft 1.7.10._

## Features

 - Easy to use API, written in **TypeScript**
 - Sensible autofills, **create custom bees with less code**
 - Supports [Forestry](https://www.curseforge.com/minecraft/mc-mods/forestry), [ExtraBees](https://www.curseforge.com/minecraft/mc-mods/binnies-mods) and [Gendustry](https://www.curseforge.com/minecraft/mc-mods/gendustry).

## Getting started

Recreation of [Gendustry's example bees](https://github.com/bdew-minecraft/gendustry/blob/mc1710/example_configs/example_bees.cfg).

```TS
import fs from 'fs';
import {
  formatBranch,
  formatCustom,
  formatFlower,
  formatOreDictionary,
  formatHoneyComb,
  formatHoneyDrop,
  formatRequirementTemperature,
  formatRequirementBiome,
  formatRequirementBlock,
  SPECIES,
  BIOME,
  TEMPERATURE
} from 'gendustry-bee-lib';

/**
 * {
 *  id: string
 *  cfg: string[]
 *  lang: string
 * }
 */
const flower = formatFlower({
  name: 'Gold Blocks',
  dominant: true,
  flowers: [
    formatOreDictionary('blockGold'),
    formatOreDictionary('blockIron')
  ],
  spread: formatOreDictionary('oreGold')
});

/**
 * {
 *  id: string
 *  cfg: string[]
 *  lang: string
 * }
 */
const honeyComb = formatHoneyComb(13337)({
  name: 'Test Comb',
  color: {
    primary: '#ff0000',
    secondary: '#0000ff'
  }
});

/**
 * {
 *  id: string
 *  cfg: string[]
 *  lang: string
 * }
 */
const honeyDrop = formatHoneyDrop(13337)({
  name: 'Test Honey Drop',
  color: {
    primary: '#ff0000',
    secondary: '#0000ff'
  }
});

/**
 * {
 *  cfg: string[],
 *  lang: string[]
 * }
 */
const branch = formatBranch('gendustry')({
  name: 'test',
  latin: 'Testis',
  bees: [{
    name: 'Test',
    author: 'BDEW',
    color: {
      primary: '#FF0000',
      secondary: '#0000FF'
    },
    dominant: true,
    drops: {
      regular: [{
        id: formatCustom(honeyComb.id),
        n: 0.3
      }]
    },
    traits: {
      base: SPECIES.forest,
      nocturnal: true,
      flower: flower.id
    },
    mutations: [{
      n: 0.1,
      left: SPECIES.industrious,
      right: SPECIES.diligent,
      requirement: formatRequirementTemperature('hot')
    }, {
      n: 0.1,
      left: SPECIES.industrious,
      right: SPECIES.common,
      requirement: formatRequirementBiome('nether')
    }, {
      n: 0.1,
      left: SPECIES.industrious,
      right: SPECIES.common,
      requirement: formatRequirementBlock({ id: 'wool', meta: 1 })
    }]
  }];
});
```

## API

 - [`formatBranch`](#formatbranch)
 - [`formatBee`](#formatbee)
 - [`formatMutation`](#formatmutation)
 - [`formatTraits`](#formattraits)
 - [`formatFlower](#formatflower)
 - [`formatRequirementTemperature`](#formatrequirementtemperature)
 - [`formatRequirementHumidity`](#formatrequirementhumidity)
 - [`formatRequirementBiome`](#formatrequirementbiome)
 - [`formatRequirementBlock`](#formatrequirementblock)
 - [`formatBlock`](#formatblock)
 - [`formatItem](#formatitem)
 - [`formatCustom`](#formatcustom)
 - [`formatOreDictionary`](#formatoredictionary)
 - [`formatHoneyComb](#formathoneycomb)
 - [`formatHoneyDrop](#formathoneydrop)

### `formatBranch`

Creates [Bee Branch](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-bee-branches/) and [Bee Species](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-bee-species/).

Also creates [Localization](https://bdew.net/gendustry/configuration/custom-localization-files/) data.

### `formatBee`

Creates [Bee Species](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-bee-species/).

Also creates [Localization](https://bdew.net/gendustry/configuration/custom-localization-files/) data.

### `formatMutation`

Creates [Mutation](https://bdew.net/gendustry/configuration/mutation-recipes/) "recipes".

### `formatTraits`

Creates bee [Traits](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-bee-species/).

### `formatFlower`

Creates [Flower](https://github.com/bdew-minecraft/gendustry/blob/mc1710/example_configs/example_bees.cfg#L69) used in [`formatBee`](#formatbee).

### `formatRequirementTemperature`

Creates temperature requirement used in [`formatMutation`](#formatmutation).

### `formatRequirementHumidity`

Creates humidity requirement used in [`formatMutation`](#formatmutation).

### `formatRequirementBiome`

Creates biome requirement used in [`formatMutation`](#formatmutation).

### `formatRequirementBlock`

Creates block requirement used in [`formatMutation`](#formatmutation).

### `formatBlock`

Formats blocks used in [Drops List](https://bdew.net/bacon/configuration-sections/drops-list/).

### `formatItem`

Formats items used in [Drops List](https://bdew.net/bacon/configuration-sections/drops-list/).

### `formatCustom`

Formats custom items (honeycomb / honeydrop) used in [Drops List](https://bdew.net/bacon/configuration-sections/drops-list/).

### `formatOreDictionary`

Formats ore dictionary items used in [Drops List](https://bdew.net/bacon/configuration-sections/drops-list/).

### `formatHoneyComb`

Creates [Honey Comb](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-honey-drops-and-combs/).

Also creates [Localization](https://bdew.net/gendustry/configuration/custom-localization-files/) data.

### `formatHoneyDrop`

Creates [Honey Drop](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-honey-drops-and-combs/).

Also creates [Localization](https://bdew.net/gendustry/configuration/custom-localization-files/) data.

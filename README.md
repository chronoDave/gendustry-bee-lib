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
  formatRequirementTemperature,
  formatRequirementBiome,
  formatRequirementBlock,
  SPECIES,
  BIOME,
  TEMPERATURE
} from 'gendustry-bee-lib';

const FLOWERS = {
  goldBlock: 'goldBlocks'
} as const;

const flower = formatFlower({
  id: FLOWERS.goldBlock,
  dominant: true,
  flowers: [
    formatOreDictionary('blockGold'),
    formatOreDictionary('blockIron')
  ],
  spread: formatOreDictionary('oreGold')
});

const branch = formatBranch('gendustry')({
  name: 'test',
  latin: 'Testis',
  bees: [{
    name: 'Test',
    latin: 'Test',
    author: 'BDEW',
    color: {
      primary: '#FF0000',
      secondary: '#0000FF'
    },
    dominant: true,
    drops: {
      regular: [{
        id: formatCustom('HoneyComb.test'),
        n: 0.3
      }]
    },
    traits: {
      base: SPECIES.forest,
      nocturnal: true,
      flower: FLOWERS.goldBlock
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

fs.writeFileSync('example_bees.cfg', [
  branch.join('\n'),
  flower.join('\n)
].join('\n));
```

## API

 - [`formatBranch`](#formatbranch)
 - [`formatBee`](#formatbee)
 - [`formatMutation`](#formatmutation)
 - [`formatRequirementTemperature`](#formatrequirementtemperature)
 - [`formatRequirementHumidity`](#formatrequirementhumidity)
 - [`formatRequirementBiome`](#formatrequirementbiome)
 - [`formatRequirementBlock`](#formatrequirementblock)
 - [`formatTraits`](#formattraits)
 - [`formatDrop`](#formatdrop)
 - [`formatBlock`](#formatblock)
 - [`formatItem](#formatitem)
 - [`formatCustom`](#formatcustom)

### `formatBranch`

Creates [Bee Branch](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-bee-branches/) and [Bee Species](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-bee-species/).

Also creates [Localization](https://bdew.net/gendustry/configuration/custom-localization-files/) data.

### `formatBee`

Creates [Bee Species](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-bee-species/).

Also creates [Localization](https://bdew.net/gendustry/configuration/custom-localization-files/) data.

### `formatMutation`

Creates [Mutation](https://bdew.net/gendustry/configuration/mutation-recipes/) "recipes".

### `formatRequirementTemperature`

Creates temperature requirement used in [`formatMutation`](#formatmutation).

### `formatRequirementHumidity`

Creates humidity requirement used in [`formatMutation`](#formatmutation).

### `formatRequirementBiome`

Creates biome requirement used in [`formatMutation`](#formatmutation).

### `formatRequirementBlock`

Creates block requirement used in [`formatMutation`](#formatmutation).

### `formatTraits`

Creates bee [Traits](https://bdew.net/gendustry/configuration/adding-custom-bees/adding-bee-species/).

### `formatDrop`

Formats drops used in [Drops List](https://bdew.net/bacon/configuration-sections/drops-list/).

### `formatBlock`

Formats blocks used in [`formatDrop`](#formatdrop).

### `formatItem`

Formats items used in [`formatDrop`](#formatdrop).

### `formatCustom`

Formats custom items (combs / honeydrops) used in [`formatDrop`](#formatdrop).

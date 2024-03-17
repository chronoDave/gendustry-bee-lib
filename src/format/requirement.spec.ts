import test from 'tape';

import BIOME from '../const/biome';
import TEMPERATURE from '../const/temperature';
import HUMIDITY from '../const/humidity';

import {
  formatTemperature,
  formatHumidity,
  formatBiome,
  formatBlock
} from './requirement';

test('[formatTemperature] formats temperature', t => {
  t.equal(
    formatTemperature(TEMPERATURE.icy),
    'Req Temperature Icy',
    'formats temperature'
  );

  t.end();
});

test('[formatHumidity] formats humidity', t => {
  t.equal(
    formatHumidity(HUMIDITY.damp),
    'Req Humidity Damp',
    'formats humidity'
  );

  t.end();
});

test('[formatBiome] formats biome', t => {
  t.equal(
    formatBiome(BIOME.coldBeach),
    'Req Biome "Cold Beach"',
    'formats biome'
  );

  t.end();
});

test('[formatBlock] formats block', t => {
  t.equal(
    formatBlock({ id: 'wool', meta: '1' }),
    'Req Block B:wool@1',
    'formats block'
  );

  t.end();
});

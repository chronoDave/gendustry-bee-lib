import test from 'tape';

import {
  formatTemperature,
  formatHumidity,
  formatBiome,
  formatBlock
} from './requirement';

test('[formatTemperature] formats temperature', t => {
  t.equal(
    formatTemperature('icy'),
    'Req Temperature Icy',
    'formats temperature'
  );

  t.end();
});

test('[formatHumidity] formats humidity', t => {
  t.equal(
    formatHumidity('damp'),
    'Req Humidity Damp',
    'formats humidity'
  );

  t.end();
});

test('[formatBiome] formats biome', t => {
  t.equal(
    formatBiome('nether'),
    'Req Biome Hell',
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

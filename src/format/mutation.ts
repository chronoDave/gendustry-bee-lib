import { BIOME, HUMIDITY, TEMPERATURE } from '../const/bee';
import { clamp } from '../lib/math';
import { Mutation } from '../types/bee';

const formatMutation = (id: string) => (mutation: Mutation) => [
  'mutation:',
  `${Math.round(clamp(0, 1, mutation.n) * 100)}%`,
  `"${mutation.left}"`,
  '+',
  `"${mutation.right}"`,
  '=>',
  `"${id}"`,
];

export default (id: string) => (mutation: Mutation): string[][] => {
  if (!mutation.requirements) return [formatMutation(id)(mutation)];

  const requirements = [];
  if (mutation.requirements.temperature) {
    const temperature = TEMPERATURE[mutation.requirements.temperature];
    requirements.push(`Temperature ${temperature}`);
  }
  if (mutation.requirements.block) {
    requirements.push(`Block ${mutation.requirements.block}`);
  }
  if (mutation.requirements.biome) {
    const biome = BIOME[mutation.requirements.biome];
    requirements.push(`Biome ${biome}`);
  }
  if (mutation.requirements.humidity) {
    const humidity = HUMIDITY[mutation.requirements.humidity];
    requirements.push(`Humidity ${humidity}`);
  }

  return requirements.map(requirement => [
    ...formatMutation(id)(mutation),
    `Req ${requirement}`
  ]);
};

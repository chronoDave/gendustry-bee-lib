import test from 'tape';

import formatBranch from './branch';

test('[branch] formats branch', t => {
  const branch = formatBranch('branch')({
    latin: 'Latin',
    name: 'Name',
    bees: []
  });

  t.true(
    branch.cfg[1].includes('name'),
    'lowercases name'
  );
  t.true(
    branch.cfg[2].includes('branch.name'),
    'merges id and name'
  );

  t.end();
});

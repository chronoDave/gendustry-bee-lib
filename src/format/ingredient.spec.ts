import test from 'tape';

import { formatBlock, formatItem, formatCustom } from './ingredient';

test('[formatBlock] formats block', t => {
  t.equal(
    formatBlock({ id: 'id' }),
    'B:id',
    'formats block'
  );
  t.equal(
    formatBlock({ id: 'id', mod: 'mod' }),
    'B:mod:id',
    'formats block with mod'
  );
  t.equal(
    formatBlock({ id: 'id', meta: 'meta' }),
    'B:id@meta',
    'formats block with meta'
  );
  t.equal(
    formatBlock({ id: 'id', mod: 'mod', meta: 'meta' }),
    'B:mod:id@meta',
    'formats block with mod and meta'
  );

  t.end();
});

test('[formatItem] formats item', t => {
  t.equal(
    formatItem({ id: 'id' }),
    'I:id',
    'formats item'
  );
  t.equal(
    formatItem({ id: 'id', mod: 'mod' }),
    'I:mod:id',
    'formats item with mod'
  );
  t.equal(
    formatItem({ id: 'id', meta: 'meta' }),
    'I:id@meta',
    'formats item with meta'
  );
  t.equal(
    formatItem({ id: 'id', mod: 'mod', meta: 'meta' }),
    'I:mod:id@meta',
    'formats item with mod and meta'
  );

  t.end();
});

test('[formatCustom] formats custom', t => {
  t.equal(
    formatCustom('custom'),
    'S:gendustry:"custom"',
    'formats custom'
  );

  t.end();
});

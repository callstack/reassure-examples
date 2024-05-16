import * as React from 'react';
import { jest, test } from '@jest/globals';
import { measureRenders } from 'reassure';
import { SlowList } from './SlowList';

jest.setTimeout(60_000);

test('RN CLI - SlowList 100 items', async () => {
  await measureRenders(<SlowList count={100} />, { runs: 10 });
});

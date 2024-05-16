// @ts-expect-error Needed for Jest testing
import * as React from 'react';
import { measureRenders } from 'reassure';
import { SlowList } from './SlowList';

jest.setTimeout(60_000);

test('Web Vite - SlowList 100 items', async () => {
  await measureRenders(<SlowList count={100} />, { runs: 10 });
});

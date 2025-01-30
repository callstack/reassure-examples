// @ts-expect-error Needed for Jest testing
import * as React from 'react';
import { measureRenders } from 'reassure';
import { TestList } from './TestList';

jest.setTimeout(60_000);

test('Web Vite - TestList (100 items)', async () => {
  await measureRenders(<TestList count={100} />, { runs: 10 });
});

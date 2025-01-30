import * as React from 'react';
import { jest, test } from '@jest/globals';
import { measureRenders } from 'reassure';
import { TestList } from './TestList';

jest.setTimeout(60_000);

test('React Native - Expo - TestList (100 items)', async () => {
  await measureRenders(<TestList count={100} />, { runs: 10 });
});

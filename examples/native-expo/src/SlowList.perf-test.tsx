import * as React from 'react';
import { measureRenders } from 'reassure';
import { SlowList } from './SlowList';

jest.setTimeout(60_000);

test('SlowList Component', async () => {
  await measureRenders(<SlowList count={500} />);
});

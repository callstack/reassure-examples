import { measureRenders } from 'reassure';
import { TestList } from './TestList';

jest.setTimeout(60_000);

test('Web Next.js - TestList (100 items)', async () => {
  await measureRenders(<TestList count={100} />, { runs: 10 });
});

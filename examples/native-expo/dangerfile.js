/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { fileURLToPath } from 'url';
import { dangerReassure } from 'reassure';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dangerReassure({
  inputFilePath: path.join(__dirname, './.reassure/output.md'),
});

/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { fileURLToPath } from "url";
import { dangerReassure } from 'reassure';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dangerReassure({
  inputFilePath: path.join(__dirname, './.reassure/output.md'),
});

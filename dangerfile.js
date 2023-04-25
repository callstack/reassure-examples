/* eslint-disable import/no-extraneous-dependencies */
const path = require('node:path');
const { dangerReassure } = require('@callstack/reassure-danger');

dangerReassure({
  inputFilePath: path.join(__dirname, './examples/native/.reassure/output.md'),
  inputFilePath: path.join(__dirname, './examples/web-vite/.reassure/output.md'),
  inputFilePath: path.join(__dirname, './examples/web-nextjs/.reassure/output.md'),
  inputFilePath: path.join(__dirname, './examples/native-expo/.reassure/output.md'),
});

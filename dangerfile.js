const path = require('node:path');
const { dangerReassure } = require('reassure');

dangerReassure({
  inputFilePath: path.join(__dirname, './examples/native/.reassure/output.md'),
});

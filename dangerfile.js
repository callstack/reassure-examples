const path = require('node:path');
const { dangerReassure } = require('@callstack/reassure-danger');

dangerReassure({
  inputFilePath: path.join(__dirname, './examples/native/.reassure/output.md'),
});

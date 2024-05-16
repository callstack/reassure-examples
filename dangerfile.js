const path = require('node:path');
const { dangerReassure } = require('@callstack/reassure-danger');

dangerReassure({
  inputFilePath: path.join(__dirname, './examples/native/.reassure/output.md'),
});

dangerReassure({
  inputFilePath: path.join(__dirname, './examples/native-expo/.reassure/output.md'),
});

dangerReassure({
  inputFilePath: path.join(__dirname, './examples/web-vite/.reassure/output.md'),
});

dangerReassure({
  inputFilePath: path.join(__dirname, './examples/web-nextjs/.reassure/output.md'),
});

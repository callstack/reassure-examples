# Reassure React Native CLI Example

This example showcases Reassure setup for React Native CLI app.

## Setup steps

1. Install following deps as `devDependencies` to setup basic Jest + React Native Testing Library setup:
   * `@testing-library/react-native`
2. Copy `jest.config.js` & `babel.config.js` from this repo for RNTL tests to run
3. Install `reassure` and `danger` as `devDependencies`
4. Run `yarn reassure init` to:
   * generate `reassure-tests.sh` CI script 
   * generate `dangerfile.js` config for `danger`
   * add `.reasure` entry to `.gitignore`
5. (optional) Add `configure({ testingLibrary: 'react-native' });` to your `jest-setup.js` file
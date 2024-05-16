# Reassure React Native Expo Example

This example showcases Reassure setup for React Native Expo app.

## Setup steps

1. Install `@testing-library/react-native` as `devDependencies` to setup basic React Native Testing Library setup. All other required deps should be already in the template setup.
2. Copy `jest.config.js` from this repo for RNTL tests to run
3. Install `reassure` and `danger` as `devDependencies`
4. Run `yarn reassure init` to:
   * generate `reassure-tests.sh` CI script 
   * generate `dangerfile.js` config for `danger`
   * add `.reasure` entry to `.gitignore`
5. (optional) Add `configure({ testingLibrary: 'react-native' });` to your `jest-setup.js` file
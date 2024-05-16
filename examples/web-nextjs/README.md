# Reassure Next.js Example

This example showcases Reassure setup for Next.js web app.

## Setup steps

1. Install following deps as `devDependencies` to setup basic Jest + React Testing Library setup:
   * `jest`
   * `jest-environment-jsdom`
   * `@types/jest`
   * `@testing-library/react`
   * `@babel/preset-env`
   * `@babel/preset-react`
   * `@babel/preset-typescript`   
2. Copy `jest.config.js` & `babel.config.js` from this repo for RTL tests to run
3. Install `reassure` and `danger` as `devDependencies`
4. Run `yarn reassure init` to:
   * generate `reassure-tests.sh` CI script 
   * generate `dangerfile.js` config for `danger`
   * add `.reasure` entry to `.gitignore`
5. (optional) Add `configure({ testingLibrary: 'react' });` to your `jest-setup.js` file
# Reassure Next.js Example

This example showcases Reassure setup for Next.js web app.

## Setup steps

1. Install following deps as `devDependencies` to setup basic Jest + React Testing Library setup:
   * `jest`
   * `jest-environment-jsdom`
   * `@testing-library/react`
   * `@testing-library/dom`
   * `@testing-library/jest-dom`
   * `ts-node`
   * `@types/jest`
   * `@babel/preset-env`
   * `@babel/preset-react`
   * `@babel/preset-typescript`
2. Copy `jest.config.ts` from this repo for RTL tests to run
3. Install `reassure` and `danger` as `devDependencies`
4. Run `yarn reassure init` to:
   * generate `reassure-tests.sh` CI script 
   * generate `dangerfile.js` config for `danger`
   * add `.reassure` entry to `.gitignore`
5. (optional) Add `configure({ testingLibrary: 'react' });` to your `jest.setup.ts` file

# Testing

Jest is the unit test runner across examples.

Testing libraries differ by platform:

- React web examples use React Testing Library.
- React Native examples use React Native Testing Library.

Use these naming patterns:

- `*.test.tsx` for unit and behavior tests.
- `*.perf.tsx` for Reassure performance tests.

Add or update unit tests for behavior changes. Add or update performance tests when changing measured rendering paths. When touching measured components, run both:

```sh
yarn test
yarn perf-test
```

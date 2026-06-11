# Commands

Install dependencies from the target example directory:

```sh
cd examples/web-vite
yarn install
```

Common scripts vary by example:

- `yarn test`: run Jest tests.
- `yarn perf-test`: run Reassure performance tests where configured.
- `yarn typecheck`: run TypeScript checks where configured.
- `yarn lint`: run ESLint in examples that define it.
- `yarn dev`: start Vite or Next.js development servers.
- `yarn preview`: preview the Vite production build.
- `yarn build`: build web examples that define a build script.
- `yarn start`: start Expo, React Native Metro, or Next.js production server depending on the example.
- `yarn ios`, `yarn android`, `yarn web`: run Expo or React Native examples on the selected platform.

Validate only the relevant example unless the change intentionally affects multiple examples.

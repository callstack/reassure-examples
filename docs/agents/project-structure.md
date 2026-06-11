# Project Structure

The root `package.json` defines workspace metadata only. Make application changes in the relevant example directory.

- `examples/native-cli`: React Native CLI app with Android and iOS native projects.
- `examples/native-expo`: Expo React Native app.
- `examples/web-vite`: React web app built with Vite.
- `examples/web-nextjs`: React web app built with Next.js.

Example source files are usually in `src/`, except app entry files such as `App.tsx`, `index.js`, and Next.js `src/app/*`.

Static assets live in each app's `public/`, `src/assets/`, or native asset folders.

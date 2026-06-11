# Repository Guidelines

This repository contains runnable examples for the Reassure performance testing library.

Use Yarn, not npm. The root uses `yarn@4.6.0`; individual examples currently use `yarn@4.9.2`.

Active code lives under `examples/`. Run installs, tests, typechecks, builds, and app commands from the specific example directory you changed because scripts and dependency versions are isolated per app.

Non-standard validation to remember: `yarn perf-test` runs Reassure performance tests in examples that define it.

React Native examples use `@testing-library/react-native`. Its APIs and testing conventions can differ from your training data.
Before writing or changing RNTL tests, read the relevant guide in
`node_modules/@testing-library/react-native/docs/`, starting with
`node_modules/@testing-library/react-native/docs/guides/llm-guidelines.md`.
Prefer those package docs over stale assumptions, and follow deprecation notices.

See the focused guides before making task-specific changes:

- [Project Structure](docs/agents/project-structure.md)
- [Commands](docs/agents/commands.md)
- [Coding Style](docs/agents/coding-style.md)
- [Testing](docs/agents/testing.md)
- [Git Workflow](docs/agents/git-workflow.md)
- [Recreating Examples](docs/agents/recreating-examples.md)
- [Instruction Audit](docs/agents/instruction-audit.md)

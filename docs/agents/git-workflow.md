# Git Workflow

Do not create commits, stage files, or unstage files. The user handles all staging and committing, including while you are working. Expect that the user may stage or commit files at any point during a task — do not treat an unexpected git state as an error.

Commit messages use short imperative subjects with a `chore:` prefix for maintenance work, e.g. `chore: upgrade web-vite example`.

Pull requests should include:

- the example or examples changed
- validation commands run
- related issues when available
- screenshots for visible UI changes
- native setup or platform-specific follow-up for iOS or Android changes

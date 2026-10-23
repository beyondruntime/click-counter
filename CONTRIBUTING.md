# Contributing

Thanks for your interest in contributing to the Click Counter project. Whether you're fixing a bug, improving the interface, or adding a small enhancement, we appreciate your help.

This project is intentionally small and beginner-friendly, so we welcome thoughtful contributions from new and experienced developers alike.

## Code of Conduct

This project is governed by our [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## Ways to Contribute

You can contribute by:

- Reporting bugs or usability issues
- Suggesting feature ideas
- Improving documentation
- Fixing frontend behavior or styling
- Refactoring code to make it cleaner or more maintainable
- Adding tests or validation steps for the app

## Before You Start

1. Check whether an issue already exists for the change you want to propose.
2. If no issue exists, open one with a clear description and motivation.
3. Keep the scope focused and avoid unrelated changes.
4. If you are unsure whether a change fits the project, open a discussion first.

## Local Development Setup

This project is a simple static web app. You can run it using a browser directly or via a local Python HTTP server.

### Option 1: Open directly

Open `index.html` in a browser.

### Option 2: Run a local web server

From the project root:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Project Structure

```text
click-counter/
├── README.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── .gitignore
```

## Contribution Workflow

1. Fork the repository and create your branch.
2. Make a focused change.
3. Validate the change locally in a browser.
4. Commit your changes with a clear message.
5. Open a pull request describing what changed and why.

Example branch naming:

```bash
git checkout -b fix-counter-reset
git checkout -b feature-dark-mode
```

## Commit Messages

Use clear, descriptive commit messages.

Good examples:

```bash
git commit -m "Fix counter reset logic"
git commit -m "Improve button styling for accessibility"
git commit -m "Add project documentation"
```

## Pull Request Guidelines

Before submitting a pull request:

- Ensure the app still works as expected in a browser
- Keep the change scoped and easy to review
- Include a summary of the update and the problem it addresses
- Mention any screenshots or visual changes, if relevant
- Reference related issues when applicable

A good PR description usually includes:

- What changed
- Why the change was needed
- How it was validated

## Styling and Code Quality

This project is intentionally lightweight, but we still value readable and maintainable code.

Please try to:

- Use clear variable names
- Keep functions and logic easy to understand
- Avoid unnecessary complexity
- Preserve the simple static nature of the application
- Follow existing project conventions unless a change clearly improves them

## Testing

This repository does not currently include automated tests. Validation should be done by launching the app in a browser and confirming behavior manually.

Recommended checks:

- Initial counter value appears as `0`
- Clicking the button increments the count
- The displayed count updates correctly after each click
- The page remains readable and visually consistent

## Reporting Issues

When submitting an issue, include:

- A concise title
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser name/version, if relevant
- Screenshots or examples, if helpful

## Feature Requests

Feature requests are welcome, but please keep them practical and aligned with the project's goals. This project is a small click counter, so new features should be lightweight and user-focused.

## Licensing

By contributing to this project, you agree that your contributions will be licensed under the project's [LICENSE](./LICENSE).

## Questions?

If you are unsure about anything, open an issue or start a discussion. We are happy to help.

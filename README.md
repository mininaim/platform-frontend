# Platform Frontend

Frontend for the app, built with Next.js, TypeScript, and Tailwind CSS .. and more.

## Tech Stack (to be updated)

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS, class-variance-authority, tailwind-merge
- **State Management**: Zustand
- **Testing**: Playwright
- **Icons & UI**: Lucide React, clsx
- **Linting**: ESLint, Prettier
- **Security**: Content Security Policy, HTTP security headers
- **Tools**: Bundle Analyzer, Conventional Changelog
- **Git Hooks**: Husky, lint-staged

## Getting Started

### Requirements

- Node.js 18.17.0 or later
- pnpm 8.0.0 or later

### Installation

1. clone the repository:

```bash
git clone <https://github.com/Thmanyah-LLC/platform-frontend>
cd platform-frontend
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands

| Command            | description                    |
| ------------------ | ------------------------------ |
| `pnpm dev`         | start the development server   |
| `pnpm build`       | build for production           |
| `pnpm start`       | run the production server      |
| `pnpm lint`        | check code with eslint         |
| `pnpm format`      | format code with prettier      |
| `pnpm typecheck`   | check types with typescript    |
| `pnpm test`        | run playwright tests           |
| `pnpm test:ui`     | run tests in playwright ui     |
| `pnpm test:headed` | run tests with browser visible |
| `pnpm analyze`     | analyze bundle size            |
| `pnpm changelog`   | update changelog from commits  |

## Workflow

1. create a branch for your feature or fix
2. use conventional commit messages
3. run tests and lint before committing
4. open a pull request
5. update `changelog.md` before releases

## Contributing

see [contributing.md](contributing.md) for details on:

- commit message guidelines
- pull request steps
- code style
- testing

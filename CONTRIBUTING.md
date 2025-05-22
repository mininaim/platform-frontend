# Contributing Guide

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) for our commit messages. This allows us to automatically generate our CHANGELOG.md file.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

#### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

#### Scope

The scope should be the name of the module affected (folder name or other meaningful name).

#### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Examples

```
feat(auth): add login page
```

```
fix(nav): resolve mobile menu display issue
```

```
chore(deps): update dependency versions
```

## Generating CHANGELOG

The CHANGELOG.md file is automatically generated based on commit messages. To update it:

```bash
# For incremental updates (after new commits)
pnpm changelog

# To regenerate the entire changelog
pnpm changelog:first
```

The CHANGELOG should be updated before creating a new release or version.

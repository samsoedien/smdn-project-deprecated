# Contributing

## Develop

- Clone the repo use `git clone git@github.com:samsoedien/smdn-project.git`
- (optional) Enter prassphrase when prompted
- run `yarn install` to install all dependencies and create node_modules folder
- run `yarn build` to create dist folder that can be cross-referenced by each package in the monorepo
- run `yarn start` to start a server to compile the code.

## Commit

Before committing run a linting check using `yarn lint` to see if there are any formatting or code style issues. Linting error should atleast be solved in order to perform a successful commit, otherwise the commit will be refused (through the use of git hooks).

When committing new changes write your commit message according to Angular commit convention: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

For example:

> git commit -m"chore(package): update dependency to version 2.0.0"

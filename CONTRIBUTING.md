# Contributing

The required coding standards represent the best practices for enabling a consistent code style across the team. As the way we work evolves over time, our coding standards likewise need to evolve.

## Rule Changes

For changing or adding rules please start a new issue and/or submit a pull request for discussion.

## Releasing

All notable changes to this project must be documented in the [CHANGELOG.md](CHANGELOG.md) file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The project consists of one PHP package (published on [packagist.org](https://packagist.org/users/wearerequired/)) and two JavaScript packages (published on [npmjs.com](https://www.npmjs.com/org/wearerequired)). All packages must be published with the same version.  
For dependent package management this project uses [Lerna](https://lerna.js.org/).

### Releasing Packages

If you haven't yet, run `npm install`.

Lerna automatically releases all outdated packages. To check which packages are outdated and will be released, type `npm run publish:check`.

If you have the ability to publish packages, you must have [2FA enabled](https://docs.npmjs.com/about-two-factor-authentication). Confirm that you're logged in to npm, by running `npm whoami`. If you're not logged in, run `npm adduser` to login.

#### Development Release

Run the following command to release a dev version of the outdated packages.

```shell
npm run publish:dev
```

Lerna will ask you which version number you want to choose for all packages. For a `dev` release, you'll more likely want to choose the "prerelease" option.

Lerna will then publish to npm, commit the `package.json` changes and create the git tags.

**Note**: If Lerna doesn't detect any changes since only the PHP package was updated use `--force-publish`.

```shell
npm run publish:dev -- --force-publish
```

#### Production Release

To release a production version for the outdated packages, run the following command:

```shell
npm run publish:prod
```

Choose the correct version based on the [CHANGELOG.md](CHANGELOG.md) file, confirm your choices and let Lerna do its magic.

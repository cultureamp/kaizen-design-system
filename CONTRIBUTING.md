# Contributing

Kaizen Design System follows a federated, open-source model. All teams contribute Issues and Pull Requests to grow Kaizen together.

### Quality and reviews

Every component needs:

- A design review from a designer
- Basic level of unit tests
- Communications: share your new component or changes at practice meetings and on Slack

To update a component:

- Ask for a review from design systems advocates, Design Systems Team, or someone in your team
- Notify the front-end engineering practice of any possible breaking changes
- Notify the QA practice of any possible breaking changes

### Browser and device support

To learn more about what browsers and devices we support in Kaizen Component Library, Culture Amp employees can see [the Browser Support wiki page](https://cultureamp.atlassian.net/wiki/spaces/Prod/pages/1572948/Browser+Support+and+Stats).

### Local development with other front-end codebases

To strengthen the Kaizen Design System, we encourage engineers to take a component-first development approach. By concentrating on developing Kaizen components in Storybook, we are likely to improve the API design and achieve good separation of concerns, avoiding components tightly coupled to specific applications. If, however, you want to test a component in the context of another front-end codebase, you can [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/) your local version of `@cultureamp/kaizen-component-library` with your other front-end codebase.

**Step 1**: Make your local copy of `@cultureamp/kaizen-component-library` available.

```sh
# Navigate to code source
$ cd ./packages/component-library

# Register package for linking
$ yarn link

# Build in watch mode
$ yarn build:watch
```

**Step 2**: Link `@cultureamp/kaizen-component-library` to your other front-end codebase.

```sh
# Navigate to code source
$ cd <your_code>/cultureamp/YOUR_FRONT_END_CODEBASE

# Link repo to locally registered package
$ yarn link @cultureamp/kaizen-component-library
```

Your local Kaizen changes will now show in your other front-end codebase.

**Step 3**: Unlink

When you are done, unlink the package:

`yarn unlink @cultureamp/kaizen-component-library`

You can also clean up generated files:

`yarn clean`


## Pull Requests, versioning and releasing

To deploy Kaizen Component Library changes, your **Pull Request (PR) title must follow the [Conventional Commits format](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)** and “Semantic Versioning” (SemVer):

> Given a version number MAJOR.MINOR.PATCH, increment the:
    MAJOR version when you make incompatible API changes,
    MINOR version when you add functionality in a backwards compatible manner, and
    PATCH version when you make backwards compatible bug fixes.

— <https://semver.org/>

If you make any breaking changes, include "BREAKING CHANGE" in the commit message. For example: **BREAKING CHANGE: removed feature from component X**.

For example, a PR title of `feat: change API for X component` with a squashed commit that contains BREAKING CHANGE will create a **major** release, bumping the version from 16.2.1 to 17.0.0.

For another example, a PR title of `feat: add a new Toggle component` will create a **minor** release, bumping the version from 16.0.0 to 16.1.0.

Finally, a PR title of `fix: fix the focus styling on our button component` will create a **patch** release, bumping the version from 16.0.0 to 16.0.1.

## Using your newly released component changes

To see your deployed Kaizen Component Library changes in your front-end codebase, you'll need to bump the version of the Kaizen package used. You might edit the `package.json` file to change the package version or run `yarn upgrade --latest @cultureamp/kaizen-component-library`.

## Contributing components

To learn more about contributing components, see the [Kaizen Site: components overview](https://cultureamp.design/components/overview).


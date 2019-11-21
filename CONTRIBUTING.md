# Contributing

Kaizen Design System follows a federated, open-source model. All teams contribute Issues and Pull Requests to grow Kaizen together.

### Quality and reviews

Every component needs:

- A design review from a designer
- Basic level of unit tests
- Communications: share your new component or changes at practice meetings and on Slack

To update a component:

- Ask for a review from a design systems advocate (an "advocado"), Design Systems Team, or someone in your team who is experienced with Kaizen*
- Notify the front-end engineering practice (#pract_front_end_eng) of any possible breaking changes
- Notify the QA practice of any possible breaking changes

\* **If you're new to Kaizen, please ask the Design Systems Team (#team_design_systems) to set up an onboarding session to get you up to speed.** If you have an urgent PR to merge before that happens, it is safest to ask Design Systems Team to review it to catch any issues.

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

## Releasing packages

Automated releases to the npm public registry are triggered for all pull requests containing modifications to one or more npm packages (found in the `/packages/` directory). The information required to determine the version update for each release is taken from the title and content of the pull request.

### Release workflow

To release a new version of a package, create a pull request which...

- Modifies only the package(s) you wish to release ([see below](#updating-multiple-packages))
- Has a conventional pull request title ([see below](#conventional-commit))
- If there is only one commit, it has a commit message which matches the pull request title

Once that pull request is merged into master, an automated release will be triggered, and the newly published package version will be available on the npm public registry.

### Semantic Versioning

All npm packages follow strict semantic versioning (or _semver_). Semantic versioning gives specific meaning to changes in version numbers, as follows:

> Given a version number `MAJOR.MINOR.PATCH`, increment the:
>
> - `MAJOR` version when you make incompatible API changes,
> - `MINOR` version when you add functionality in a backwards compatible manner, and
> - `PATCH` version when you make backwards compatible bug fixes.

— <https://semver.org/>

**Note that we do not update package version numbers directly**, but instead depend on a [Conventional Commit](#conventional-commit) workflow which will version and release packages according to the content of our pull requests.

### Conventional Commit

Our pull requests need to be structured in a certain way for the CI pipeline to correctly update version numbers when releasing packages. By following the [release workflow outlined above](#release-workflow), our pull requests will result in a Conventional Commit to the master branch when merged (see the [Conventional Commit 1.0.0 spec](https://www.conventionalcommits.org/en/v1.0.0/)).

This workflow requires that all pull requests have a title formatted as follows:

```
<type>: <description>
```

#### Description

The `description` should be a short (less than ~60 characters) summary of changes introduced in the release. This summary will be included in the CHANGELOG (see the [releases page](https://github.com/cultureamp/kaizen-design-system/releases)), along with the commit type, a link to the pull request which triggered the release, and a detailed summary of any breaking changes.

Note that since the `description` will be included in the CHANGELOG — and may be the only summary of the changes that your colleagues will encounter — it is helpful for you to include a concise summary of _how the package is different_ following the release, written in the [imperative mood](https://chris.beams.io/posts/git-commit/#imperative). For example `fix: Address accessibility bug in the Gizmo component`.

#### Type

The commit `type` is used to indicate the type of update (i.e. PATCH or MINOR in [Semantic Versioning](#semantic-versioning)) that was included in the release, as well as the context in which that update was made. There are a number of valid commit types (e.g. `style`, `build`, `refactor`, `test` etc.) — for a detailed list of commit types used in this repository, refer to the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type) docs.

Most commit types describe changes which do not modify the behaviour of the published package, and will result in a PATCH version update, along with an entry in the CHANGELOG noting that the package implementation has not changed. For example:
  
- `docs` — indicates that documentation has been updated, e.g. editing a README that corresponds to a component's documentation on the Kaizen Site
  
- `chore` — indicates that some otherwise-unspecified work has been performed on the package with no consequence on the published code, e.g. updating package metadata in `package.json`

However, **two commit types have special meaning** for the purpose of versioning package releases, and signify changes in the behaviour or implementation of published code which may affect consumers of the package. These are:

- `fix` — indicates that a change addressed a bug or security concern in the published code, but otherwise had no consequence for the released package's features or API (corresponding to a PATCH version)

- `feat` — indicates that a change added something new to the released package's API or features without affecting existing functionality (corresponding to a MINOR version)

#### Breaking changes

In addition to `feat` and `fix` releases, if a pull request includes changes which modify existing behaviour or APIs in a way that is **not backwards compatible**, that change needs to be marked with a `BREAKING CHANGE: <description>` line (including a description [as above](#description)) somewhere in the commit body of the merged commit to master. Doing so will trigger a MAJOR version update in the corresponding release, irrespective of the commit type.

Since we are using a squash-and-merge strategy for our pull requests, we recommend that you introduce breaking changes in their own commits, each with a commit summary in the format `BREAKING CHANGE: <description>`, with any additional notes in the commit body.

> **Note:** Pull requests for branches containing a single commit are a special case, and should contain a commit with a conventional commit message (and a matching pull request title), with any `BREAKING CHANGE` annotations included in the commit body. To avoid this edge case, you can push an additional commit to your branch!

For example, a pull request might have the title `feat: Add color option to Gizmo component`, and include the following commit in the branch for the pull request (including additional detail in the commit body):

```
BREAKING CHANGE: Add a compulsory color option to the Gizmo API

There is no default color for Gizmos, so one needs to be provided.
```

As well as triggering a major version update, this will make breaking changes clearly visible from the pull request summary in GitHub, and provide detailed information in the CHANGELOG (including any additional notes from the body of the BREAKING CHANGE commit), clearly documenting all breaking changes to our published APIs.

#### Updating multiple packages

Note that in the case that a pull request touches files from more than one package, all of those packages will be released to the npm registry with the specified update. Sometimes this might be desirable (e.g. when performing a bulk update to package docs), but in general, **be on the lookout for pull requests which touch more than one package**, and break those changes up into separate pull requests!

## Using new package releases

To use a newly released version of the Kaizen Component Library (or any other package) in a front-end codebase, run `yarn upgrade --latest <scoped package name>` (e.g. `yarn upgrade --latest @cultureamp/kaizen-component-library`).

Remember to always check the CHANGELOG (e.g. [`/packages/component-library/CHANGELOG.md`](./packages/component-library/CHANGELOG.md) or the [releases page](https://github.com/cultureamp/kaizen-design-system/releases)) for any package you wish to upgrade, paying extra attention to any breaking changes which have been introduced since the last version used in your project.

## Contributing components

To learn more about contributing components, see the [Kaizen Site: components overview](https://cultureamp.design/components/overview).

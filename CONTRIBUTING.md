# Contributing

Kaizen Design System follows a federated, open-source model. All teams contribute Issues and Pull Requests (PRs) to grow Kaizen together.

## Designers

### Issues

An issue is a way to track ideas, enhancements and bugs.

Before creating an issue, search existing [Issues](https://github.com/cultureamp/kaizen-discourse/issues/) to see if any relevant issues already exist.

To create a new issue for changes to design documentation or missing documentation:

1. Visit [Issues](https://github.com/cultureamp/kaizen-discourse/issues/) and click the "**New issue**" button.
3. Give the issue a **title** framed as a problem, e.g. "There's no date picker guidance".
4. Give the issue a **description** that provides enough information that people can act on it without including any sensitive information, e.g. "As a designer, I want to know how to position coach marks because I'm designing an onboarding workflow."
5. Click **Submit**. Add a "Label" of "content" for design system content and "discussion" if you want feedback.

### Editing design documentation

You can edit Kaizen Site documentation using GitHub's interface.

1. **Find**: Find the page's file in GitHub by clicking "Find file", typing the name of the guideline, component or page and `.mdx` to filter the results down to only Markdown files, which we use for documentation files. This page should have the same content as you see live on the [Kaizen Site](https://cultureamp.design).
2. **Edit**: Click the pencil icon to "Edit this file".
3. **Preview**: Makes your changes to the content and click "Preview changes" to see how they look.
4. **Commit**:
    - Under "Commit changes", write a commit message starting with `docs:`, such as `docs: update typography documentation`.
    - Create a new branch for this commit and start a pull request, e.g. `di/update-typography-guidelines`.
    - Click the "Commit changes" button. This will start a pull request.
5. **Create PR**: Click the "Create pull request" button. Add someone as a reviewer or let #prod_design_systems know.
6. **PR description and branch preview**:
    - Give your PR **a description** to help reviewers quickly understand why you've made the changes you have made and give feedback.
    - Where it says "No description provided", look for an "**Edit**" action (in the unlabeled icon dropdown).
    - If there is an **open Issue** for your changes, link to it in the description by writing `#` and writing the number or title of the Issue. You can find the Issue number or title by searching for it in [Issues](https://github.com/cultureamp/kaizen-discourse/issues).
    - It's convenient for reviewers if you add a link to your "**branch preview**", which shows how your changes will look on the Kaizen Site after it has automatically been built (within a few minutes of opening the PR). The branch preview link will use your branch name like this: <https://dev.cultureamp.design/>(branch-name), which you can find in the "Checks" section of the page (likely under "Show all checks" > Branch preview: "Details").

Once it's approved, click "Squash and merge" to publish your changes. Share the link to the updated documentation on #updates_design_systems for awareness.

## Contributing code

### Quality and reviews

Every code contribution **must** have:

1. A design review from a designer
2. Semantic versioning and conventional commit PR titles: see [Releasing packages](#releasing-packages)
3. Communications: share your new component or changes on Slack and at relevant Front End Practice meetings

Every code contribution **should strive to** have:

- Basic level of unit tests
- New or updated Storybook stories

To update a component in code:

- Ask for a code review from a design systems advocate (an "advocado"), #prod_design_systems, or someone in your team who is experienced with Kaizen*
- Notify the front-end engineering practice (#pract_front_end_eng) of any possible breaking changes
- Notify the QA practice of any possible breaking changes

\* **If you're new to Kaizen, please ask #prod_design_systems to set up an onboarding session to get you up to speed.** If you have an urgent PR to merge before that happens, it is safest to ask #prod_design_systems to review it to catch any issues.

### Design tokens

See the [design tokens](https://github.com/cultureamp/kaizen-design-system/tree/main/packages/generator) package.

### Browser and device support

To learn more about what browsers and devices we support in Kaizen Component Library, Culture Amp employees can see [the Browser Support wiki page](https://cultureamp.atlassian.net/wiki/spaces/Prod/pages/1572948/Browser+Support+and+Stats).

### Local development with other front-end codebases

To strengthen the Kaizen Design System, we encourage engineers to take a component-first development approach. By concentrating on developing Kaizen components in Storybook, we are likely to improve the API design and achieve good separation of concerns, avoiding components tightly coupled to specific applications. If, however, you want to test a component in the context of another front-end codebase, you can [yalc](https://github.com/wclr/yalc) your local version of `@kaizen/component-library` with your other front-end codebase.

#### For core components

**Step 1**: Make your local copy of `@kaizen/component-library` available.

```sh
# Navigate to code source
$ cd ./packages/component-library

# Publish the package
$ yalc publish

```

**Step 2**: Install `@kaizen/component-library` in your other front-end codebase.

```sh
# Navigate to code source
$ cd <your_code>/cultureamp/YOUR_FRONT_END_CODEBASE

# Add the package to your front-end codebase
$ yalc add @kaizen/component-library

# pnpm install
$ pnpm

```

Your local Kaizen changes will now show in your other front-end codebase. If you want to test subsequent updates to the component, you'll need to run through step 1 again to republish the component, and then run `yalc update` in your front-end codebase to see the new changes.

**Step 3**: Removing the package

When you are done, remove the package from your front-end codebase:

`yalc remove @kaizen/component-library`


## Releasing packages

Automated releases to the npm public registry are triggered for all pull requests containing modifications to one or more npm packages (found in the `/packages/` directory). The information required to determine the version update for each release is taken from the title and content of the pull request.

### Release workflow

To release a new version of a package, create a pull request that:

- Modifies only the package(s) you wish to release ([see below](#updating-multiple-packages))
- Has a Changeset file ([see below](#creating-a-changeset))
    - This step is optional, but recommended. Exceptions are for things like docs or tooling changes.

Once that pull request is merged into main, a Changeset PR will automatically be created with the details of your change, and once the Changeset PR is merged, an automated release process will be triggered and the newly published package version will be available on the npm public registry.

Note: This process is so we can roll more than one change in a single release eg. Person A adds Feature X to `@kaizen/components` and person B adds Feature Y to `@kaizen/components`, changesets will combine these into a single minor version, rather than 2.

### Semantic Versioning

All npm packages follow strict semantic versioning (or _semver_). Semantic versioning gives specific meaning to changes in version numbers, as follows:

> Given a version number `MAJOR.MINOR.PATCH`, increment the:
>
> - `MAJOR` version when you make incompatible API changes,
> - `MINOR` version when you add functionality in a backwards compatible manner, and
> - `PATCH` version when you make backwards compatible bug fixes.

— <https://semver.org/>

**Note that we do not update package version numbers directly**, but instead depend on a [Changeset](#creating-a-changese) workflow which will version and release packages according to the content of changeset files.

### Creating a Changeset

Kaizen utilises [Changesets](https://github.com/changesets/changesets) to outline the changes made to specific packages as well as keeps all depenencies of the changed packages up to date.

Creating a changeset is straight forward:

1. Run `pnpm changeset` (or `pnpm commit`)
2. Select the packages you have made changes to with spacebar, followed by enter
3. You will then be asked which packages should have a Major, Minor or Patch. So following [Semantic Versioning](#semantic-versioning), select the packages that apply and hit enter (you can also hit enter to skip)
4. Add a short [description](#description).

A changeset `md` file will be added to your branch which you are free to modify the details of if necessary.


#### Description

The `description` should be a short (less than ~60 characters) summary of changes introduced in the release. This summary will be included in the CHANGELOG (see the [releases page](https://github.com/cultureamp/kaizen-design-system/releases)), along with the commit type, a link to the pull request which triggered the release, and a detailed summary of any breaking changes.

Note that since the `description` will be included in the CHANGELOG — and may be the only summary of the changes that your colleagues will encounter — it is helpful for you to include a concise summary of _how the package is different_ following the release, written in the [imperative mood](https://chris.beams.io/posts/git-commit/#imperative). For example `fix: Address accessibility bug in the Gizmo component`.

#### Updating multiple packages

Note that in the case that a pull request touches files from more than one package, all of those packages will be released to the npm registry with the specified update. Sometimes this might be desirable (e.g. when performing a bulk update to package docs), but in general, **be on the lookout for pull requests which touch more than one package**, and break those changes up into separate pull requests!

## Canary releases

Canary releases create a way to test changes in production-like environments, and are a great way to reduce the risk of proposed changes to a package. Use canary releases when you're working on a significant refactor, experimenting with new technology, or making other large scale changes.

Our implementation of this is actually a [Changeset snapshot](https://github.com/changesets/changesets/blob/main/docs/snapshot-releases.md) but serves the same purpose as testing a package in production environments.

### Triggering a release

1. Create a new branch with the desired changes for your package
2. Create a [changeset](#creating-a-changeset) and push your branch to github
3. Go to the [github Actions](https://github.com/cultureamp/kaizen-design-system/actions/workflows/canary-release.yml) tab and click on the `Canary release` workflow
4. Run the workflow, select your feature branch and give a brief label for your release, ie: `fix-button`

This will run a build and publish a snapshot and its tag with a name that is constructed from the label and timestamp to npm, ie: `0.0.0-canary-fix-button-20230719002814`.

:warning: **Note that canary releases should not be used in production.**

## Using new package releases

To use a newly released version of the Kaizen Component Library (or any other package) in a front-end codebase, run `pnpm upgrade --latest <scoped package name>` (e.g. `pnpm upgrade --latest @kaizen/component-library`).

Remember to always check the CHANGELOG (e.g. [`/packages/component-library/CHANGELOG.md`](./packages/component-library/CHANGELOG.md) or the [releases page](https://github.com/cultureamp/kaizen-design-system/releases)) for any package you wish to upgrade, paying extra attention to any breaking changes which have been introduced since the last version used in your project.

## Contributing components

To learn more about contributing components, see the [Kaizen Site: components overview](https://cultureamp.design/components/overview).

### Patterns

Refer to the [docs folder](docs) for code guidelines and patterns.

### Component generator

To generate a new component and package, new component within an existing package, or a subcomponent,
run the following command and follow the prompts:
```
pnpm plop
```

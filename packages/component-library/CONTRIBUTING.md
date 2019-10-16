# Contributing to `kaizen-component-library`

This package is maintained by Culture Amp's Design Systems Team, but is owned and contributed to by all Culture Amp engineers.

Feel free to file issues, or open pull requests on this project, or ask questions on #team_design_systems in Slack.

## How to make changes

If you make a change to `kaizen-component-library` and would like to see your changes reflected in another repo (e.g. Murmur), you will need to do two things:

1. release a new version of the `@cultureamp/kaizen-component-library` package
2. update repo's (e.g. Murmur) `package.json` so that it uses the new version of `@cultureamp/kaizen-component-library`

Keep reading for information on how to release a new version.

## How to write a commit message and PR title in the right format

All commit messages and the PR title must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) format.

Before a pull request is merged, its commit messages and the PR title are analysed, and based on the way they are written, a script (that you will run just before merging) determines:

- whether a new version & release are necessary, and
- if so, whether the increase in version number should represent a "major", "minor" or "patch" release. (See [Semantic Versioning](https://semver.org/) if you want to learn more).

**This means that in order to release a new version of `kaizen-component-library`, you need at least one commit message in your PR that is formatted such that it triggers a release.** If no commit messages match this format, no release will be triggered.

### Basic format

**All** commits in `kaizen-component-library` should follow this basic format:

    type(kaizen): message

The **type** can be `fix`, `perf`, `feat`, `chore`, or `docs`. Your choice will affect whether a release and version bump are triggered (see examples below).

The **message** should explain your change in one short line. You can write more lines underneath to explain it more fully if needed. You can also add any breaking changes, the `BREAKING CHANGE` message if needed and it must be on a new line of a commit.

### Examples

Below are some examples of formatted commit messages that use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) format.

A `BREAKING CHANGE:` commit will trigger a **major** release (e.g. bumping the version from 16.2.1 to 17.0.0) Please read more about `BREAKING CHANGE` below.

    feat(kaizen): add X props to X component
    BREAKING CHANGE: This commit is changing the API of the X component

 
A `feat` (feature) commit will trigger a **minor** release (e.g. bumping the version from 16.0.0 to 16.1.0) You can use the `feat` type when you add a new component or a new feature.

    feat(kaizen): add an iconButton variant to our elm button
    feat(kaizen): add new Toggle component

    
A `fix` commit will trigger a **patch** release (e.g. bumping the version from 16.0.0 to 16.0.1) You can add a `fix` type if you fix bugs.

    fix(kaizen): fix the focus styling on our button component


A `perf` (performance improvement) commit will also trigger a **patch** release (e.g. bumping the version from 16.0.0 to 16.0.1) You can add a `perf` type if your work has impact on the performance.

    perf(kaizen): update CSS transitions to be more performant


A `chore` or `docs` commit will NOT trigger a release or version bump; it will have **no effect**. A PR that consists entirely of these commits will not trigger a release or bump. You can use `docs` type if you are adding documentation. You can use `chore` type if you are working on any other miscellaneous tasks.

    chore(kaizen): fix typo in README


## :warning: If there are breaking changes, you need a major release

In [Semantic Versioning](https://semver.org/), the version number denotes important information about changes to the package's API.

If you have breaking changes in your PR (for example, if your PR changes the external-facing props of a component that will be used by the package's consumer), it is **crucial** that a "major" release occurs (such as bumping the version from 16.0.0 to 17.0.0). Incrementing the first digit in the version number alerts engineers to the fact that there are breaking changes.

Add the string `BREAKING CHANGE:` on a new line to the body of your commit messages (the one that is introducing the particular breaking change) to ensure the breaking change is triggering a **major** release version. For example, this commit message will trigger a major release:

    fix(kaizen): no longer allow weird children to be passed to MenuList

    BREAKING CHANGE: MenuItem no longer accepts any React component as its label; it only allows a plain string as the label.
    
If you add `BREAKING CHANGE` to the body of commits with `chore` or `docs` prefix, it will result in a failed build as breaking changes should not be part of those types of commits.

In some situations you may think, "I don't really need to add `BREAKING CHANGE:` to my commit message, because this component whose API I've updated isn't used anywhere in Murmur yet." **You still need to add `BREAKING CHANGE` regardless.** This keeps things consistent, which is useful in ways that may not be apparent yet, and protects against cases where someone in a different repo has used the component without your knowledge, for example.

**Make sure the subject of your commit is in the Conventional Commits format** (the same as a regular commit as described above).

## Run `yarn kaizen:version` from the root of BFR

Unless your PR consists of only `chore` or `docs` commits, **your PR must include a version bump and updated changelog.** There is a script that will do this for you, including determining which version to bump to based on your PR's commit history.

To run it, navigate to the root of `big-frontend-repo` and run `yarn kaizen:version`. This will bump the version and update the changelog. You can now commit this with a commit message e.g. `chore(kaizen): bump version to x.x.x` and push up when ready.

## Your PR will be squashed into a single commit

When you go to merge your PR, the button will say _Squash and merge_. Here, the commit message that you enter should summarise your PR's changes, because your entire PR will be squashed into this one commit.
Your PR's commit history will automatically be generated as bullet points in the body of the commit message. It's a good opportunity to remove useless commit messages here and leave only the ones that represent specific changes you made as this list will appear on the releases tab for `big-frontend-repo` on Github.
At this point you will also see the BREAKING CHANGE message that you entered previously which should be left there. 


## Using latest version of `kaizen-component-library` package in Murmur

If you would like to use the component that you contributed to `kaizen-component-library` in `Murmur`, `Murmur`'s package.json must be upgraded to the current version of the `kaizen-component-library` that includes your changes. To do so, please create a PR in `Murmur` that updates `kaizen-component-library` to the latest version in `package.json` and merge. You can also include this package upate as part of your feature PR. To use the updated package, run `yarn upgrade --latest @cultureamp/kaizen-component-library` and it will download the latest version of `kaizen-component-library` from NPM. 


Good luck!

---

If you have trouble, ask the Design Systems Team for help.

See also:  
[Semantic Release](https://github.com/semantic-release/semantic-release/)  
[Semantic Versioning](https://semver.org/)

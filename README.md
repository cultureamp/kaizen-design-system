# Kaizen Design System

Kaizen is Culture Amp's design system to accelerate designers and engineers creating Culture Amp's products. Visit the [Kaizen Site](https://cultureamp.design) to learn more.

This repository includes the Kaizen Site and the Kaizen Component Library that we use internally.

[![Build status](https://badge.buildkite.com/880e8b196b369c19ffcbef08a81d364059e0d6fb77e9d35563.svg?branch=master)](https://buildkite.com/culture-amp/kaizen-design-system)

## Domains

- [cultureamp.design](https://cultureamp.design)
- [dev.cultureamp.design](https://dev.cultureamp.design)/branch-name

## Installation

Kaizen Component Library is already included in our main product repositories. If it's needed in a new repo, add `@cultureamp/kaizen-component-library` to your `package.json` file:

```
yarn add @cultureamp/kaizen-component-library
```

## Usage

You can import a Kaizen Component Library component from the `kaizen-component-library` package inside your application using React or Elm.

React import example:

```
import { Button } from "@cultureamp/kaizen-component-library"
```

React usage example:

```
ReactDOM.render(
  <Card>
    <Button label="Example button" onClick={() => alert('Button clicked!')} />
  </Card>
  , document.querySelector('#app'),
);
```

Elm import example:

```
import Kaizen.Button.Button as Button
```

Elm usage example:

```
[ Button.view
    (Button.primary
        |> Button.href configuration.callToActionPath
    )
    Example button
]
```

For Elm components, we have used Kaizen to namespace them because the source directories that are specified in `elm.json` are all pulled into the same namespace, creating potential conflicts.

You can also import Kaizen styles into SCSS files:

```
@import '~@cultureamp/kaizen-component-library/styles/type';
```

## Contributing

See the [contributing guidelines](CONTRIBUTING.md).

## Scripts

Command | Summary
:- | :-
`yarn setup` | Install dependencies
`yarn reset` | Clean and reinstall dependencies
`yarn compile` | Run typechecks
`yarn lint` | Run linters
`yarn lint:fix` | Run linters, auto-fixing violations
`yarn test` | Run unit tests

## Tools

Command | Summary
:- | :-
`yarn tsc` | Run the typescript compiler
`yarn tslint` | Run tslint
`yarn prettier` | Run prettier
`yarn gatsby` | Run gatsby in the `site` package

## Feedback, bugs, and issues

Please open a new [GitHub Issue](https://github.com/cultureamp/kaizen-design-system/issues/new) for bugs or reach out to Design Systems Team to discuss on #team_design_systems.

## Maintainers

The Culture Amp Design Systems Team maintains this repo.

## Learn more

Culture Amp employees can reach out to the Design Systems Team on Slack to learn more: #team_design_systems.

## License

See the [LICENSE](LICENSE).


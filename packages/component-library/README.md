# Kaizen Component Library

Kaizen components live in two places:

1. The core Kaizen component library (`@kaizen/component-library`)
2. Individual draft component packages

To live in the core component library, a component must satisfy a number of quality checks including tests and accessibility standards. Design Systems Team is responsible for moving draft components from their own individual packages into the library when they're ready.

All components that do not yet meet these standards live in their own individual draft component packages.

To see a list of available draft component packages, run:
```
npm search @kaizen/draft
```
This will give you an up-to-date list of all published draft packages which you can include in your project's `package.json`.

## Add to a project

Kaizen Component Library is already included in our main product repositories. If it's needed in a new repo, add `@kaizen/component-library` to your `package.json` file:

```
yarn add @kaizen/component-library
```
If you'd like to use a draft component, you include that package individually:
```
yarn add @kaizen/draft-well
```

## Usage

You can import a Kaizen Component Library package inside your application using React or Elm.

React import example:

```
import { Button } from "@kaizen/component-library"

// draft component
import { Well } from "@kaizen/draft-well"
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

-- draft component
import KaizenDraft.Well.Well as Well
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
@import '~@kaizen/component-library/styles/type';
```


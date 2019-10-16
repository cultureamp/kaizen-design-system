# Kaizen Component Library

## Add to a project

Kaizen Component Library is already included in our main product repositories. If it's needed in a new repo, add `@cultureamp/kaizen-component-library` to your `package.json` file:

```
yarn add @cultureamp/kaizen-component-library
```

## Usage

You can import a Kaizen Component Library package inside your application using React or Elm.

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


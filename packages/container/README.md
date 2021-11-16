# @kaizen/container

## About
Container combines all the boilerplate and setup to ensure Kaizen components are consistent across different codebases. This includes:
* Theme management
* Browser normalisation 
* Fonts
* CSS Polyfills

## Install
```
yarn add @kaizen/container
```

### Usage
To use, wrap App in the React component: 

```
// App.tsx
import { Container } from "@kaizen/container"; 

const YourApp = () => (
  <Container>
    /* your React app goes here */
  </Container>
);
```

You can also use this on non-react pages to initialise the theme manager and get the required font definitions, polyfills etc:

```
import "@kaizen/container"; 
```
### Theme management
Out of the box, the Container initialises a theme manager with a default theme (currently `Heart`). The theme manager is a singleton and should not be redeclared. If you need to change the theme, you can do so with the `themeManager` export. 

```
// App.tsx
import { themeManager } from "@kaizen/container"; 
import { myCoolCustomTheme } from "./myCoolCustomTheme";

themeManager.setAndApplyTheme(myCoolCustomTheme)

const YourApp = () => (/* your React app goes here */)
```

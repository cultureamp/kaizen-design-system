# @kaizen/bootstrap

Bootstrap is a place for Kaizen-specific styles that cannot be contained within a component package (such as Button).

Note that this package is _not_ for browser normalisations or polyfills. Instead refer to @cultureamp/frontend-runtime:
https://github.com/cultureamp/frontend-ops/blob/master/packages/frontend-runtime/lib/index.ts

This package exports two assets; a Sass file and a React component. For most use cases it is easiest to wrap your App in the React component: 

```
// App.tsx
import Bootstrap from "@kaizen/boostrap"; 

const YourApp = () => (
  <Bootstrap>
    /* your React app goes here */
  </Bootstrap>
);
```

If for whatever reason this is not possible, you can import the Sass file which will give you all the necessary @font-face definitions: 
```
// index.module.sass
@import "~@kaizen/boostrap/fonts.module.css" 
```

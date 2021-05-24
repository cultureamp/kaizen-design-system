# @kaizen/bootstrap

Bootstrap combines all the boilerplate and setup to ensure Kaizen components are consistent across different codebases. This includes:
* Theme management
* Browser normalisation 
* Fonts
* CSS Polyfills

To use, wrap App in the React component: 

```
// App.tsx
import Bootstrap from "@kaizen/boostrap"; 

const YourApp = () => (
  <Bootstrap>
    /* your React app goes here */
  </Bootstrap>
);
```

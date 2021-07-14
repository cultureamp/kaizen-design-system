# @kaizen/container

Container combines all the boilerplate and setup to ensure Kaizen components are consistent across different codebases. This includes:
* Theme management
* Browser normalisation 
* Fonts
* CSS Polyfills

To use, wrap App in the React component: 

```
// App.tsx
import KaizenContainer from "@kaizen/container"; 

const YourApp = () => (
  <KaizenContainer>
    /* your React app goes here */
  </KaizenContainer>
);
```

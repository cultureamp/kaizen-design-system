const e=`import { KaizenProvider, ThemeManager } from "@kaizen/components"

- const themeManager = new ThemeManager(defaultTheme)

...

return(
-  <KaizenProvider themeManager={themeManager}>
+  <KaizenProvider>
    <App />
  </KaizenProvider>
)
`,n=`import { KaizenProvider } from "@kaizen/components"

- const themeManager = new ThemeManager(defaultTheme)

...

return(
  <FrontendServices
      services={[...defaultPreset, KaizenProvider]}
      options={{
        ...
-       themeManager,
      }}
  >
   ...
  </FrontendServices>
)
`,r=`- import { ThemeManager, ThemeProvider, defaultTheme } from "@kaizen/design-tokens"
+ import { defaultTheme } from "@kaizen/design-tokens"
+ import { KaizenProvider, ThemeManager } from "@kaizen/components"

const themeManager = new ThemeManager(defaultTheme)

...

return(
  <FrontendServices
-     services={[...defaultPreset, ThemeProvider]}
+     services={[...defaultPreset, KaizenProvider]}
      options={{
        ...
      themeManager,
      }}
  >
  ...
  </FrontendServices>
)
`,a=`- import { ThemeManager, ThemeProvider, defaultTheme } from "@kaizen/design-tokens"
+ import { KaizenProvider } from "@kaizen/components"

- const themeManager = new ThemeManager(defaultTheme)

...

return(
-  <ThemeProvider themeManager={themeManager}>
+  <KaizenProvider>
     <App />
+  </KaizenProvider>
-  </ThemeProvider>
)
`;export{r as a,e as b,n as c,a as m};

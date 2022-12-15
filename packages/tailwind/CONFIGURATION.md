## What is a Preset?

A Tailwind [Preset](https://tailwindcss.com/docs/presets#creating-a-preset) is a configuration object that determines which suffixes can be applied to Tailwind's utility classes.

![Tailwind anatomy diagram](tailwind-anatomy.jpg "Tailwind anatomy")

## The Kaizen Preset

The Kaizen preset defines suffixes based on our [design tokens](https://github.com/cultureamp/kaizen-design-system/tree/main/packages/design-tokens).  

In the following example, `m` and `border` are utilities defined by Tailwind. And what follow are suffixes based on our kaizen design tokens.  
```
<div className="m-16 border-width-focus-ring border-color-focus-ring">...
```

- You can see our preset [here](https://github.com/cultureamp/kaizen-design-system/blob/main/packages/tailwind/src/tailwind-presets.ts).  
- You can also the Tailwind section of our [storybook](https://cultureamp.design/storybook/?path=/story/tailwind--default-kaizen-site-demo) to see which classes Tailwind generates using our preset.
- To learn more on how Tailwind merges its config refer to the docs [here](https://tailwindcss.com/docs/presets#merging-logic-in-depth).
### Example

The Kaizen `Preset` has following config for `borderRadius`, which will update the classes available to the Tailwind `rounded` utility:

```json
...
  borderRadius: {
    none: "0px",
    default: "7px",
    "focus-ring": "10px",
    full: "100%",
  },
```

This means that by default, the `rounded` utility will only have access to these class modifiers: `-none`, `-default`, `-focus-ring`, and `-full`.
 
These can still be used with any of the `rounded` methods, ie: `class="rounded-default rounded-l-none"` will translate to:

```css
border-radius: 7px 7px 7px 0
```

---

## Recommended preset configuration

Our recommendation is to use Kaizen's custom preset as the default for your project.

```
// tailwind.config.js
const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: ["<glob pattern targeting files in /src>"],
  presets: [Preset],
  important: ["#root", "#docs-root"],
  corePlugins: {
    preflight: false,
  },
}
```
Refer to the below for more on these keys.

### content
This should target the files using tailwind in you src folder. ie:
```js
  content: [
    './src/page/**/*.{tsx, ts}',
    './src/components/**/*.{tsx, ts}',
  ],
```

 Refer to [docs](https://tailwindcss.com/docs/content-configuration) for best practice.

### presets
This should contain the Kaizen Tailwind preset. This will override the default Tailwind presets.
### important
It is important to add to the `#root` and `#docs-root` (for storybook) to ensure that tailwind classes supersede component styles. The ids can change as long as they match your root DOM node id.
### corePlugins
TWs `preflight` is an extremely opinionated CSS reset that will add a lot of default styles we don't want or need.


This approach will overwrite the default Tailwind config. Meaning that Tailwind suffixes will no longer be available.

<br/>

## Extending the Kaizen preset

> Extending your config is a good option when you intend to _reuse_ the style.  
> If you need a value not available in our preset for a specific use case, consider using [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) instead.

To extend upon the preset with values specific to your project, we recommend passing a theme object to `theme.extend`.

```
const { Preset } = require("@kaizen/tailwind")

module.exports = {
  presets: [Preset],
  theme: {
    extend: {
      colors: {
        myCoolNewColor: "#ffffff",
        "purple-100": "lime"
      }
    }
  }
}
```

Here, the Kaizen preset overwrites the default Tailwind preset, and the `extend` field adds in some new values.  
Be careful though! While adding in a _new_ field to `colors` won't overwrite any existing ones, passing in an existing field _will_. In this example, `purple-100` has unfortunately been overwritten.

`<p className="text-sky">...` ❌ Default TW config overwritten by `Preset`

`<p className="text-myCoolNewColor">` ✅ New color added

`<p className="text-purple-100">` ️❗️ Value from `Preset` overwritten to "Lime"

`<p className="text-purple-200">` ✅ Value from `Preset` not overwritten
</details>

<br/>

---

## Suggested Editor Config

The assumption is that you will be using VSCode as your main IDE. Your configuration may differ if you are using alternatives like Webstorm, Atom, etc, but there is relatively decent support in their plugin ecosystems.

### Tailwind CSS VSCode IntelliSense plugin

Basic config for the [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for Tailwind IntelliSense lives in your project's `settings.json`.

You can customise which keywords trigger IntelliSense using basic strings, or even regex expressions.  
Here are some examples you may wish to include in your own project:

```
"tailwindCSS.classAttributes": [
  "class",
  "className",
  "ngClass",
  "classNameOverride"
],
"tailwindCSS.experimental.classRegex": [
  "classnames\\(([^)]*)\\)",
  "classNames\\(([^)]*)\\)",
  "clsx\\(([^)]*)\\)",
  "csx\\(([^)]*)\\)"
]
```

#### intelliSense in classnames package (or other functions)
`tailwindCSS.experimental.classRegex` is used to provide intelliSense within your `classnames` functions in your codebase. Ideally you only add the pattern that is used in your repo.

Calling out that this is still an experimental feature for the VSCode plugin.
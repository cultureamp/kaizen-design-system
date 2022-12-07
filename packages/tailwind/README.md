# Install

```
yarn add @kaizen/tailwind
```

## Caveat before use

This is an early release of the Kaizen Tailwind Preset - the API for may change and evolve as we revieve feedback from our teams. We will endevour to assist where possible if classes or utilites are updated in the future.

## Getting started

The assumption is that you have previously followed the FE Foundation guide for setting tailwind up in your project.

Install the `@kaizen/tailwind` as a dependency and require it into your tailwind config. You can destructure it as a variable or require it direction into an array within `presets`.

```js
// this originally lived in @kaizen/desing-tokens but we've decoupled this for ease of versioning
const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: ["./**/*.{ts,tsx}"],
  presets: [Preset],
  // important to add to the #root and #docs-root (for storybook) to ensure that tailwind classes supersede component styles
  important: ["#root", "#docs-root"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## What is a Preset?

A Tailwind [Preset](https://tailwindcss.com/docs/presets#creating-a-preset) is a configuration object that provides new keys and values to Tailwind's utility classes. This is merged over the top of the Tailwind's base config to provided sensible defaults that reflect Kaizen's design tokens.

To extend this preset and add project-based configuration, please read this guide [below](#extending-a-preset).

To learn more on how Tailwind merges its config refer to the docs [here](https://tailwindcss.com/docs/presets#merging-logic-in-depth).
### Example

The kaizen `Preset` has following config for `borderRadius`, which will update the classes available to the Tailwind `rounded` utility:

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
  presets: [Preset],
}
```
Our preset is built using Kaizen's [design-tokens package](https://github.com/cultureamp/kaizen-design-system/tree/main/packages/design-tokens). You can see the preset [here](https://github.com/cultureamp/kaizen-design-system/blob/main/packages/tailwind/src/tailwind-presets.ts).  
This approach will overwrite the default Tailwind config.

<br/>

To extend upon the preset with values specific to your project, we recommend passing a theme object to `theme.extend`.
<details>
<summary>See a config example with implementation here</summary>

```
const { Preset } = require("@kaizen/tailwind")

module.exports = {
  presets: [Preset],
  theme: {
    extend: {
      colors: {
        myCoolNewColor: "#ffffff",
        purple-100: "lime"
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

The assumption is that you will be using VSCode as your main IDE. Your configuration may differ if you are using alternative like Webstorm, Atom, etc, but there is relatively decent support in their plugin ecosystems

### Tailwindcss VSCode Intellisense plugin

Basic config for the [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for Tailwind intellisense lives in your projects `settings.json`.

To get intellisense use:


```
  "tailwindCSS.classAttributes": [
    "class",
    "className",
    "ngClass",
    "classNameOverride"
  ]
```

These identify where tailwind will provide intellisense in your editor.

---

## Prerequisite knowledge

This package is essentially a custom Tailwind preset. This package does not change how Tailwind works; it only changes the  compiled classes.  

For example,
Tailwind allows us to use atomic classes with psuedo selectors as inline styles, like so:
```
<p className="hover:w-1">...
```
`w-1` in this instance would compile to a css rule that sets `width: 0.25rem` to the element, if using Tailwind defaults.  
What our package changes are the presets that can be assigned. After using our preset, the above `w-1` class will not work. Instead, classes that utilize Kaizen's design tokens will be available through our preset.  
The following example sets a `width` of `2px`, as per preset.
```
<p className="hover:w-2">...
```

Note that the functionality of core concepts like psuedo-selectors and arbitrary values is unchanged.

For this reason, refer to the [Tailwind core concepts docs](https://tailwindcss.com/docs/utility-first) for getting up to speed on how Tailwind _works_, but refer to our [storybook](https://cultureamp.design/storybook/) as a reference guide for _classnames_ made available through our preset.

As an example, if I wanted to know which font-family values are available as Tailwind classes, I would look under Tailwind > Typography > Font Family (or just search "Font Family").
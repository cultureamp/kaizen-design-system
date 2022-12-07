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

A Tailwind [Preset](https://tailwindcss.com/docs/presets#creating-a-preset) is a configuration object that provides new keys and values to Tailwind's utility classes. This is merged over the top of the Tailwinds base config to provided sensible defaults that reflect Kaizen's design tokens.

To extend this preset and add project-based configeration, please read this guide [below](#extending-a-preset).

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

## Extending a preset

// TODO: Add section on extending tailwind preset in config: refer to reports-configeration


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
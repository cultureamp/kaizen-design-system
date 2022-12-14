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
  presets: [Preset],
}
```

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

You can customise which keywords trigger intellisense using basic strings, or even regex expressions.  
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
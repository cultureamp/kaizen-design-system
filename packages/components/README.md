# Components

## Installing via templates

At CultureAmp we have a template system, using any of the latest versions (as of 5 months ago) will include the Kaizen's primary components installed out of the box. This includes:

- [next-template](https://github.com/cultureamp/next-template)
- [frontend-template](https://github.com/cultureamp/frontend-template)

If you've used an older than 5 months version of either of these templates, then its likely that you'll require manual installation.

## Manual installation

### 1. Add the KaizenProvider

The [KaizenProvider](/?path=/docs/utilities-kaizenprovider-installation--docs) feeds your entire app with Kaizen defaults so it's important that it goes at the very root of your application.

```tsx
import { KaizenProvider } from "@kaizen/components";
<KaizenProvider>
  <App />
</KaizenProvider>
```

Be sure to read the [KaizenProvider](/?path=/docs/utilities-kaizenprovider-installation--docs)documentation for migration tips and in case your app requires any further config, but generally this should be it!

### 2. Add unified-home's @culturamp/i18n-react-intl webpack plugin to your webpack config

This plugin is necessary for [KaizenProvider](/?path=/docs/utilities-kaizenprovider-installation--docs) to run properly, and for ensuring that Kaizen's internal translated message strings are
available to the Kaizen components that consume them.

For installation instructions, see their docs [here](https://github.com/cultureamp/unified-home/tree/master/packages/i18n-react-intl#integrating-with-webpack).

### 3. Setup Tailwind CSS

It is recommended that you use Tailwind for any custom CSS you may need to write outside of using Kaizen components.

For full installation instructions, see the [Tailwind Preset README](../tailwind/README.md) page.

Whether or not you are already familiar with Tailwind, you'll want to take a look at your category of interest in the [Tokens directory](?path=/docs/tier-1-tokens--docs), as we have made distinct modifications to vanilla Tailwind to suit our design system.

### 4. Add Kaizen's global CSS stylesheet

For the convenience of your app, we've compiled all the necessary styles for our components into a single stylesheet to make it easy to set and forget.

This includes:
- [Normalize.css](https://github.com/necolas/normalize.css)
- reset.css
- Component styles

You can import this stylesheet in either CSS or JS as long as it sits as the first and only of its kind.

⚠️ Note: be aware if you use CSS modules to bundle this global CSS file, it may interfere with the final class names causing the styling to malfunction.

#### CSS

It is recommended you include it at the top of your `tailwind.css` (or any other global/central CSS file):

```css
// tailwind.css
@import "@kaizen/components/dist/styles.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Or you may still use it via JS:

#### JS

```js
// app.js
import "@kaizen/components/dist/styles.css"
```

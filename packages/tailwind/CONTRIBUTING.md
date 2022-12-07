
## Local Development within Kaizen

### Tailwindcss VSCode Intellisense plugin

Basic config for the [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for Tailwind intellisense lives in your projects `settings.json`.

To get the intellisense working make sure you use:

```
  "tailwindCSS.classAttributes": [
    "class",
    "className",
    "ngClass",
    "classNameOverride"
  ]
```

#### Gotchas

**Intellisense not working within the class attributes**

Check the output in your terminal for TailwindCSS IntelliSense.

If you see the following:

```
Tailwind CSS: Can't resolve "@kaizen/design-tokens" in... '/Users/.../kaizen-design-system'
// OR
Tailwind CSS: Can't resolve '@kaizen/tailwind' in '/Users/.../kaizen-design-system'
```

**Solution**
Run build in both the design-tokens and tailwind package folders.

In consuming repos this will not be an issue but for local develop we are requiring on `/dist` folders having compile ts for the plugin to consume.

<br>

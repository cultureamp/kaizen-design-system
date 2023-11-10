---
"@kaizen/tailwind": minor
---

Fix long utility strings for borders in Tailwind (in combination with the introduction of `@kaizen/reset.css`)

**note: these utilities will not work without importing `@kaizen/components/dist/styles.css`**

- Adds DEFAULT values to `borderWidth` and `borderColor` in the Tailwind preset, so these don't need to be written with utility classes.

These changes mean that border styles require much less utility classes to be written.
For example, to add a border-bottom to an element, we would previously need to write:
```
className="border-b-default border-l-none border-r-none border-t-none border-solid border-purple-800"
```
We can now achieve the same css by simply writing:
```
className="border-b"
```

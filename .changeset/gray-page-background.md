---
'@kaizen/components': major
---

Default the document body background to gray-100 in Kaizen's reset styles.

At Culture Amp, all Next.js apps already get this background from `KaizenAdapter` in `@cultureamp/next-services`. The adapter injects an inline `<style>` tag that a strict Content Security Policy (CSP) blocks. Moving the rule into Kaizen's reset styles lets a later `@cultureamp/next-services` release remove that inline style without changing the intended appearance.

The new default is technically breaking, but we don't expect any Culture Amp apps to depend on a transparent body. We'll work with outlier consumers such as Murmur during rollout. If an app does need a transparent body, it can set `background-color: transparent` on `body` in an unlayered rule or a layer ordered after Kaizen's `reset` layer.

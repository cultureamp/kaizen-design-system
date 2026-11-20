---
'@kaizen/components': major
---

Default the document body background to gray-100 in Kaizen's reset styles.

At Culture Amp, all Next.js apps already get this background from `KaizenAdapter` in `@cultureamp/next-services`. The adapter injects an inline `<style>` tag that a strict Content Security Policy (CSP) blocks. Moving the rule into Kaizen's reset styles lets a later `@cultureamp/next-services` release remove that inline style without changing the intended appearance.

This is technically a breaking visual change for apps that relied on a transparent body, but we expect no visual change for most Culture Amp apps because they already use this background. We'll work with outlier consumers such as Murmur during rollout. To retain a transparent body, set `background-color: transparent` on `body` in an unlayered rule or a layer ordered after Kaizen's `reset` layer.

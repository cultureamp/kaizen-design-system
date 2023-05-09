---
"@kaizen/tailwind": major
---

First official release. Reverts height, maxHeight, width and maxWidth to TW defaults, and removes custom max-width breakpoints.

BREAKING CHANGES:
Non-arbitrary uses of `w-`, `h-`, `max-w` and `max-h` utilities will need to be updated inline with Tailwind's defaults (if there is an equivalent). For example:
`w-25` becomes `w-1/4`.
If there is no equivalent in the TW default, an arbitrary value can be used. For example:
`max-w-25` becomes `max-w-[25%]`

Max width breakpoints have been removed, and will need to be replaced with an equivalent min-width breakpoint, or arbitrary breakpoint. 
For example: `bg-red-500 md-max:bg-green-500` 
This would ideally be reversed to it's mobile-first equivalent: `bg-green-500 md:bg-red-500`.
If this isn't plausible, a max-width breakpoint can still be achieved with an arbitrary value: `bg-red-500 max-[768px]:bg-green-500`.

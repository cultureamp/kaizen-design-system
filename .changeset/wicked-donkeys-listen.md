---
'@kaizen/components': patch
---

fix(SingleSelect, MultiSelect): keep the select popover usable inside other overlays

The select popover is portalled out of its trigger, but it was not marked as part of
react-aria's top layer. Opening a `SingleSelect` or `MultiSelect` inside a react-aria overlay
(for example a `MenuPopover`) therefore dismissed that overlay as soon as focus entered the
select popover.

The popover is now marked with `data-react-aria-top-layer`, so react-aria's focus-scope and
dismissal guards treat it as part of the top layer and leave the outer overlay open.

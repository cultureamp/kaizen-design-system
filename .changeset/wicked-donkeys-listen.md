---
'@kaizen/components': patch
---

fix(SingleSelect, MultiSelect): keep the select popover usable inside other overlays

The select popover is portalled out of its trigger, but it was not marked as part of
react-aria's top layer. Opening a `SingleSelect` or `MultiSelect` inside a react-aria overlay
(for example a `MenuPopover`) therefore dismissed that overlay as soon as focus entered the
select popover, and once the outer overlay applied `inert` the listbox rendered but could not be
focused or clicked.

The popover — and any container passed via `portalContainerId` — is now marked with
`data-react-aria-top-layer`, so react-aria's dismissal guards and `ariaHideOutside` skip it.
Consumers who added that attribute to their own portal container as a workaround can drop it.

import type iconsMetadata from './material-symbols-metadata.json'

// Icon names are from https://github.com/marella/material-symbols/blob/main/metadata/versions.json
// Update `material-symbols-metadata.json` for new icons.
// Last updated: 28 Aug 2024
type MaterialIconNames = keyof typeof iconsMetadata

// `auto_awesome` is not listed as part of Material Symbols, however is
// available in Material Icons, which appears to still work.
// https://fonts.google.com/icons?icon.query=auto+awesome&icon.set=Material+Icons&icon.size=20&icon.color=%23000000&selected=Material+Icons+Outlined:auto_awesome:
export type IconNames = MaterialIconNames | 'auto_awesome'

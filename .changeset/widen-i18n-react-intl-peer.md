---
'@kaizen/components': patch
---

Widen the `@cultureamp/i18n-react-intl` peer dependency range from `^2.5.9` to `^2.5.9 || ^3.0.0 || ^4.0.0`. The old range never followed i18n-react-intl's 2.x → 3.x → 4.x major bumps, so every downstream repo that installs the current 4.x (e.g. 4.4.0) saw an "unmet peer" warning (surfaced by `pnpm peers check` in next-template). This is a peer-range correction only — no runtime code change. The only APIs `@kaizen/components` consumes from this package (`useIntl`, `FormattedMessage`, `DynamicIntlProvider`, `StaticIntlProvider`, `LOCALE_REGIONS`) are unaffected by the 3.x/4.x breaking changes (ESLint flat-config in 3.0.0; server-only utilities moving to the `/server` subpath in 4.0.0), neither of which this package uses.

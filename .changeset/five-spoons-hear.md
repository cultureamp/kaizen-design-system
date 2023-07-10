---
"@kaizen/components": minor
---

Add OptionalIntlProvider to KaizenProvider
This change makes KaizenProvider set up an IntlProvider from the `@cultureamp/i18n-react-intl` package
when one isn't present already in the consuming repo.
This means that consumers implementing KaizenProvider will not need to set up their own IntlProvider to have
translations in their app.

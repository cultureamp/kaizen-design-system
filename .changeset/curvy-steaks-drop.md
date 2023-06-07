---
"@kaizen/components": minor
---

Add OptionalIntlProvider to KaizenProvider.
With OptionalIntlProvider added this way, KaizenProvider will wrap its children 
in a StaticIntlProvider from @cultureamp/i18n-react-intl if one is not present in
the app's context already.

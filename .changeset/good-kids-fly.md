---
"@kaizen/components": patch
---

Remove OptionalIntlProvider from KaizenProvider.
This change means that consumers will need to provide their own IntlProvider from `@cultureamp/i18n-react-intl`.
For more info, see our [Internationalization in Kaizen docs](https://cultureamp.design/storybook/?path=/docs/components-kaizen-provider-internationalization-in-kaizen--docs)

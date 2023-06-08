---
"@kaizen/components": minor
---

KaizenProvider will now add @cultureamp/i18n-react-intl's StaticIntlProvider to 
the consuming app (if one isn't provided already). This ensures that Kaizen components
with translated strings get translated properly in consuming repos.

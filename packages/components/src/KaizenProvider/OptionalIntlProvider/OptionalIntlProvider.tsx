import React, { useContext } from "react"
import { StaticIntlProvider } from "@cultureamp/i18n-react-intl"
import { IntlContext } from "react-intl"

// This component was originally built to be consumed in KaizenProvider,
// but has lead to an issue where the KAIO package breaks in non-next apps.
// This component has been taken out of KaizenProvider until we find a way around
// the issue, and in the mean-time, consumers of KAIO will need to provider their own
// IntlProvider (DynamicIntlProvider or StaticIntlProvider) from @cultureamp/i18n-react-intl.
type Props = {
  locale: string
  children: React.ReactElement
}
export const OptionalIntlProvider = ({
  locale,
  children,
}: Props): JSX.Element => {
  const parent = useContext(IntlContext)

  if (parent) return children
  return <StaticIntlProvider locale={locale}>{children}</StaticIntlProvider>
}

OptionalIntlProvider.displayName = "OptionalIntlProvider"

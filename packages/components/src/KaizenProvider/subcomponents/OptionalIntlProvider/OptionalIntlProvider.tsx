import React, { ReactNode, useContext } from "react"
import { StaticIntlProvider } from "@cultureamp/i18n-react-intl"
import { I18nProvider } from "react-aria"
import { IntlContext } from "react-intl"

type Props = {
  locale: string
  children: ReactNode
}
export const OptionalIntlProvider = ({
  locale,
  children,
}: Props): JSX.Element => {
  const parent = useContext(IntlContext)

  if (parent) {
    // we always wrap with react-aria provider as we have no way checking if parent is wrapped (useLocale returns default value if not)
    // but it's not a big deal as we'll consume the defined locale anyways so no effect on children
    return <I18nProvider locale={parent.locale}>{children}</I18nProvider>
  }

  return (
    <StaticIntlProvider locale={locale}>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </StaticIntlProvider>
  )
}

OptionalIntlProvider.displayName = "OptionalIntlProvider"

import React, { useContext } from "react"
import { StaticIntlProvider } from "@cultureamp/i18n-react-intl"
import { IntlContext } from "react-intl"

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

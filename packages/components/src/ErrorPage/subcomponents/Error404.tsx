import React from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import { ErrorProps } from "./types"
import { BaseErrorPage } from "."

export const Error404 = ({ callToAction }: ErrorProps): JSX.Element => {
  const { formatMessage } = useIntl()

  return (
    <BaseErrorPage
      code={404}
      title={formatMessage({
        id: "kzErrorPage.404.title",
        defaultMessage: "Missing pages are one of life's mysteries",
        description: "Main title of page",
      })}
      message={formatMessage({
        id: "kzErrorPage.404.message",
        defaultMessage:
          "Sorry but we can't fing the page you're looking for. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      })}
      callToAction={callToAction}
    />
  )
}

Error404.displayName = "Error404"

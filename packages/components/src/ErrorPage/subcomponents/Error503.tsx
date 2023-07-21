import React from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import { ErrorProps } from "./types"
import { BaseErrorPage } from "."

export const Error503 = ({ callToAction }: ErrorProps): JSX.Element => {
  const { formatMessage } = useIntl()

  return (
    <BaseErrorPage
      code={503}
      title={formatMessage({
        id: "kzErrorPage.503.title",
        defaultMessage: "You can't view this page",
        description: "Main title of page",
      })}
      message={formatMessage({
        id: "kzErrorPage.503.message",
        defaultMessage:
          "Sorry about this. The best thing to do is go back and try again.",
        description: "Call to action instructions for the user",
      })}
      callToAction={callToAction}
    />
  )
}

Error503.displayName = "Error503"

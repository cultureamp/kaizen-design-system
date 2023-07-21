import React from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import { ErrorProps } from "./types"
import { BaseErrorPage } from "."

export const Error403 = ({ callToAction }: ErrorProps): JSX.Element => {
  const { formatMessage } = useIntl()

  return (
    <BaseErrorPage
      code={403}
      title={formatMessage({
        id: "kzErrorPage.403.title",
        defaultMessage: "You can't view this page",
        description: "Main title for page",
      })}
      message={formatMessage({
        id: "kzErrorPage.403.message",
        defaultMessage:
          "Sorry but it looks like you don’t have permission to view this page. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      })}
      callToAction={callToAction}
    />
  )
}

Error403.displayName = "Error403"

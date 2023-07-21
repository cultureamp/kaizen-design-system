import React from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import { BaseErrorPage } from ".."
import { ErrorProps } from "./types"

export const Error400 = ({ callToAction }: ErrorProps): JSX.Element => {
  const { formatMessage } = useIntl()

  return (
    <BaseErrorPage
      code={400}
      title={formatMessage({
        id: "kzErrorPage.400.title",
        defaultMessage: "Your request has slipped into the void",
        description: "Heading for page",
      })}
      message={formatMessage({
        id: "kzErrorPage.400.message",
        defaultMessage:
          "Sorry but your request couldn’t be completed. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      })}
      callToAction={callToAction}
    />
  )
}

Error400.displayName = "Error400"

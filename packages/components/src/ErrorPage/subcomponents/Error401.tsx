import React from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import { ErrorProps } from "./types"
import { BaseErrorPage } from "."

export const Error401 = ({ callToAction }: ErrorProps): JSX.Element => {
  const { formatMessage } = useIntl()

  return (
    <BaseErrorPage
      code={401}
      title={formatMessage({
        id: "kzErrorPage.401.title",
        defaultMessage: "You can't view this page",
        description: "Main title for page",
      })}
      message={formatMessage({
        id: "kzErrorPage.401.message",
        defaultMessage:
          "Sorry but we can't verify if you're able to view this page. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      })}
      callToAction={callToAction}
    />
  )
}

Error401.displayName = "Error401"

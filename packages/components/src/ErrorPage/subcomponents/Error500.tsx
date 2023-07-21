import React from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import { ErrorProps } from "./types"
import { BaseErrorPage } from "."

export const Error500 = ({ callToAction }: ErrorProps): JSX.Element => {
  const { formatMessage } = useIntl()

  return (
    <BaseErrorPage
      code={500}
      title={formatMessage({
        id: "kzErrorPage.500.title",
        defaultMessage: "Something's gone wrong on our side",
        description: "Main title of page",
      })}
      message={formatMessage({
        id: "kzErrorPage.500",
        defaultMessage:
          "Sorry there's an issue with our system and this page can't be displayed. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      })}
      callToAction={callToAction}
    />
  )
}

Error500.displayName = "Error500"

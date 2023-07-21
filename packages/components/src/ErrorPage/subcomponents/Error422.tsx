import React from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
import { ErrorProps } from "./types"
import { BaseErrorPage } from "."

export const Error422 = ({ callToAction }: ErrorProps): JSX.Element => {
  const { formatMessage } = useIntl()

  return (
    <BaseErrorPage
      code={422}
      title={formatMessage({
        id: "kzErrorPage.422.title",
        defaultMessage: "Change never comes easy",
        description: "Main title of page",
      })}
      message={formatMessage({
        id: "kzErrorPage.422.message",
        defaultMessage:
          "Sorry but your change couldn't be made. Go back and try again, or head to Home",
        description: "Call to action instructions for the user",
      })}
      callToAction={callToAction}
    />
  )
}

Error422.displayName = "Error422"

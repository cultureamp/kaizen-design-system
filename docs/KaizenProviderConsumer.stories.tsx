import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { useIntl } from "react-intl"

type Props = {
  messageId: string
  defaultMessage: string
}

const translateMessageSafely = (id: string, defaultMessage: string) => {
  let message: string

  try {
    const intl = useIntl()
    message = intl.formatMessage({
      id,
      defaultMessage,
    })
  } catch {
    message = defaultMessage
  }
  return message
}

const TranslatedComponent = () => {
  return <p>{translateMessageSafely("myMessage", "My default message")}</p>
}

export default {
  title: "My Translated Component",
  component: TranslatedComponent,
}

export const DefaultStory = (): JSX.Element => <TranslatedComponent />

DefaultStory.storyName = "KaizenProvider Consumer"

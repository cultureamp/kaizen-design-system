import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { FormattedMessage } from "react-intl"
import * as intl from "react-intl"

type Props = {
  messageId: string
  defaultMessage: string
}

class TranslatedComponentWithFallback extends React.Component<Props> {
  state = { hasError: false }

  static getDerivedStateFromError(error: unknown): { hasError: true } {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render(): React.ReactElement {
    if (this.state.hasError) {
      // Need to figure out how to return this as a text node
      // because that's what FormattedMessage would have returned
      return <p>{this.props.defaultMessage}</p>
    }

    return (
      <FormattedMessage
        id={this.props.messageId}
        defaultMessage={this.props.defaultMessage}
      />
    )
  }
}

export default {
  title: "My Translated Component",
  component: TranslatedComponentWithFallback,
}

export const DefaultStory = (): JSX.Element => (
  <TranslatedComponentWithFallback
    messageId="myMessage"
    defaultMessage="Default English translation"
  />
)

DefaultStory.storyName = "KaizenProvider Consumer"

import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { FormattedMessage } from "react-intl"

const MyTranslatedComponent = (): JSX.Element => (
  <p>
    <FormattedMessage id="myMessage" defaultMessage="Hello bro" />
  </p>
)

export default {
  title: "My Translated Component",
  component: MyTranslatedComponent,
}

export const DefaultStory = (): JSX.Element => <MyTranslatedComponent />

DefaultStory.storyName = "KaizenProvider Consumer"

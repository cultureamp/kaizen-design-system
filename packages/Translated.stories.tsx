import React from "react"
//import { StaticIntlProvider } from "@cultureamp/i18n-react-intl"
import { ComponentStory } from "@storybook/react"

const TranslatedComponent = (): React.ReactElement => <p>Hello</p>

export default {
  title: "Translated",
  component: TranslatedComponent,
  decorators: [],
}

export const Translated: ComponentStory<typeof TranslatedComponent> = () => (
  //<StaticIntlProvider locale="en">
  <TranslatedComponent />
  //</StaticIntlProvider>
)
Translated.args = { variant: "body" }

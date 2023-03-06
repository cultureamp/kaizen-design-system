import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { Card } from ".."

export default {
  title: `${CATEGORIES.components}/Card`,
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'import { Card } from "@kaizen/draft-card"<br><br>The `Card` component is a flexible container used to wrap primary content. It has several variants (moods) to assist in displaying information to a user. In the UI toolkit you will find the `Card` component is referred to as `Container`.',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14084"
    ),
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Card>

export const DefaultStory: ComponentStory<typeof Card> = args => (
  <Card {...args}>This is a default container</Card>
)
DefaultStory.storyName = "Default (Kaizen Site Demo)"
DefaultStory.args = {
  tag: "div",
  variant: "default",
}

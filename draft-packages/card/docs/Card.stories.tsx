import { Box, Paragraph } from "@kaizen/component-library"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { Card } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Card`,
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'import { Card } from "@kaizen/component-library". The `Card` component is a flexible container used to wrap primary content. It has several variants (moods) to assist in displaying information to a user. In the UI toolkit you will find the `Card` component is referred to as `Container`.',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14084"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = args => (
  <Card {...args}>This is a default card</Card>
)

DefaultStory.storyName = "Default (Kaizen Site Demo)"
DefaultStory.args = {
  tag: "div",
  variant: "default",
}

export const DesignSheetDefault = () => (
  
)

DesignSheetDefault.storyName = "Design Sheet (default)"


export const DesignSheetReversed = () => (

)

DesignSheetReversed.storyName = "Design Sheet (reversed)"
DesignSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
}

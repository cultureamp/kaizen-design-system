import React from "react"
import { Box, Heading } from "@kaizen/component-library"
import { withDesign } from "storybook-addon-designs"
import { Card, CardProps } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import cardStoriesData from "./card-stories-data.json"

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
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(100px, max-content))",
      gap: "2.5rem",
    }}
  >
    {cardStoriesData?.map(story => (
      <div>
        <Heading tag="h4" variant="heading-4">
          {story.title}
        </Heading>
        <br />
        {(story.stories as CardProps[]).map(cardProps => (
          <>
            <Card {...cardProps}>
              <Box p={1}>{/* child content here */}</Box>
            </Card>
            <br />
          </>
        ))}
      </div>
    ))}
  </div>
)
DesignSheetDefault.storyName = "Design Sheet (default)"
DesignSheetDefault.parameters = { chromatic: { disable: false } }

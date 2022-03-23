import React from "react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { LoadingParagraph } from "../src/LoadingSkeleton"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.loadingSkeleton}`,
  component: LoadingParagraph,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component:
          'import { LoadingParagraph } from "@kaizen/loading-skeleton"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=4496%3A1"
    ),
  },
  decorators: [withDesign],
}

export const DefaultLoadingParagraph = args => <LoadingParagraph {...args} />
DefaultLoadingParagraph.storyName = "Loading Paragraph"

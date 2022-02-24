import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { DirectionalLink } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/DirectionalLink`,
  component: DirectionalLink,
  args: {},
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { DirectionalLink } from "@kaizen/button".',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemoDirectionalLink = args => (
  <>
    <DirectionalLink direction="prev" {...args} />
  </>
)

DefaultKaizenSiteDemoDirectionalLink.storyName =
  "Default DirectionalLink (Kaizen Site Demo)"

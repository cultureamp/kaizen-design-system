import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { BreadcrumbLink } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/BreadcrumbLink`,
  component: BreadcrumbLink,
  args: { pageNumber: 1 },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { BreadcrumbLink } from "@kaizen/button".',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemoBreadcrumbLink = args => (
  <BreadcrumbLink {...args} />
)

DefaultKaizenSiteDemoBreadcrumbLink.storyName =
  "Default BreadcrumbLink (Kaizen Site Demo)"

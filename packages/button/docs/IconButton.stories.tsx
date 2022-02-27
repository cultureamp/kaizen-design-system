import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { IconButton } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/Icon Button`,
  component: IconButton,
  args: {
    label: "Label",
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component:
          'import { IconButton } from "@kaizen/button". This IconButton supersedes "@kaizen/draft-button".',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemoIcon = args => (
  <IconButton {...args} icon={configureIcon} />
)

DefaultKaizenSiteDemoIcon.storyName = "Default Icon (Kaizen Site Demo)"

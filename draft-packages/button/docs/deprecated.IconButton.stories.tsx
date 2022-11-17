import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import configureIcon from "@kaizen/component-library/icons/configure.icon.svg"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { IconButton } from ".."

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/Icon Button (deprecated)`,
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
          'This component is now deprecated. Please use IconButton from "@kaizen/button" instead.',
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

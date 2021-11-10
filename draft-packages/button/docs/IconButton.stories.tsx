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
        component: 'import { IconButton } from "@kaizen/draft-button";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemoIcon = args => (
  <IconButton {...args} icon={configureIcon} />
)

DefaultKaizenSiteDemoIcon.storyName = "Default Icon (Kaizen Site Demo)"

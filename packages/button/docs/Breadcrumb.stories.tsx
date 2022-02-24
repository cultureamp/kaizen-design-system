import { Heading } from "@kaizen/component-library"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { Breadcrumb } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import styles from "./styles.module.scss"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/Breadcrumb`,
  component: Breadcrumb,
  args: { label: "1" },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { Breadcrumb } from "@kaizen/button".',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=13555%3A0"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemoBreadcrumb = args => (
  <>
    <Heading variant="heading-3" tag="h1">
      Default
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Base
        </Heading>
        <br />
        <Breadcrumb {...args} />
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Active
        </Heading>
        <br />
        <Breadcrumb isActive {...args} />
      </div>
    </div>
  </>
)

DefaultKaizenSiteDemoBreadcrumb.storyName =
  "Default Breadcrumb (Kaizen Site Demo)"

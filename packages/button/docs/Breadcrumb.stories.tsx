import { Heading } from "@kaizen/component-library"
import arrowBackward from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import arrowForward from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { Breadcrumb } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import styles from "./styles.module.scss"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.button}/Breadcrumb`,
  component: Breadcrumb,
  args: {},
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component:
          'import { Breadcrumb } from "@kaizen/button". This IconButton supersedes "@kaizen/draft-button".',
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
    <Breadcrumb icon={arrowBackward} {...args} />
  </>
)

export const LightBreadcrumb = args => (
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
        <div className={styles.breadcrumbContainer}>
          <Breadcrumb icon={arrowBackward} {...args} />{" "}
          <Breadcrumb icon={arrowForward} {...args} />
        </div>
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Disabled
        </Heading>
        <br />
        <div className={styles.breadcrumbContainer}>
          <Breadcrumb icon={arrowBackward} disabled {...args} />{" "}
          <Breadcrumb icon={arrowForward} disabled {...args} />
        </div>
      </div>
    </div>
  </>
)

export const ReversedBreadcrumb = args => (
  <>
    <Heading variant="heading-3" tag="h1" color="white">
      Default
    </Heading>
    <div className={styles.buttonSection}>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Base
        </Heading>
        <br />
        <div className={styles.breadcrumbContainer}>
          <Breadcrumb icon={arrowBackward} reversed {...args} />{" "}
          <Breadcrumb icon={arrowForward} reversed {...args} />
        </div>
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Disabled
        </Heading>
        <br />
        <div className={styles.breadcrumbContainer}>
          <Breadcrumb icon={arrowBackward} reversed disabled {...args} />{" "}
          <Breadcrumb icon={arrowForward} reversed disabled {...args} />
        </div>
      </div>
    </div>
  </>
)

ReversedBreadcrumb.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

DefaultKaizenSiteDemoBreadcrumb.storyName =
  "Default Breadcrumb (Kaizen Site Demo)"

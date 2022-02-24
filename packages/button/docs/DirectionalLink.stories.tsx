import { Heading } from "@kaizen/component-library"
import arrowBackward from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import arrowForward from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { DirectionalLink } from ".."
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import styles from "./styles.module.scss"

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
    <DirectionalLink icon={arrowBackward} {...args} />
  </>
)

export const LightDirectionalLink = args => (
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
        <div className={styles.DirectionalLinkContainer}>
          <DirectionalLink icon={arrowBackward} {...args} />{" "}
          <DirectionalLink icon={arrowForward} {...args} />
        </div>
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2">
          Disabled
        </Heading>
        <br />
        <div className={styles.DirectionalLinkContainer}>
          <DirectionalLink icon={arrowBackward} disabled {...args} />{" "}
          <DirectionalLink icon={arrowForward} disabled {...args} />
        </div>
      </div>
    </div>
  </>
)

export const ReversedDirectionalLink = args => (
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
        <div className={styles.DirectionalLinkContainer}>
          <DirectionalLink icon={arrowBackward} reversed {...args} />{" "}
          <DirectionalLink icon={arrowForward} reversed {...args} />
        </div>
      </div>
      <div className={styles.buttonState}>
        <Heading variant="heading-5" tag="h2" color="white">
          Disabled
        </Heading>
        <br />
        <div className={styles.DirectionalLinkContainer}>
          <DirectionalLink icon={arrowBackward} reversed disabled {...args} />{" "}
          <DirectionalLink icon={arrowForward} reversed disabled {...args} />
        </div>
      </div>
    </div>
  </>
)

ReversedDirectionalLink.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

DefaultKaizenSiteDemoDirectionalLink.storyName =
  "Default DirectionalLink (Kaizen Site Demo)"

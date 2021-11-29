import * as React from "react"

import { Button } from "@kaizen/draft-button"
import { ToggleSwitchField, ToggledStatus } from "@kaizen/draft-form"
import { Badge, BadgeAnimated } from "@kaizen/draft-badge"
import { withDesign } from "storybook-addon-designs"
import { Heading } from "@kaizen/component-library"
import { defaultStoryMapper } from "@storybook/api/dist/ts3.9/modules/refs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import styles from "./styles.module.scss"

export default {
  title: `${CATEGORIES.components}/Badge`,
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'import { Badge } from "@kaizen/draft-badge"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14398"
    ),
  },
  decorators: [withDesign],
}

const BadgeStoryWrapper: React.FunctionComponent<{
  children: (badgeCount: string, useAnimation: boolean) => void
}> = ({ children }) => {
  const [useAnimation, setUseAnimation] = React.useState(false)
  const [badgeCount, setBadgeCount] = React.useState(1)

  return (
    <div style={{ padding: "20px" }}>
      {children(String(badgeCount), useAnimation)}
      <div style={{ height: "40px" }} />
      <ToggleSwitchField
        toggledStatus={useAnimation ? ToggledStatus.ON : ToggledStatus.OFF}
        onToggle={() => {
          setUseAnimation(s => !s)
        }}
        labelText="Use Animation"
      />
      {useAnimation && (
        <Button
          label="Add Badge Number"
          onClick={() => {
            setBadgeCount(s => s + 1)
          }}
        />
      )}
    </div>
  )
}

export const DefaultStory = args => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated {...args}>{badgeCount}</BadgeAnimated>
      ) : (
        <Badge {...args}>{badgeCount}</Badge>
      )
    }
  </BadgeStoryWrapper>
)

DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const LightBadges = () => (
  <>
    <Heading style={{ marginBottom: "2rem" }} variant="heading-2" tag="h1">
      Light Badges
    </Heading>
    <Heading variant="heading-3" tag="h2">
      Default
    </Heading>
    <div className={styles.badgeSection}>
      <div className={styles.badgeSize}>
        <Heading variant="heading-5" tag="h3">
          Small
        </Heading>
        <Badge variant="default">3</Badge>
      </div>
      <div className={styles.badgeSize}>
        <Heading variant="heading-5" tag="h3">
          Large
        </Heading>
        <Badge size="large" variant="default">
          3
        </Badge>
      </div>
    </div>
    <Heading variant="heading-3" tag="h2">
      Active
    </Heading>
    <div className={styles.badgeSection}>
      <div className={styles.badgeSize}>
        <Heading variant="heading-5" tag="h3">
          Small
        </Heading>
        <Badge variant="active">3</Badge>
      </div>
    </div>
    <Heading variant="heading-3" tag="h2">
      Dot
    </Heading>
    <div className={styles.badgeSection}>
      <div className={styles.badgeSize}>
        <Heading variant="heading-5" tag="h3">
          Small
        </Heading>
        <Badge variant="dot">3</Badge>
      </div>
    </div>
  </>
)
export const ReversedBadges = () => (
  <>
    <Heading
      color="white"
      style={{ marginBottom: "2rem" }}
      variant="heading-2"
      tag="h1"
    >
      Reversed Badges
    </Heading>
    <Heading color="white" variant="heading-3" tag="h2">
      Default
    </Heading>
    <div className={styles.badgeSection}>
      <div className={styles.badgeSize}>
        <Heading color="white" variant="heading-5" tag="h3">
          Small
        </Heading>
        <Badge reversed variant="default">
          3
        </Badge>
      </div>
      <div className={styles.badgeSize}>
        <Heading color="white" variant="heading-5" tag="h3">
          Large
        </Heading>
        <Badge reversed size="large" variant="default">
          3
        </Badge>
      </div>
    </div>
    <Heading color="white" variant="heading-3" tag="h2">
      Active
    </Heading>
    <div className={styles.badgeSection}>
      <div className={styles.badgeSize}>
        <Heading color="white" variant="heading-5" tag="h3">
          Small
        </Heading>
        <Badge reversed variant="active">
          3
        </Badge>
      </div>
    </div>
    <Heading color="white" variant="heading-3" tag="h2">
      Dot
    </Heading>
    <div className={styles.badgeSection}>
      <div className={styles.badgeSize}>
        <Heading color="white" variant="heading-5" tag="h3">
          Small
        </Heading>
        <Badge reversed variant="dot">
          3
        </Badge>
      </div>
    </div>
  </>
)

ReversedBadges.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

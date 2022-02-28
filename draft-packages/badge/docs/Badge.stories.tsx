import React from "react"
import { Button } from "@kaizen/button"
import { ToggleSwitchField, ToggledStatus } from "@kaizen/draft-form"
import { Badge, BadgeAnimated } from "@kaizen/draft-badge"
import { withDesign } from "storybook-addon-designs"
import { Heading } from "@kaizen/component-library"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
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
    actions: {
      argTypesRegex: "^on.*",
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14398"
    ),
  },
  decorators: [withDesign],
}

const BadgeAnimationStoryWrapper: React.FunctionComponent<{
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

const BadgeStoryWrapper: React.FunctionComponent<{
  children
}> = ({ children }) => <div style={{ padding: "20px" }}>{children}</div>

export const DefaultStory = args => (
  <BadgeAnimationStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated {...args}>{badgeCount}</BadgeAnimated>
      ) : (
        <Badge {...args}>{badgeCount}</Badge>
      )
    }
  </BadgeAnimationStoryWrapper>
)
DefaultStory.storyName = "Default (Kaizen Demo)"

export const StickerSheetDefault = () => (
  <StoryWrapper>
    <StoryWrapper.RowHeader headings={["Default", "Active", "Dot"]} />
    <StoryWrapper.Row rowTitle="Small">
      <BadgeStoryWrapper>
        <Badge size="small" variant="default">
          3
        </Badge>
      </BadgeStoryWrapper>
      <BadgeStoryWrapper>
        <Badge size="small" variant="active">
          3
        </Badge>
      </BadgeStoryWrapper>
      <BadgeStoryWrapper>
        <Badge size="small" variant="dot"></Badge>
      </BadgeStoryWrapper>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Large">
      <Badge size="large" variant="default">
        3
      </Badge>
    </StoryWrapper.Row>
  </StoryWrapper>
)

StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = () => (
  <StoryWrapper isReversed>
    <StoryWrapper.RowHeader headings={["Default", "Active", "Dot"]} />
    <StoryWrapper.Row rowTitle="Small">
      <BadgeStoryWrapper>
        <Badge size="small" variant="default" reversed>
          3
        </Badge>
      </BadgeStoryWrapper>
      <BadgeStoryWrapper>
        <Badge size="small" variant="active" reversed>
          3
        </Badge>
      </BadgeStoryWrapper>
      <BadgeStoryWrapper>
        <Badge size="small" variant="dot" reversed></Badge>
      </BadgeStoryWrapper>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Large">
      <Badge size="large" variant="default" reversed>
        3
      </Badge>
    </StoryWrapper.Row>
  </StoryWrapper>
)

StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"

StickerSheetReversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
  chromatic: { disable: false },
}

import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Button } from "@kaizen/button"
import { Badge, BadgeAnimated } from "@kaizen/draft-badge"
import { ToggleSwitchField, ToggledStatus } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

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
type BadgeAnimationStoryWrapperProps = {
  children: (badgeCount: string, useAnimation: boolean) => void
}
const BadgeAnimationStoryWrapper = ({
  children,
}: BadgeAnimationStoryWrapperProps): JSX.Element => {
  const [useAnimation, setUseAnimation] = React.useState(false)
  const [badgeCount, setBadgeCount] = React.useState(1)

  return (
    <>
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
    </>
  )
}

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

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Default", "Active", "Dot"]} />
    <StoryWrapper.Row rowTitle="Small">
      <div>
        <Badge size="small" variant="default" reversed={isReversed}>
          3
        </Badge>
      </div>
      <div>
        <Badge size="small" variant="active" reversed={isReversed}>
          3
        </Badge>
      </div>
      <div>
        <Badge size="small" variant="dot" reversed={isReversed} />
      </div>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Large">
      <Badge size="large" variant="default" reversed={isReversed}>
        3
      </Badge>
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}

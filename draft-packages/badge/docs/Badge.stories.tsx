import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { Badge, BadgeAnimated, BadgeProps } from "@kaizen/draft-badge"
import { ToggleSwitchField, ToggledStatus } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: "Components/Badge",
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
  },
} satisfies Meta<typeof Badge>

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
        onToggle={(): void => setUseAnimation(s => !s)}
        labelText="Use Animation"
      />
      {useAnimation && (
        <Button
          label="Add Badge Number"
          onClick={(): void => setBadgeCount(s => s + 1)}
        />
      )}
    </>
  )
}

export const DefaultStory: StoryFn<Omit<BadgeProps, "children">> = ({
  variant,
  ...args
}) => (
  <BadgeAnimationStoryWrapper>
    {(badgeCount, useAnimation): JSX.Element => {
      if (useAnimation) {
        return variant === "dot" ? (
          <BadgeAnimated variant={variant} {...args} />
        ) : (
          <BadgeAnimated variant={variant} {...args}>
            {badgeCount}
          </BadgeAnimated>
        )
      }

      return variant === "dot" ? (
        <Badge variant={variant} {...args} />
      ) : (
        <Badge variant={variant} {...args}>
          {badgeCount}
        </Badge>
      )
    }}
  </BadgeAnimationStoryWrapper>
)
DefaultStory.storyName = "Default (Kaizen Demo)"

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
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

import * as React from "react"

import { Button } from "@kaizen/draft-button"
import { ToggleSwitchField, ToggledStatus } from "@kaizen/draft-form"
import { Badge, BadgeAnimated } from "@kaizen/draft-badge"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'import { Badge } from "@kaizen/draft-badge"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=1929%3A14398"
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

export const DefaultStory = () => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated variant="default">{badgeCount}</BadgeAnimated>
      ) : (
        <Badge variant="default">{badgeCount}</Badge>
      )
    }
  </BadgeStoryWrapper>
)

DefaultStory.storyName = "Default (Kaizen Site Demo)"

export const Active = () => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated variant="active">{badgeCount}</BadgeAnimated>
      ) : (
        <Badge variant="active">{badgeCount}</Badge>
      )
    }
  </BadgeStoryWrapper>
)

Active.storyName = "Active"

export const Dark = () => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated variant="dark">{badgeCount}</BadgeAnimated>
      ) : (
        <Badge variant="dark">{badgeCount}</Badge>
      )
    }
  </BadgeStoryWrapper>
)

Dark.storyName = "Dark"

export const Reversed = () => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated variant="default" reversed>
          {badgeCount}
        </BadgeAnimated>
      ) : (
        <Badge variant="default" reversed>
          {badgeCount}
        </Badge>
      )
    }
  </BadgeStoryWrapper>
)

Reversed.storyName = "Reversed"
Reversed.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const ReversedActive = () => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated variant="active" reversed>
          {badgeCount}
        </BadgeAnimated>
      ) : (
        <Badge variant="active" reversed>
          {badgeCount}
        </Badge>
      )
    }
  </BadgeStoryWrapper>
)

ReversedActive.storyName = "Reversed, Active"
ReversedActive.parameters = {
  backgrounds: {
    default: "Purple 700",
  },
}

export const LongerText = () => <Badge variant="default">2x</Badge>

LongerText.storyName = "Longer text"

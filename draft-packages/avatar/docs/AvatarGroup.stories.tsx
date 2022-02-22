import React from "react"
import { withDesign } from "storybook-addon-designs"
import { Heading } from "@kaizen/component-library"
import { AvatarGroup, AvatarList } from "../KaizenDraft/Avatar/AvatarGroup"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

import avatarGroupData from "./avatarGroupData.json"

export default {
  title: `${CATEGORIES.components}/Avatar/Avatar Group`,
  component: AvatarGroup,
  parameters: {
    docs: {
      description: {
        component: 'import { AvatarGroup } from "@kaizen/draft-avatar"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14305"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = args => <AvatarGroup {...args} />
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  maxVisible: 2,
  size: "medium",
  avatars: avatarGroupData["users"],
}

export const DesignSheetDefault = () => {
  const data = avatarGroupData["users"] as AvatarList
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, max-content))",
        gap: "2.5rem",
        alignItems: "flex-start",
        width: "auto",
      }}
    >
      <div>
        <Heading tag="h4" variant="heading-4">
          Large
        </Heading>
        <br />
        <AvatarGroup maxVisible={2} avatars={data} size="large" />
      </div>
      <div>
        <Heading tag="h4" variant="heading-4">
          Medium
        </Heading>
        <br />
        <AvatarGroup maxVisible={2} avatars={data} size="medium" />
      </div>
      <div>
        <Heading tag="h4" variant="heading-4">
          Small
        </Heading>
        <br />
        <AvatarGroup maxVisible={2} avatars={data} size="small" />
      </div>
    </div>
  )
}
DesignSheetDefault.storyName = "Design Sheet (default)"
DesignSheetDefault.parameters = { chromatic: { disable: false } }

export const DesignSheetReversed = () => {
  const data = avatarGroupData["company"] as AvatarList

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, max-content))",
        gap: "2.5rem",
        alignItems: "flex-start",
        width: "auto",
      }}
    >
      <div>
        <Heading tag="h4" color="white" variant="heading-4">
          Large
        </Heading>
        <br />
        <AvatarGroup maxVisible={2} avatars={data} size="large" />
      </div>
      <div>
        <Heading tag="h4" color="white" variant="heading-4">
          Medium
        </Heading>
        <br />
        <AvatarGroup maxVisible={2} avatars={data} size="medium" />
      </div>
      <div>
        <Heading tag="h4" color="white" variant="heading-4">
          Small
        </Heading>
        <br />
        <AvatarGroup maxVisible={2} avatars={data} size="small" />
      </div>
    </div>
  )
}
DesignSheetReversed.storyName = "Design Sheet (reversed)"
DesignSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}

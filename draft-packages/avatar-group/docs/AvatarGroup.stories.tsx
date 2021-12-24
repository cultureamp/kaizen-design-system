import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { Heading } from "@kaizen/component-library"
import { AvatarGroup, AvatarList } from "../"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

import defaultAvatarData from "./defaultAvatarData.json"
import companyAvatarData from "./companyAvatarData.json"

export default {
  title: `${CATEGORIES.components}/AvatarGroup`,
  component: AvatarGroup,
  parameters: {
    docs: {
      description: {
        component:
          'import { AvatarGroup } from "@kaizen/draft-avatar-group" and pass in an array of `AvatarProps` to render a list. `size` is omitted from the avatars props and is set on the component level.',
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
  avatars: defaultAvatarData,
}

export const DesignSheetDefault = () => {
  const data = defaultAvatarData as AvatarList
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

export const DesignSheetReversed = () => {
  const data = companyAvatarData as AvatarList

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
}

import React from "react"
import { withDesign } from "storybook-addon-designs"
import { Avatar } from "../../avatar/KaizenDraft/Avatar/Avatar"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/Avatar/Avatar`,
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'import { Avatar } from "@kaizen/draft-avatar"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A14305"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = args => <Avatar {...args} />
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = {
  avatarSrc:
    "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png",
  fullName: "Jane Doe",
  disableInitials: false,
  isCompany: false,
  isCurrentUser: false,
}
DefaultStory.parameters = { controls: { exclude: ["isCompany"] } }

export const StickerSheetDefault = () => (
  <>
    <StoryWrapper>
      <StoryWrapper.RowHeader
        headings={[
          "Photo Personal",
          "Intials Personal",
          "Initals Generic",
          "Default User",
        ]}
      />
      <StoryWrapper.Row rowTitle="XX-Large">
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser
          size="xxlarge"
          avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser
          size="xxlarge"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser={false}
          size="xxlarge"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials
          isCurrentUser={false}
          size="xxlarge"
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="X-Large">
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser
          size="xlarge"
          avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser
          size="xlarge"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser={false}
          size="xlarge"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials
          isCurrentUser={false}
          size="xlarge"
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Large">
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser
          size="large"
          avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser
          size="large"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser={false}
          size="large"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials
          isCurrentUser={false}
          size="large"
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Medium">
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser
          size="medium"
          avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser
          size="medium"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser={false}
          size="medium"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials
          isCurrentUser={false}
          size="medium"
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Small">
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser
          size="small"
          avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser
          size="small"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials={false}
          isCurrentUser={false}
          size="small"
        />
        <Avatar
          fullName="Jane Doe"
          disableInitials
          isCurrentUser={false}
          size="small"
        />
      </StoryWrapper.Row>
    </StoryWrapper>
    <div style={{ marginTop: "4rem" }}>
      <StoryWrapper>
        <StoryWrapper.RowHeader
          headings={["Initals Unicode", "Initals Long", "Company Avatar"]}
        />
        <StoryWrapper.Row rowTitle="XX-Large">
          <Avatar
            fullName="李存信"
            disableInitials={false}
            isCurrentUser
            size="xxlarge"
          />
          <Avatar
            fullName="Spicy Jalapeno Bacon Ipsum Dolor Amet Aute Elit Chicken Mollit"
            disableInitials={false}
            isCurrentUser
            size="xxlarge"
          />
          <Avatar
            fullName="Hooli"
            avatarSrc="https://d1e7r7b0lb8p4d.cloudfront.net/third-party-logos/hooli-logo.svg"
            isCompany
            size="xxlarge"
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="X-Large">
          <Avatar
            fullName="李存信"
            disableInitials={false}
            isCurrentUser
            size="xlarge"
          />
          <Avatar
            fullName="Spicy Jalapeno Bacon Ipsum Dolor Amet Aute Elit Chicken Mollit"
            disableInitials={false}
            isCurrentUser
            size="xlarge"
          />
          <Avatar
            fullName="Hooli"
            avatarSrc="https://d1e7r7b0lb8p4d.cloudfront.net/third-party-logos/hooli-logo.svg"
            isCompany
            size="xlarge"
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Large">
          <Avatar
            fullName="李存信"
            disableInitials={false}
            isCurrentUser
            size="large"
          />
          <Avatar
            fullName="Spicy Jalapeno Bacon Ipsum Dolor Amet Aute Elit Chicken Mollit"
            disableInitials={false}
            isCurrentUser
            size="large"
          />
          <Avatar
            fullName="Hooli"
            avatarSrc="https://d1e7r7b0lb8p4d.cloudfront.net/third-party-logos/hooli-logo.svg"
            isCompany
            size="large"
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Medium">
          <Avatar
            fullName="李存信"
            disableInitials={false}
            isCurrentUser
            size="medium"
          />
          <Avatar
            fullName="Spicy Jalapeno Bacon Ipsum Dolor Amet Aute Elit Chicken Mollit"
            disableInitials={false}
            isCurrentUser
            size="medium"
          />
          <Avatar
            fullName="Hooli"
            avatarSrc="https://d1e7r7b0lb8p4d.cloudfront.net/third-party-logos/hooli-logo.svg"
            isCompany
            size="medium"
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Small">
          <Avatar
            fullName="李存信"
            disableInitials={false}
            isCurrentUser
            size="small"
          />
          <Avatar
            fullName="Spicy Jalapeno Bacon Ipsum Dolor Amet Aute Elit Chicken Mollit"
            disableInitials={false}
            isCurrentUser
            size="small"
          />
          <Avatar
            fullName="Hooli"
            avatarSrc="https://d1e7r7b0lb8p4d.cloudfront.net/third-party-logos/hooli-logo.svg"
            isCompany
            size="small"
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </div>
  </>
)

StickerSheetDefault.storyName = "Sticker Sheet (Default)"

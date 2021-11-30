import { Tag } from "@kaizen/draft-tag"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { Avatar } from "@kaizen/draft-avatar"
import { assetUrl } from "@kaizen/hosted-assets"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    {children}
  </div>
)

const StorySection = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "grid", gridGap: "1rem" }}>{children}</div>
)

export default {
  title: `${CATEGORIES.components}/Tag`,
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'import { Tag } from "@kaizen/draft-tag"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14473%3A90332"
    ),
  },
  decorators: [withDesign],
}

export const DefaultMediumKaizenSiteDemo = args => (
  <StoryContainer>
    <Tag variant="default" {...args}>
      Default
    </Tag>
  </StoryContainer>
)

DefaultMediumKaizenSiteDemo.storyName = "Default - Medium (Kaizen Site Demo)"

export const Status = () => (
  <StoryContainer>
    <StorySection>
      <Tag variant="default" size="small">
        Default
      </Tag>
      <Tag variant="default" size="medium">
        Default
      </Tag>
    </StorySection>
    <StorySection>
      <Tag variant="statusLive" size="small">
        Live
      </Tag>
      <Tag variant="statusLive" size="medium">
        Live
      </Tag>
    </StorySection>
    <StorySection>
      <Tag variant="statusDraft" size="small">
        Draft
      </Tag>
      <Tag variant="statusDraft" size="medium">
        Draft
      </Tag>
    </StorySection>
  </StoryContainer>
)

Status.storyName = "Status"

export const Sentiment = () => (
  <StoryContainer>
    <StorySection>
      <Tag variant="sentimentNeutral" size="small">
        Neutral
      </Tag>
      <Tag variant="sentimentNeutral" size="medium">
        Neutral
      </Tag>
    </StorySection>
    <StorySection>
      <Tag variant="sentimentPositive" size="small">
        Postive
      </Tag>
      <Tag variant="sentimentPositive" size="medium">
        Postive
      </Tag>
    </StorySection>
    <StorySection>
      <Tag variant="sentimentNegative" size="small">
        Negative
      </Tag>
      <Tag variant="sentimentNegative" size="medium">
        Negative
      </Tag>
    </StorySection>
  </StoryContainer>
)

Sentiment.storyName = "Sentiment"

export const Validation = () => (
  <StoryContainer>
    <Tag variant="validationInformative">Informative</Tag>
    <Tag variant="validationPositive">Positive</Tag>
    <Tag variant="validationNegative">Negative</Tag>
    <Tag variant="validationCautionary">Cautionary</Tag>
  </StoryContainer>
)

Validation.storyName = "Validation"

export const Profile = () => (
  <StoryContainer>
    <Tag
      variant="profile"
      avatar={
        <Avatar
          size="small"
          avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
          fullName="Jane Doe"
        />
      }
      dismissible
    >
      Jane Doe
    </Tag>
    <Tag variant="profile" avatar={{}} dismissible>
      Jane Doe
    </Tag>
  </StoryContainer>
)

Profile.storyName = "Profile"

export const Dismissible = () => (
  <StoryContainer>
    <Tag variant="default" size="small" dismissible>
      Base
    </Tag>
  </StoryContainer>
)

Dismissible.storyName = "Dismissible"

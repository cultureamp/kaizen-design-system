import React from "react"
import { Story } from "@storybook/react"
import { InlineNotification } from "@kaizen/notification"
import { withDesign } from "storybook-addon-designs"
import { Heading } from "@kaizen/component-library"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.notification}/Inline Notification`,
  component: InlineNotification,
  parameters: {
    docs: {
      description: {
        component: 'import { InlineNotification } from "@kaizen/notification";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=13877%3A66008"
    ),
  },
  decorators: [withDesign],
}

export const KaizenDemo = () => (
  <InlineNotification
    type="positive"
    title="Success"
    automationId="notification1"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)
KaizenDemo.storyName = "Default (Kaizen Demo)"
const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <Heading
        variant="heading-3"
        tag="h1"
        color={isReversed ? "white" : "dark"}
      >
        Prominent
      </Heading>
      <Heading
        variant="heading-5"
        tag="h2"
        color={isReversed ? "white" : "dark"}
      >
        Single Line
      </Heading>
      <StoryWrapper.RowHeader headings={["Dismissible", "Persistant"]} />
      <StoryWrapper.Row rowTitle="Informative">
        <InlineNotification
          type="informative"
          title="Informative title"
          automationId="notification1"
        >
          "All Employees - North America" status has been changed to 'Archived'.
          <a href="/">View all</a>
        </InlineNotification>
        <InlineNotification
          type="informative"
          title="Informative title"
          automationId="notification1"
          persistent
        >
          "All Employees - North America" status has been changed to 'Archived'.
          <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Positive">
        <InlineNotification
          type="positive"
          title="Positive title"
          automationId="notification1"
        >
          Emails will be sent notifying coaches and inviting reviewers to give
          their feedback. <a href="/">View all</a>
        </InlineNotification>
        <InlineNotification
          type="positive"
          title="Positive title"
          automationId="notification1"
          persistent
        >
          Emails will be sent notifying coaches and inviting reviewers to give
          their feedback.
          <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Negative">
        <InlineNotification
          type="negative"
          title="Negative title"
          automationId="notification1"
        >
          Something went wrong while validating and analyzing user data.{" "}
          <a href="/">View all</a>
        </InlineNotification>
        <InlineNotification
          type="negative"
          title="Negative title"
          automationId="notification1"
          persistent
        >
          Something went wrong while validating and analyzing user data.
          <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Cautionary">
        <InlineNotification
          type="cautionary"
          title="Cautionary title"
          automationId="notification1"
        >
          The syncing process can take some time to complete. Keep this window
          open until complete. <a href="/">View all</a>
        </InlineNotification>
        <InlineNotification
          type="cautionary"
          title="Cautionary title"
          automationId="notification1"
          persistent
        >
          The syncing process can take some time to complete. Keep this window
          open until complete.
          <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
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

import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { GlobalNotification } from "@kaizen/notification"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Components/Notification/Global Notification",
  component: GlobalNotification,
  parameters: {
    docs: {
      description: {
        component: 'import { GlobalNotification } from "@kaizen/notification";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=1929%3A39077"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory: ComponentStory<typeof GlobalNotification> = args => (
  <GlobalNotification {...args}>
    Emails will be sent notifying coaches and inviting reviewers to give their
    feedback. <a href="/">View all</a>
  </GlobalNotification>
)
DefaultStory.storyName = "Global Notification"
DefaultStory.args = {
  type: "positive",
  persistent: true,
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Persistent"]} />
      <StoryWrapper.Row rowTitle="Positive">
        <GlobalNotification
          type="positive"
          automationId="notification1"
          persistent
        >
          Emails will be sent notifying coaches and inviting reviewers to give
          their feedback. <a href="/">View all</a>
        </GlobalNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Informative">
        <GlobalNotification
          type="informative"
          automationId="notification2"
          persistent
        >
          [Survey name]'s status has been changed to 'Archived'.{" "}
          <a href="/">View all</a>
        </GlobalNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Cautionary">
        <GlobalNotification
          type="cautionary"
          automationId="notification3"
          persistent
        >
          The syncing process can take some time to complete. Keep this window
          open until complete. <a href="/">View all</a>
        </GlobalNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Negative">
        <GlobalNotification
          type="negative"
          automationId="notification4"
          persistent
        >
          Something went wrong while validating and analyzing user data.{" "}
          <a href="/">View all</a>.
        </GlobalNotification>
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Dismissible"]} />
      <StoryWrapper.Row rowTitle="Positive">
        <GlobalNotification type="positive" automationId="notification1">
          Emails will be sent notifying coaches and inviting reviewers to give
          their feedback. <a href="/">View all</a>
        </GlobalNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Informative">
        <GlobalNotification type="informative" automationId="notification2">
          [Survey name]'s status has been changed to 'Archived'.{" "}
          <a href="/">View all</a>
        </GlobalNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Cautionary">
        <GlobalNotification type="cautionary" automationId="notification3">
          The syncing process can take some time to complete. Keep this window
          open until complete. <a href="/">View all</a>
        </GlobalNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Negative">
        <GlobalNotification type="negative" automationId="notification4">
          Something went wrong while validating and analyzing user data.{" "}
          <a href="/">View all</a>.
        </GlobalNotification>
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)
export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}

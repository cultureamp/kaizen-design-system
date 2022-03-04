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

export const DefaultKaizenDemo = props => (
  <InlineNotification type="positive" title="Success" {...props}>
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)
DefaultKaizenDemo.storyName = "Default (Kaizen Demo)"

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
        variant="heading-4"
        tag="h2"
        color={isReversed ? "white" : "dark"}
      >
        Single Line
      </Heading>
      <StoryWrapper.RowHeader headings={["Dismissible"]} />
      <StoryWrapper.Row rowTitle="Informative">
        <InlineNotification type="informative" title="Informative title">
          "All Employees - North America" status has been changed to 'Archived'.
          <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Positive">
        <InlineNotification type="positive" title="Positive title">
          Emails will be sent notifying coaches and inviting reviewers to give
          their feedback. <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Negative">
        <InlineNotification type="negative" title="Negative title">
          Something went wrong while validating and analyzing user data.{" "}
          <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Cautionary">
        <InlineNotification type="cautionary" title="Cautionary title">
          The syncing process can take some time to complete. Keep this window
          open until complete. <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Persistent">
        <InlineNotification
          type="cautionary"
          title="Cautionary title"
          persistent
        >
          The syncing process can take some time to complete. Keep this window
          open until complete. <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <Heading
        variant="heading-4"
        tag="h2"
        color={isReversed ? "white" : "dark"}
      >
        Multi Line
      </Heading>
      <StoryWrapper.RowHeader headings={["Dismissible"]} />
      <StoryWrapper.Row rowTitle="Informative">
        <InlineNotification
          type="informative"
          title="Informative title"
          forceMultiline
        >
          "All Employees - North America" status has been changed to 'Archived'.
          <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Positive">
        <InlineNotification
          type="positive"
          title="Positive title"
          forceMultiline
        >
          Emails will be sent notifying coaches and inviting reviewers to give
          their feedback. <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Negative">
        <InlineNotification
          type="negative"
          title="Negative title"
          forceMultiline
        >
          Something went wrong while validating and analyzing user data.{" "}
          <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Cautionary">
        <InlineNotification
          type="cautionary"
          title="Cautionary title"
          forceMultiline
        >
          The syncing process can take some time to complete. Keep this window
          open until complete. <a href="/">View all</a>
        </InlineNotification>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Persistent">
        <InlineNotification
          type="cautionary"
          title="Cautionary title"
          forceMultiline
          persistent
        >
          The syncing process can take some time to complete. Keep this window
          open until complete. <a href="/">View all</a>
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

export const AutohideDemo = props => (
  <InlineNotification
    type="positive"
    title="Success"
    {...props}
    autohide
    autohideDelay="short"
  >
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)
AutohideDemo.storyName = "Autohide Demo"

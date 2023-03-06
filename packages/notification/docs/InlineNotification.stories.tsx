import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { InlineNotification } from "@kaizen/notification"
import { Heading, HeadingProps } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Components/Notification/Inline Notification",
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
}

export const DefaultKaizenDemo: ComponentStory<
  typeof InlineNotification
> = props => (
  <InlineNotification {...props}>
    New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
    <a href="/">Manage users is now available</a>
  </InlineNotification>
)
DefaultKaizenDemo.storyName = "Default (Kaizen Demo)"
DefaultKaizenDemo.args = {
  type: "positive",
  title: "Success",
}

const customHeadingProps: HeadingProps = {
  variant: "heading-6",
  tag: "h2",
  children: "Custom",
}
export const CustomHeadingLevel: ComponentStory<
  typeof InlineNotification
> = props => (
  <InlineNotification headingProps={customHeadingProps} {...props}>
    New user data
  </InlineNotification>
)
CustomHeadingLevel.storyName = "Custom heading level"
CustomHeadingLevel.args = {
  type: "positive",
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const forceMultilineText = (
    <>
      This is a short line which we want to see underneath the notification
      heading.
      <ol>
        <li>Contact support</li>
        <li>Contact your admin</li>
      </ol>
    </>
  )
  const multilineText = (
    <>
      There’s a problem connecting to your HRIS. Check your HRIS is working and
      check your <a href="/">integration settings</a>, or if you require more
      assistance please <a href="/">contact support</a>... or just don't do
      anything and observe that this notification contains an absurd amount of
      text that is purposely verbose in order to demonstrate that verbosity is,
      in most cases, just in general really, i guess it's debatable, unnecessary
      and to demonstrate that verbosity makes this notification's body text spit
      into multiple lines because there is, surely, unequivocally, no way that
      all of this can fit into one line of text on an average screen...
    </>
  )
  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <Heading
          variant="heading-3"
          tag="h1"
          color={isReversed ? "white" : "dark"}
        >
          Prominent
        </Heading>
        <StoryWrapper.Row rowTitle="Informative">
          <InlineNotification type="informative" title="Informative title">
            "All Employees - North America" status has been changed to
            'Archived'.
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
        <StoryWrapper.Row rowTitle="Multiline">
          <InlineNotification
            type="positive"
            title="Positive title"
            forceMultiline
          >
            {multilineText}
          </InlineNotification>
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Forced Multiline">
          <InlineNotification
            type="negative"
            title="Negative title"
            forceMultiline
          >
            {forceMultilineText}
          </InlineNotification>
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
  )
}

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

export const AutohideDemo: ComponentStory<
  typeof InlineNotification
> = props => (
  <>
    <InlineNotification
      title="Success"
      {...props}
      autohide
      autohideDelay="short"
    >
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{" "}
      <a href="/">Manage users is now available</a>
    </InlineNotification>
    <p>Content below the notification</p>
  </>
)
AutohideDemo.args = {
  type: "positive",
}

import React from "react"
import { StoryFn, StoryObj } from "@storybook/react"
import { InlineNotification } from "@kaizen/notification"
import { Heading, HeadingProps } from "@kaizen/typography"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"

const meta = {
  tags: ["autodocs"],
  title: "Components/Notification/Inline Notification",
  component: InlineNotification,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/notification",
      "import { InlineNotification } from `@kaizen/notification`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/notification/src",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-39912&t=pCbdJNgUOTYNCrEN-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093392",
    },
  },
}

export default meta

/**
 * An inline notification is a message object that presents timely information
 * within content areas as close as possible to the thing that it’s about.
 */
export const Playground: StoryObj<typeof meta> = {
  args: {
    type: "positive",
    title: "Success",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

const customHeadingProps: HeadingProps = {
  variant: "heading-6",
  tag: "h2",
  children: "Custom",
}
export const CustomHeadingLevel: StoryFn<typeof InlineNotification> = props => (
  <InlineNotification headingProps={customHeadingProps} {...props}>
    New user data
  </InlineNotification>
)
CustomHeadingLevel.storyName = "Custom heading level"
CustomHeadingLevel.args = {
  type: "positive",
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
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
      <StickerSheet isReversed={isReversed}>
        <Heading
          variant="heading-3"
          tag="h1"
          color={isReversed ? "white" : "dark"}
        >
          Prominent
        </Heading>
        <StickerSheet.Row rowTitle="Informative" isReversed={isReversed}>
          <InlineNotification type="informative" title="Informative title">
            "All Employees - North America" status has been changed to
            'Archived'.
            <a href="/">View all</a>
          </InlineNotification>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Subtle" isReversed={isReversed}>
          <InlineNotification
            type="informative"
            isSubtle
            title="Informative title"
            hideCloseIcon
          >
            "All Employees - North America" status has been changed to
            'Archived'. <a href="/">View all</a>
          </InlineNotification>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Positive" isReversed={isReversed}>
          <InlineNotification type="positive" title="Positive title">
            Emails will be sent notifying coaches and inviting reviewers to give
            their feedback. <a href="/">View all</a>
          </InlineNotification>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Negative" isReversed={isReversed}>
          <InlineNotification type="negative" title="Negative title">
            Something went wrong while validating and analyzing user data.{" "}
            <a href="/">View all</a>
          </InlineNotification>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Cautionary" isReversed={isReversed}>
          <InlineNotification type="cautionary" title="Cautionary title">
            The syncing process can take some time to complete. Keep this window
            open until complete. <a href="/">View all</a>
          </InlineNotification>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Persistent" isReversed={isReversed}>
          <InlineNotification
            type="cautionary"
            title="Cautionary title"
            persistent
          >
            The syncing process can take some time to complete. Keep this window
            open until complete. <a href="/">View all</a>
          </InlineNotification>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Multiline" isReversed={isReversed}>
          <InlineNotification
            type="positive"
            title="Positive title"
            forceMultiline
          >
            {multilineText}
          </InlineNotification>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Forced Multiline" isReversed={isReversed}>
          <InlineNotification
            type="negative"
            title="Negative title"
            forceMultiline
          >
            {forceMultilineText}
          </InlineNotification>
        </StickerSheet.Row>
      </StickerSheet>
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

export const AutohideDemo: StoryFn<typeof InlineNotification> = props => (
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

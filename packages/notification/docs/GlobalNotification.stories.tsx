import React from "react"
import { StoryFn, StoryObj } from "@storybook/react"
import { GlobalNotification } from "@kaizen/notification"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"

const meta = {
  tags: ["autodocs"],
  title: "Components/Notification/Global Notification",
  component: GlobalNotification,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/notification",
      "import { GlobalNotication } from `@kaizen/notification`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/notification/src",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-94185&t=pCbdJNgUOTYNCrEN-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082060757",
    },
  },
}

export default meta

/**
 *
 * A global notification is a message object used for system-level notifications
 * that inform the user about system status such as logging in and background
 * processes like data imports.
 */
export const Playground: StoryObj<typeof meta> = {
  args: {
    type: "positive",
    persistent: true,
    children: (
      <>
        Emails will be sent notifying coaches and inviting reviewers to give
        their feedback. <a href="/">View all</a>
      </>
    ),
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Persistent"]} />
      <StickerSheet.Row rowTitle="Positive" isReversed={isReversed}>
        <GlobalNotification
          type="positive"
          automationId="notification1"
          persistent
        >
          Emails will be sent notifying coaches and inviting reviewers to give
          their feedback. <a href="/">View all</a>
        </GlobalNotification>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Informative" isReversed={isReversed}>
        <GlobalNotification
          type="informative"
          automationId="notification2"
          persistent
        >
          [Survey name]'s status has been changed to 'Archived'.{" "}
          <a href="/">View all</a>
        </GlobalNotification>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Cautionary" isReversed={isReversed}>
        <GlobalNotification
          type="cautionary"
          automationId="notification3"
          persistent
        >
          The syncing process can take some time to complete. Keep this window
          open until complete. <a href="/">View all</a>
        </GlobalNotification>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Negative" isReversed={isReversed}>
        <GlobalNotification
          type="negative"
          automationId="notification4"
          persistent
        >
          Something went wrong while validating and analyzing user data.{" "}
          <a href="/">View all</a>.
        </GlobalNotification>
      </StickerSheet.Row>
    </StickerSheet>
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Dismissible"]} />
      <StickerSheet.Row rowTitle="Positive" isReversed={isReversed}>
        <GlobalNotification type="positive" automationId="notification1">
          Emails will be sent notifying coaches and inviting reviewers to give
          their feedback. <a href="/">View all</a>
        </GlobalNotification>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Informative" isReversed={isReversed}>
        <GlobalNotification type="informative" automationId="notification2">
          [Survey name]'s status has been changed to 'Archived'.{" "}
          <a href="/">View all</a>
        </GlobalNotification>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Cautionary" isReversed={isReversed}>
        <GlobalNotification type="cautionary" automationId="notification3">
          The syncing process can take some time to complete. Keep this window
          open until complete. <a href="/">View all</a>
        </GlobalNotification>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Negative" isReversed={isReversed}>
        <GlobalNotification type="negative" automationId="notification4">
          Something went wrong while validating and analyzing user data.{" "}
          <a href="/">View all</a>.
        </GlobalNotification>
      </StickerSheet.Row>
    </StickerSheet>
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

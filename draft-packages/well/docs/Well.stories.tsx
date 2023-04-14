import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Heading, Paragraph } from "../../../packages/typography"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { Well } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/Well",
  component: Well,
  args: {
    children: "Content",
  },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    actions: {
      argTypesRegex: "^on.*",
    },
    installation: [
      "npm install @kaizen/draft-well",
      "import { Well } from `@kaizen/draft-well`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/draft-packages/well",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-37851&t=DDzgfxEHtZWOOhro-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075604733/Well",
    },
    alternatives: [
      "components-card--docs",
      "components-notification-global-notification--docs",
      "components-notification-inline-notification--docs",
      "components-notification-toast-notification--docs",
    ],
  },
} satisfies Meta<typeof Well>

export default meta

/**
 * Wells are used as a visual container around secondary content.
 */
export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

const ExampleContent = (): JSX.Element => (
  <Paragraph tag="p" variant="body">
    This is just a sentence to fill the content area so that you have something
    to look at.
  </Paragraph>
)

const VariantsTemplate: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        <Well variant="default">
          <Heading variant="heading-4">Default</Heading>
          <ExampleContent />
        </Well>
        <Well variant="informative">
          <Heading variant="heading-4">Informative</Heading>
          <ExampleContent />
        </Well>
        <Well variant="positive">
          <Heading variant="heading-4">Positive</Heading>
          <ExampleContent />
        </Well>
      </StickerSheet.Row>
      <StickerSheet.Row>
        <Well variant="negative">
          <Heading variant="heading-4">Negative</Heading>
          <ExampleContent />
        </Well>
        <Well variant="cautionary">
          <Heading variant="heading-4">Cautionary</Heading>
          <ExampleContent />
        </Well>
        <Well variant="assertive">
          <Heading variant="heading-4">Assertive</Heading>
          <ExampleContent />
        </Well>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * <p>`default`, `informative`, `positive`, `negative`, `cautionary`, `assertive`</p>
 * <p>If no `variant` is specified, a `default` Well will be rendered.</p>
 */
export const Variants = VariantsTemplate.bind({})

export const BorderStyles: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        <Well variant="informative" borderStyle="solid">
          <Heading variant="heading-4">Solid (default)</Heading>
          <ExampleContent />
        </Well>
        <Well variant="informative" borderStyle="dashed">
          <Heading variant="heading-4">Dashed</Heading>
          <ExampleContent />
        </Well>
        <Well variant="informative" borderStyle="none">
          <Heading variant="heading-4">None</Heading>
          <ExampleContent />
        </Well>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * You can use `noMargin` to remove the default bottom margin (this is a dying pattern)
 */
export const NoMargin: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        <div className="border-dashed border-purple-200 border-default p-8">
          <Well>
            <Heading variant="heading-4">Default margin</Heading>
            <ExampleContent />
          </Well>
        </div>
        <div className="border-dashed border-purple-200 border-default p-8">
          <Well noMargin>
            <Heading variant="heading-4">No margin</Heading>
            <ExampleContent />
          </Well>
        </div>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * You can use `classNameOverride` to add additional classes to the container div and give your Well a default layout
 */
export const AddingStyles: StoryFn = () => (
  <Well classNameOverride="flex flex-col gap-8 p-8">
    <Heading variant="heading-4">Added padding + flex for gap</Heading>
    <ExampleContent />
  </Well>
)

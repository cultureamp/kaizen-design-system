import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Paragraph } from "../../../packages/typography"
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
    sourceCodeLink:
      "https://github.com/cultureamp/kaizen-design-system/tree/master/packages/button",
    figmaLink:
      "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-37851&t=DDzgfxEHtZWOOhro-0",
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
          <ExampleContent />
        </Well>
        <Well variant="informative">
          <ExampleContent />
        </Well>
        <Well variant="positive">
          <ExampleContent />
        </Well>
      </StickerSheet.Row>
      <StickerSheet.Row>
        <Well variant="negative">
          <ExampleContent />
        </Well>
        <Well variant="cautionary">
          <ExampleContent />
        </Well>
        <Well variant="assertive">
          <ExampleContent />
        </Well>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * <p>`default`, `informative`, `positive`, `negative`, `cautionary`, `assertive`</p>
 * <p>If no `variant` is specified, a `default` Well will be rendered.</p>
 * <p>For more information on when to use each variant, check out the [Component guidelines](https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075604733/Well).</p>
 */
export const Variants = VariantsTemplate.bind({})

export const Reversed = VariantsTemplate.bind({})
Reversed.parameters = {
  backgrounds: { default: "Purple 700" },
}

export const Borders: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <StickerSheet.Row>
        <Well variant="informative" borderStyle="solid">
          <ExampleContent />
        </Well>
        <Well variant="informative" borderStyle="dashed">
          <ExampleContent />
        </Well>
        <Well variant="informative" borderStyle="none">
          <ExampleContent />
        </Well>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

/**
 * You can use `classNameOverride` to add additional classes to the container div
 */
export const CustomisingStyles: StoryFn = () => (
  <StickerSheet>
    <StickerSheet.Body>
      <Well classNameOverride="flex flex-col p-8">
        <ExampleContent />
      </Well>
    </StickerSheet.Body>
  </StickerSheet>
)

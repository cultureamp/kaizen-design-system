import React from "react"
import { StoryFn, StoryObj } from "@storybook/react"
import { TextAreaField, TextField } from "@kaizen/draft-form"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { LoadingInput, LoadingHeading } from ".."

const meta = {
  tags: ["autodocs"],
  title: "Components/Loading/Loading Input",
  component: LoadingInput,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/loading-skeleton",
      "import { LoadingInput } from `@kaizen/loading-skeleton`",
    ],
    sourceCodeLink:
      "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/loading-skeleton/src/LoadingInput",
    figmaLink:
      "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-39907&t=wEc5CYMSdMMfoeq9-0",
  },
}

export default meta

/**
 *  The Loading Input can be displayed in place of an input field while it is being loaded.
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

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header headings={["Loading Skeleton", "Example"]} />
    <StickerSheet.Row rowTitle="TextField" isReversed={isReversed}>
      <div className="min-w-[246px]">
        <LoadingHeading variant="heading-6" width={10} />
        <LoadingInput isReversed={isReversed} />
      </div>
      <TextField
        id="text-default"
        inputType="email"
        labelText="Default"
        reversed={isReversed}
      />
    </StickerSheet.Row>
    <StickerSheet.Row
      rowTitle="Text Area Field (custom height)"
      isReversed={isReversed}
    >
      <div>
        <LoadingHeading variant="heading-6" width={10} />
        <LoadingInput isReversed={isReversed} height={100} />
      </div>
      <TextAreaField
        id="text-default"
        labelText="Default"
        reversed={isReversed}
      />
    </StickerSheet.Row>
  </StickerSheet>
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

import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { Well } from "../index"

export default {
  title: "Stickersheets/Well",
} satisfies Meta<typeof Well>

const ExampleContent = (): JSX.Element => <>&nbsp;</>

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet heading="Well" isReversed={isReversed}>
    <StickerSheet.Header
      headings={["Solid Border", "Dashed Border", "Borderless"]}
    />
    <StickerSheet.Row rowTitle="Default">
      <Well variant="default" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="default" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="default" borderStyle="none">
        <ExampleContent />
      </Well>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Informative">
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
    <StickerSheet.Row rowTitle="Positive">
      <Well variant="positive" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="positive" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="positive" borderStyle="none">
        <ExampleContent />
      </Well>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Negative">
      <Well variant="negative" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="negative" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="negative" borderStyle="none">
        <ExampleContent />
      </Well>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Cautionary">
      <Well variant="cautionary" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="cautionary" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="cautionary" borderStyle="none">
        <ExampleContent />
      </Well>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="Assertive">
      <Well variant="assertive" borderStyle="solid">
        <ExampleContent />
      </Well>
      <Well variant="assertive" borderStyle="dashed">
        <ExampleContent />
      </Well>
      <Well variant="assertive" borderStyle="none">
        <ExampleContent />
      </Well>
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
  chromatic: { disable: false },
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
}

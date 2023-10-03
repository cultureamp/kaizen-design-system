import React from "react"
import { Meta } from "@storybook/react"
import { CheckboxField } from "~components/Checkbox/CheckboxField"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { CheckboxGroup, CheckboxGroupProps } from "../index"

export default {
  title: "KAIO-staging/Checkbox controls/CheckboxGroup",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const CheckboxGroupWrapped = ({
  labelText,
  reversed,
  ...props
}: CheckboxGroupProps): JSX.Element => (
  <CheckboxGroup labelText={labelText} reversed={reversed} {...props}>
    <CheckboxField labelText="Checkbox one" reversed={reversed} />
    <CheckboxField
      labelText="Checkbox two"
      reversed={reversed}
      checkedStatus="on"
    />
    <CheckboxField
      labelText="Checkbox three"
      reversed={reversed}
      checkedStatus="mixed"
    />
  </CheckboxGroup>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={["Default", "No Bottom Margin"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <>
            <CheckboxGroupWrapped
              reversed={isReversed}
              labelText="CheckboxGroup"
            />
            Next line
          </>
          <>
            <CheckboxGroupWrapped
              reversed={isReversed}
              labelText="CheckboxGroup"
              noBottomMargin
            />
            Next line
          </>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}

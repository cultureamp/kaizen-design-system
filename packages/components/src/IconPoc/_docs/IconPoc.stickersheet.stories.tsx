import React from "react"
import { Meta } from "@storybook/react"
import { Text } from "~components/Text"
import { Button, IconButton } from "~components/__actions__/v2"
import { Button as Buttonv3 } from "~components/__actions__/v3"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { IconPoc, IconPocProps } from "../index"

export default {
  title: "Components/IconPoc",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const names = [
      "star",
      "delete",
      "invalid",
    ]

    const customProps = [
      { className: "text-purple-500" },
      { size: "small" },
      { size: "medium" },
      { size: "large" },
    ] satisfies Array<Partial<IconPocProps>>

    return (
      <>
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={[
        // "Default", "Filled",
        "Color",
        "Small (16px/20opsz)", "Medium (20px/24opsz)", "Large (24px/40opsz)"
        // "Size 16", "Size 20", "Size 24"
      ]}
      hasVerticalHeadings
      />
      <StickerSheet.Body>
        {names.map(name => (
          <StickerSheet.Row key={name} rowTitle={name}>
          {customProps.map((props, index) => (
            <StickerSheet.Cell key={index}>
              <>
                <IconPoc name={name} {...props} />
                <IconPoc name={name} {...props} isFilled />
              </>
            </StickerSheet.Cell>
          ))}
        </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={[
          "Button v2", "Button v3", "Browser button", "IconButton v2", "Button v3 icon only"
        ]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Buttons">
          <Button
            label="I am the sun!"
            icon={<IconPoc name="clear_day" />}
            />
          <Buttonv3>
            <IconPoc name="clear_day" /> I am the sun!
          </Buttonv3>
          <button type="button">
            <IconPoc name="clear_day" /> I am the sun!
          </button>
          <IconButton
            label="I am the sun!"
            icon={<IconPoc name="clear_day" />}
            primary
          />
          <Buttonv3>
            <IconPoc name="clear_day" />
          </Buttonv3>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header headings={[
          "div", "p", "Text", "Wrapped text"
        ]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Text">
          <div>
            <IconPoc name="clear_day" /> I am the sun!
          </div>
          <p>
            <IconPoc name="clear_day" /> I am the sun!
          </p>
          <Text variant="body">
            <IconPoc name="clear_day" /> I am the sun!
          </Text>
          <div style={{ maxWidth: "100px" }}>
            <Text variant="body">
              <IconPoc name="clear_day" /> I should wrap around in my container!
            </Text>
          </div>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    </>
  )
},
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

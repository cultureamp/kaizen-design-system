import React from "react"
import { Meta } from "@storybook/react"
import { Heading } from "~components/Heading"
import { Text } from "~components/Text"
import { Button, IconButton } from "~components/__actions__/v2"
import { Button as Buttonv3 } from "~components/__actions__/v3"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { IconPoc, IconPocNoSize, IconPocProps } from "../index"

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

    const buttons = [
      {
        rowTitle: "size inherit",
        iconProps: {}
      },
      {
        rowTitle: "size small",
        iconProps: { size: "small" }
      },
      {
        rowTitle: "size medium",
        iconProps: { size: "medium" }
      },
      {
        rowTitle: "inherit size + weight",
        iconProps: { shouldInheritWeight: true }
      },
    ] satisfies Array<{ rowTitle: string, iconProps: Partial<IconPocProps> }>

    return (
      <>
      <div>
        <p>Notes:</p>
        <ul>
          <li>MUI default is 24px</li>
          <li>`size` prop currently set to `inherit`</li>
          <li>Existing button sizes do not change font size - future will</li>
          <li>
            Tailwind limitation for `font-weight: inherit` if we do not want it as default/prop.
            https://github.com/tailwindlabs/tailwindcss/discussions/6815
            `style` prop works though
          </li>
        </ul>
      </div>
    <StickerSheet isReversed={isReversed} heading="Icon POC">
      <StickerSheet.Header headings={[
        "Default",
        "Filled",
        "Color",
      ]}
      hasVerticalHeadings
      />
      <StickerSheet.Body>
        {names.map(name => (
          <StickerSheet.Row key={name} rowTitle={name}>
            <IconPoc name={name} />
            <IconPoc name={name} isFilled />
            <IconPoc name={name} className="text-red-500" />
        </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Sizes (weight 400/inherit)">
      <StickerSheet.Header headings={[
        "Small (16px)", "Medium (20px)", "Large (24px)",
        "Default (24px / inherit)",
        "Default in Heading 1",
      ]}
      hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Without prop (use className)">
          <StickerSheet.Cell>
            <IconPocNoSize name="delete" className="text-[16px]"/>
            <IconPocNoSize name="delete" className="text-[16px]" isFilled />
            <IconPocNoSize name="delete" className="text-[16px] ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight />
            <IconPocNoSize name="delete" className="text-[16px]" isFilled shouldInheritWeight />
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPocNoSize name="delete" className="text-[20px]" />
            <IconPocNoSize name="delete" className="text-[20px]" isFilled />
            <IconPocNoSize name="delete" className="text-[20px] ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight />
            <IconPocNoSize name="delete" className="text-[20px]" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPocNoSize name="delete" className="text-[24px]" />
            <IconPocNoSize name="delete" className="text-[24px]" isFilled />
            <IconPocNoSize name="delete" className="text-[24px] ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight/>
            <IconPocNoSize name="delete" className="text-[24px]" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPocNoSize name="delete" />
            <IconPocNoSize name="delete" isFilled />
            <IconPocNoSize name="delete" className="ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight/>
            <IconPocNoSize name="delete" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <Heading variant="heading-1" style={{ display: "inline"}}><IconPocNoSize name="delete" /> Heading 1</Heading>
            <Heading variant="heading-1" style={{ display: "inline"}}><IconPocNoSize name="delete" className="ml-16 pl-16 border-l-1 border-gray-400" shouldInheritWeight /> Heading 1</Heading>
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet.Body>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="With prop (baked in optical sizing; sans inherit)">
          <StickerSheet.Cell>
            <IconPoc name="delete" size="small" />
            <IconPoc name="delete" size="small" isFilled />
            <IconPoc name="delete" size="small" className="ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight />
            <IconPoc name="delete" size="small" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPoc name="delete" size="medium" />
            <IconPoc name="delete" size="medium" isFilled />
            <IconPoc name="delete" size="medium"  className="ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight/>
            <IconPoc name="delete" size="medium" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPoc name="delete" size="large" />
            <IconPoc name="delete" size="large" isFilled />
            <IconPoc name="delete" size="large"  className="ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight/>
            <IconPoc name="delete" size="large" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPoc name="delete" />
            <IconPoc name="delete" isFilled />
            <IconPoc name="delete" className="ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight />
            <IconPoc name="delete" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <Heading variant="heading-1" style={{ display: "inline"}}><IconPoc name="delete" /> Heading 1</Heading>
            <Heading variant="heading-1" style={{ display: "inline"}}><IconPoc name="delete" className="ml-16 pl-16 border-l-1 border-gray-400" shouldInheritWeight /> Heading 1</Heading>
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Buttons">
      <StickerSheet.Header headings={[
          "Button v2", "Button v2 small",
          "Button v3", "Button v3 small",
          "Browser button",
          "IconButton v2", "Button v3 icon only",
        ]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        {buttons.map(({ rowTitle, iconProps }) => (
          <StickerSheet.Row key={rowTitle} rowTitle={rowTitle}>
            <Button
              label="I am the sun!"
              icon={<IconPoc name="clear_day" {...iconProps} />}
              />
            <Button
              label="I am the sun!"
              icon={<IconPoc name="clear_day" {...iconProps} />}
              size="small"
              />
            <Buttonv3>
              <IconPoc name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <Buttonv3 size="small">
              <IconPoc name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <button type="button">
              <IconPoc name="clear_day" {...iconProps} /> I am the sun!
            </button>
            <IconButton
              label="I am the sun!"
              icon={<IconPoc name="clear_day" {...iconProps} />}
              primary
            />
            <Buttonv3>
              <IconPoc name="clear_day" {...iconProps} />
            </Buttonv3>
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Simulated future Button">
      <StickerSheet.Header headings={[
          "Large", "Medium", "Small",
        ]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        {buttons.map(({ rowTitle, iconProps }) => (
          <StickerSheet.Row key={rowTitle} rowTitle={rowTitle}>
            <Buttonv3 className="border-1 h-[48px] text-[16px] min-h-[unset]" style={{ fontWeight: 500 }}>
              <IconPoc name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <Buttonv3 className="border-1 h-[40px] text-[16px] min-h-[unset]" style={{ fontWeight: 500 }}>
              <IconPoc name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <Buttonv3 className="border-1 h-[32px] text-[12px] min-h-[unset]" style={{ fontWeight: 500 }}>
              <IconPoc name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Text">
      <StickerSheet.Header headings={[
          "div", "Text", "Wrapped text"
        ]}
      />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <div>
            <IconPoc name="clear_day" /> I am the sun!
          </div>
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

    <StickerSheet isReversed={isReversed} heading="Direction">
      <StickerSheet.Header headings={[
          "LTR", "RTL",
        ]}
      />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <div dir="ltr">
            <IconPoc name="arrow_forward" />
          </div>
          <div dir="rtl">
            <IconPoc name="arrow_forward" />
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

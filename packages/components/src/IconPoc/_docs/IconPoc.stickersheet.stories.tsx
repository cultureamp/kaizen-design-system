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
import { IconPocWithSize, IconPocBase, IconPocWithSizeProps, IconPocBaseProps } from "../index"

export default {
  title: "Components/IconPoc",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

export const IconPocBaseStory: StickerSheetStory = {
  render: ({ isReversed }) => {
    const names = [
      "star",
      "delete",
      "invalid",
    ]

    const sizes = [
      {},
      { className: "text-[16px]" },
      { className: "text-[20px]" },
      { className: "text-[24px]" },
    ] satisfies Array<Partial<IconPocBaseProps>>

    const buttons = [
      { className: "text-[20px]" }
    ] satisfies Array<Partial<IconPocBaseProps>>

    return (
      <>
      <div>
        <p>Notes:</p>
        <ul>
          <li>MUI default is 24px</li>
          <li>Existing button sizes do not change font size - future will</li>
        </ul>
      </div>
    <StickerSheet isReversed={isReversed} heading="Icon POC - Base">
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
            <IconPocBase name={name} />
            <IconPocBase name={name} isFilled />
            <IconPocBase name={name} className="text-red-500" />
        </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Sizes (weight 400) - consumer styled">
      <StickerSheet.Header headings={[
        "Default (MUI 24px)",
        "Small (16px)", "Medium (20px)", "Large (24px)",
        "Default in Heading 1",
      ]}
      />
      <StickerSheet.Body>
        <StickerSheet.Row>
          {sizes.map((props, index) => (
            <StickerSheet.Cell key={index}>
              <IconPocBase name="delete" {...props}/>
              <IconPocBase name="delete" {...props} isFilled />
            </StickerSheet.Cell>
          ))}
          <StickerSheet.Cell>
            <Heading variant="heading-1"><IconPocBase name="delete" /> Heading 1</Heading>
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Buttons (icon font-size 20px - consumer styled)">
      <StickerSheet.Header headings={[
          "Button v2", "Button v2 small",
          "Button v3", "Button v3 small",
          "Browser button",
          "IconButton v2", "Button v3 icon only",
        ]}
      />
      <StickerSheet.Body>
        {buttons.map((iconProps, index) => (
          <StickerSheet.Row key={index}>
            <Button
              label="I am the sun!"
              icon={<IconPocBase name="clear_day" {...iconProps} />}
              />
            <Button
              label="I am the sun!"
              icon={<IconPocBase name="clear_day" {...iconProps} />}
              size="small"
              />
            <Buttonv3>
              <IconPocBase name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <Buttonv3 size="small">
              <IconPocBase name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <button type="button">
              <IconPocBase name="clear_day" {...iconProps} /> I am the sun!
            </button>
            <IconButton
              label="I am the sun!"
              icon={<IconPocBase name="clear_day" {...iconProps} />}
              primary
            />
            <Buttonv3>
              <IconPocBase name="clear_day" {...iconProps} />
            </Buttonv3>
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Simulated future Button (consumer styled)">
      <StickerSheet.Header headings={[
          "Large (24px)", "Medium (20px)", "Small (16px)",
        ]}
      />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Buttonv3 className="border-1 h-[48px] text-[16px] min-h-[unset]" style={{ fontWeight: 500 }}>
            <IconPocBase name="clear_day" className="text-[24px]" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 h-[40px] text-[16px] min-h-[unset]" style={{ fontWeight: 500 }}>
            <IconPocBase name="clear_day" className="text-[20px]" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 h-[32px] text-[12px] min-h-[unset]" style={{ fontWeight: 500 }}>
            <IconPocBase name="clear_day" className="text-[16px]" /> I am the sun!
          </Buttonv3>
        </StickerSheet.Row>
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
            <IconPocBase name="clear_day" /> I am the sun!
          </div>
          <Text variant="body">
            <IconPocBase name="clear_day" /> I am the sun!
          </Text>
          <div style={{ maxWidth: "100px" }}>
            <Text variant="body">
              <IconPocBase name="clear_day" /> I should wrap around in my container!
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
            <IconPocBase name="arrow_forward" />
          </div>
          <div dir="rtl">
            <IconPocBase name="arrow_forward" />
          </div>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    </>
  )
},
}

export const IconPocWithSizeStory: StickerSheetStory = {
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
    ] satisfies Array<{ rowTitle: string, iconProps: Partial<IconPocWithSizeProps> }>

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
            <IconPocWithSize name={name} />
            <IconPocWithSize name={name} isFilled />
            <IconPocWithSize name={name} className="text-red-500" />
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
            <IconPocBase name="delete" className="text-[16px]"/>
            <IconPocBase name="delete" className="text-[16px]" isFilled />
            <IconPocBase name="delete" className="text-[16px] ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight />
            <IconPocBase name="delete" className="text-[16px]" isFilled shouldInheritWeight />
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPocBase name="delete" className="text-[20px]" />
            <IconPocBase name="delete" className="text-[20px]" isFilled />
            <IconPocBase name="delete" className="text-[20px] ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight />
            <IconPocBase name="delete" className="text-[20px]" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPocBase name="delete" className="text-[24px]" />
            <IconPocBase name="delete" className="text-[24px]" isFilled />
            <IconPocBase name="delete" className="text-[24px] ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight/>
            <IconPocBase name="delete" className="text-[24px]" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPocBase name="delete" />
            <IconPocBase name="delete" isFilled />
            <IconPocBase name="delete" className="ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight/>
            <IconPocBase name="delete" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <Heading variant="heading-1" style={{ display: "inline"}}><IconPocBase name="delete" /> Heading 1</Heading>
            <Heading variant="heading-1" style={{ display: "inline"}}><IconPocBase name="delete" className="ml-16 pl-16 border-l-1 border-gray-400" shouldInheritWeight /> Heading 1</Heading>
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet.Body>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="With prop (baked in optical sizing; sans inherit)">
          <StickerSheet.Cell>
            <IconPocWithSize name="delete" size="small" />
            <IconPocWithSize name="delete" size="small" isFilled />
            <IconPocWithSize name="delete" size="small" className="ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight />
            <IconPocWithSize name="delete" size="small" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPocWithSize name="delete" size="medium" />
            <IconPocWithSize name="delete" size="medium" isFilled />
            <IconPocWithSize name="delete" size="medium"  className="ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight/>
            <IconPocWithSize name="delete" size="medium" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPocWithSize name="delete" size="large" />
            <IconPocWithSize name="delete" size="large" isFilled />
            <IconPocWithSize name="delete" size="large"  className="ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight/>
            <IconPocWithSize name="delete" size="large" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <IconPocWithSize name="delete" />
            <IconPocWithSize name="delete" isFilled />
            <IconPocWithSize name="delete" className="ml-8 pl-8 border-l-1 border-gray-400" shouldInheritWeight />
            <IconPocWithSize name="delete" isFilled shouldInheritWeight/>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <Heading variant="heading-1" style={{ display: "inline"}}><IconPocWithSize name="delete" /> Heading 1</Heading>
            <Heading variant="heading-1" style={{ display: "inline"}}><IconPocWithSize name="delete" className="ml-16 pl-16 border-l-1 border-gray-400" shouldInheritWeight /> Heading 1</Heading>
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
              icon={<IconPocWithSize name="clear_day" {...iconProps} />}
              />
            <Button
              label="I am the sun!"
              icon={<IconPocWithSize name="clear_day" {...iconProps} />}
              size="small"
              />
            <Buttonv3>
              <IconPocWithSize name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <Buttonv3 size="small">
              <IconPocWithSize name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <button type="button">
              <IconPocWithSize name="clear_day" {...iconProps} /> I am the sun!
            </button>
            <IconButton
              label="I am the sun!"
              icon={<IconPocWithSize name="clear_day" {...iconProps} />}
              primary
            />
            <Buttonv3>
              <IconPocWithSize name="clear_day" {...iconProps} />
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
              <IconPocWithSize name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <Buttonv3 className="border-1 h-[40px] text-[16px] min-h-[unset]" style={{ fontWeight: 500 }}>
              <IconPocWithSize name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <Buttonv3 className="border-1 h-[32px] text-[12px] min-h-[unset]" style={{ fontWeight: 500 }}>
              <IconPocWithSize name="clear_day" {...iconProps} /> I am the sun!
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
            <IconPocWithSize name="clear_day" /> I am the sun!
          </div>
          <Text variant="body">
            <IconPocWithSize name="clear_day" /> I am the sun!
          </Text>
          <div style={{ maxWidth: "100px" }}>
            <Text variant="body">
              <IconPocWithSize name="clear_day" /> I should wrap around in my container!
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
            <IconPocWithSize name="arrow_forward" />
          </div>
          <div dir="rtl">
            <IconPocWithSize name="arrow_forward" />
          </div>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    </>
  )
},
}

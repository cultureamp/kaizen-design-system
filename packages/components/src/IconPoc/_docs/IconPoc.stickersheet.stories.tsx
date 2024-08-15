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
import { IconPocWithSize, IconPocBase, IconPocWithSizeProps, IconPocBaseProps, IconPocInheritWeightProps, IconPocInheritWeight, IconPocWithSizeOptionalInheritWeightProps, IconPocWithSizeOptionalInheritWeight } from "../index"

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
          <li>Font weight is set to 400; does not inherit from parent</li>
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

    const sizes = [
      { size: "small" },
      { size: "medium" },
      { size: "large" },
      { size: "inherit" },
    ] satisfies Array<Partial<IconPocWithSizeProps>>

    const buttons = [
      {
        rowTitle: "inherit (18px - no optical size set)",
        iconProps: {}
      },
      {
        rowTitle: "medium (20px)",
        iconProps: { size: "medium" }
      },
    ] satisfies Array<{ rowTitle: string, iconProps: Partial<IconPocWithSizeProps> }>

    return (
      <>
      <div>
        <p>Notes:</p>
        <ul>
          <li>Size scaling also scales Optical Size</li>
          <li>Font weight is set to 400; does not inherit from parent</li>
          <li>`size` prop default value currently set to `inherit`</li>
          <li>Existing button sizes do not change font size - future will</li>
          <li>
            <ul>
              <li>
                Tailwind limitation for `font-weight: inherit` if we do not want it as default/prop.
                (https://github.com/tailwindlabs/tailwindcss/discussions/6815)
              </li>
              <li>`[--iconpoc-font-weight:inherit]` also does not work</li>
              <li>`style` prop works though</li>
              <li>Alt is to add a prop</li>
            </ul>
          </li>
        </ul>
      </div>
    <StickerSheet isReversed={isReversed} heading="Icon POC - With size prop">
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

    <StickerSheet isReversed={isReversed} heading="Sizes (weight 400)">
      <StickerSheet.Header headings={[
        "Small (16px)", "Medium (20px)", "Large (24px)",
        "Inherit",
        "Inherit in Heading 1",
        "Inherit in Heading 1 + inherit weight (style prop; TW does not work)",
      ]}
      />
      <StickerSheet.Body>
        <StickerSheet.Row>
          {sizes.map((props, index) => (
            <StickerSheet.Cell key={index}>
              <IconPocWithSize name="delete" {...props}/>
              <IconPocWithSize name="delete" {...props} isFilled />
            </StickerSheet.Cell>
          ))}
          <StickerSheet.Cell>
            <Heading variant="heading-1"><IconPocWithSize name="delete" /> Heading 1</Heading>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <Heading variant="heading-1"><IconPocWithSize name="delete" style={{ fontWeight: "inherit" }} /> Heading 1</Heading>
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
        <StickerSheet.Row rowTitle="inherit">
          <Buttonv3 className="border-1 min-h-[unset] h-[48px] text-[16px]" style={{ fontWeight: 500 }}>
            <IconPocWithSize name="clear_day" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 min-h-[unset] h-[40px] text-[16px]" style={{ fontWeight: 500 }}>
            <IconPocWithSize name="clear_day" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 min-h-[unset] h-[32px] text-[12px]" style={{ fontWeight: 500 }}>
            <IconPocWithSize name="clear_day" /> I am the sun!
          </Buttonv3>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="using sizes">
          <Buttonv3 className="border-1 min-h-[unset] h-[48px] text-[16px]" style={{ fontWeight: 500 }}>
            <IconPocWithSize name="clear_day" size="large" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 min-h-[unset] h-[40px] text-[16px]" style={{ fontWeight: 500 }}>
            <IconPocWithSize name="clear_day" size="medium" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 min-h-[unset] h-[32px] text-[12px]" style={{ fontWeight: 500 }}>
            <IconPocWithSize name="clear_day" size="small" /> I am the sun!
          </Buttonv3>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Text">
      <StickerSheet.Header headings={[
          "div", "Text", "Wrapped text"
        ]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        {(["inherit", "medium"] satisfies Array<IconPocWithSizeProps["size"]>).map(size => (
          <StickerSheet.Row key={size} rowTitle={size}>
            <div>
              <IconPocWithSize name="clear_day" size={size} /> I am the sun!
            </div>
            <Text variant="body">
              <IconPocWithSize name="clear_day" size={size} /> I am the sun!
            </Text>
            <div style={{ maxWidth: "100px" }}>
              <Text variant="body">
                <IconPocWithSize name="clear_day" size={size} /> I should wrap around in my container!
              </Text>
            </div>
          </StickerSheet.Row>
        ))}
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

export const IconPocInheritWeightStory: StickerSheetStory = {
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
    ] satisfies Array<Partial<IconPocInheritWeightProps>>

    const buttons = [
      { className: "text-[20px]" }
    ] satisfies Array<Partial<IconPocInheritWeightProps>>

    return (
      <>
      <div>
        <p>Notes:</p>
        <ul>
          <li>Icon will inherit weight from its parent</li>
          <li>Can be overridden by the consumer using CSS var `--iconpoc-font-weight`</li>
          <li>Existing button sizes do not change font size - future will</li>
        </ul>
      </div>
    <StickerSheet isReversed={isReversed} heading="Icon POC - Inherit weight">
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
            <IconPocInheritWeight name={name} />
            <IconPocInheritWeight name={name} isFilled />
            <IconPocInheritWeight name={name} className="text-red-500" />
        </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Sizes - consumer styled">
      <StickerSheet.Header headings={[
        "Default (MUI 24px)",
        "Small (16px)", "Medium (20px)", "Large (24px)",
        "Default in Heading 1",
        "Modify CSS Var to 400 in Heading 1",
      ]}
      />
      <StickerSheet.Body>
        <StickerSheet.Row>
          {sizes.map((props, index) => (
            <StickerSheet.Cell key={index}>
              <IconPocInheritWeight name="delete" {...props}/>
              <IconPocInheritWeight name="delete" {...props} isFilled />
            </StickerSheet.Cell>
          ))}
          <StickerSheet.Cell>
            <Heading variant="heading-1"><IconPocInheritWeight name="delete" /> Heading 1</Heading>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <Heading variant="heading-1"><IconPocInheritWeight name="delete" className="[--iconpoc-font-weight:400]" /> Heading 1</Heading>
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
              icon={<IconPocInheritWeight name="clear_day" {...iconProps} />}
              />
            <Button
              label="I am the sun!"
              icon={<IconPocInheritWeight name="clear_day" {...iconProps} />}
              size="small"
              />
            <Buttonv3>
              <IconPocInheritWeight name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <Buttonv3 size="small">
              <IconPocInheritWeight name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <button type="button">
              <IconPocInheritWeight name="clear_day" {...iconProps} /> I am the sun!
            </button>
            <IconButton
              label="I am the sun!"
              icon={<IconPocInheritWeight name="clear_day" {...iconProps} />}
              primary
            />
            <Buttonv3>
              <IconPocInheritWeight name="clear_day" {...iconProps} />
            </Buttonv3>
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet isReversed={isReversed} heading="Simulated future Button (consumer styled size)">
      <StickerSheet.Header headings={[
          "Large (24px)", "Medium (20px)", "Small (16px)",
        ]}
      />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Buttonv3 className="border-1 h-[48px] text-[16px] min-h-[unset]" style={{ fontWeight: 500 }}>
            <IconPocInheritWeight name="clear_day" className="text-[24px]" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 h-[40px] text-[16px] min-h-[unset]" style={{ fontWeight: 500 }}>
            <IconPocInheritWeight name="clear_day" className="text-[20px]" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 h-[32px] text-[12px] min-h-[unset]" style={{ fontWeight: 500 }}>
            <IconPocInheritWeight name="clear_day" className="text-[16px]" /> I am the sun!
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
            <IconPocInheritWeight name="clear_day" /> I am the sun!
          </div>
          <Text variant="body">
            <IconPocInheritWeight name="clear_day" /> I am the sun!
          </Text>
          <div style={{ maxWidth: "100px" }}>
            <Text variant="body">
              <IconPocInheritWeight name="clear_day" /> I should wrap around in my container!
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
            <IconPocInheritWeight name="arrow_forward" />
          </div>
          <div dir="rtl">
            <IconPocInheritWeight name="arrow_forward" />
          </div>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    </>
  )
},
}

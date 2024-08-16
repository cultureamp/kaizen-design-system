import React from "react"
import { Meta } from "@storybook/react"
import Highlight from "react-highlight"
import { Heading } from "~components/Heading"
import { Text } from "~components/Text"
import { Button, IconButton } from "~components/__actions__/v2"
import { Button as Buttonv3 } from "~components/__actions__/v3"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { IconPocWithSize, IconPocBasic, IconPocWithSizeProps, IconPocBasicProps, IconPocInheritWeightProps, IconPocInheritWeight, IconPocWithSizeOptionalInheritWeightProps, IconPocWithSizeOptionalInheritWeight, IconPocAdjustedAlignment, IconPocAdjustedAlignmentProps } from "../index"

export default {
  title: "__POC/IconPoc",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

export const StoryIconPocBasic: StickerSheetStory = {
  name: "Basic",
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
    ] satisfies Array<Partial<IconPocBasicProps>>

    const buttons = [
      { className: "text-[20px]" }
    ] satisfies Array<Partial<IconPocBasicProps>>

    return (
      <>
      <Highlight>
        <p>Notes:</p>
        <ul>
          <li>MUI default is 24px</li>
          <li>Font weight is set to 400; does not inherit from parent</li>
          <li>Existing button sizes do not change font size - future will</li>
        </ul>
      </Highlight>
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
            <IconPocBasic name={name} />
            <IconPocBasic name={name} isFilled />
            <IconPocBasic name={name} className="text-red-500" />
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
              <IconPocBasic name="delete" {...props}/>
              <IconPocBasic name="delete" {...props} isFilled />
            </StickerSheet.Cell>
          ))}
          <StickerSheet.Cell>
            <Heading variant="heading-1"><IconPocBasic name="delete" /> Heading 1</Heading>
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
              icon={<IconPocBasic name="clear_day" {...iconProps} />}
              />
            <Button
              label="I am the sun!"
              icon={<IconPocBasic name="clear_day" {...iconProps} />}
              size="small"
              />
            <Buttonv3>
              <IconPocBasic name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <Buttonv3 size="small">
              <IconPocBasic name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <button type="button">
              <IconPocBasic name="clear_day" {...iconProps} /> I am the sun!
            </button>
            <IconButton
              label="I am the sun!"
              icon={<IconPocBasic name="clear_day" {...iconProps} />}
              primary
            />
            <Buttonv3>
              <IconPocBasic name="clear_day" {...iconProps} />
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
            <IconPocBasic name="clear_day" className="text-[24px]" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 h-[40px] text-[16px] min-h-[unset]" style={{ fontWeight: 500 }}>
            <IconPocBasic name="clear_day" className="text-[20px]" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 h-[32px] text-[12px] min-h-[unset]" style={{ fontWeight: 500 }}>
            <IconPocBasic name="clear_day" className="text-[16px]" /> I am the sun!
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
            <IconPocBasic name="clear_day" /> I am the sun!
          </div>
          <Text variant="body">
            <IconPocBasic name="clear_day" /> I am the sun!
          </Text>
          <div style={{ maxWidth: "100px" }}>
            <Text variant="body">
              <IconPocBasic name="clear_day" /> I should wrap around in my container!
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
            <IconPocBasic name="arrow_forward" />
          </div>
          <div dir="rtl">
            <IconPocBasic name="arrow_forward" />
          </div>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    </>
  )
},
}

export const StoryIconPocWithSize: StickerSheetStory = {
  name: "With size prop",
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
      <Highlight>
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
      </Highlight>
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

export const StoryIconPocInheritWeight: StickerSheetStory = {
  name: "Inherit weight",
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
      <Highlight>
        <p>Notes:</p>
        <ul>
          <li>Icon will inherit weight from its parent</li>
          <li>Can be overridden by the consumer using CSS var `--iconpoc-font-weight`</li>
          <li>Existing button sizes do not change font size - future will</li>
        </ul>
      </Highlight>
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

export const StoryIconPocAdjustedAlignment: StickerSheetStory = {
  name: "Adjusted alignment",
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
    ] satisfies Array<Partial<IconPocAdjustedAlignmentProps>>

    const buttons = [
      {
        rowTitle: "inherit (18px - no optical size set)",
        iconProps: {}
      },
      {
        rowTitle: "medium (20px)",
        iconProps: { size: "medium" }
      },
    ] satisfies Array<{ rowTitle: string, iconProps: Partial<IconPocAdjustedAlignmentProps> }>

    return (
      <>
      <Highlight>
        <p>Notes:</p>
        <ul>
          <li>Extends IconPocWithSize with adjusted alignment</li>
          <li>Follows recommendation of 11.5% of font size</li>
          <li>Works nicely if position has not already been adjusted,
            but throws off alignment if it was already done</li>
        </ul>
      </Highlight>
    <StickerSheet isReversed={isReversed} heading="Icon POC - Adjusted alignment">
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
            <IconPocAdjustedAlignment name={name} />
            <IconPocAdjustedAlignment name={name} isFilled />
            <IconPocAdjustedAlignment name={name} className="text-red-500" />
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
              <IconPocAdjustedAlignment name="delete" {...props}/>
              <IconPocAdjustedAlignment name="delete" {...props} isFilled />
            </StickerSheet.Cell>
          ))}
          <StickerSheet.Cell>
            <Heading variant="heading-1"><IconPocAdjustedAlignment name="delete" /> Heading 1</Heading>
          </StickerSheet.Cell>
          <StickerSheet.Cell>
            <Heading variant="heading-1"><IconPocAdjustedAlignment name="delete" style={{ fontWeight: "inherit" }} /> Heading 1</Heading>
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
              icon={<IconPocAdjustedAlignment name="clear_day" {...iconProps} />}
              />
            <Button
              label="I am the sun!"
              icon={<IconPocAdjustedAlignment name="clear_day" {...iconProps} />}
              size="small"
              />
            <Buttonv3>
              <IconPocAdjustedAlignment name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <Buttonv3 size="small">
              <IconPocAdjustedAlignment name="clear_day" {...iconProps} /> I am the sun!
            </Buttonv3>
            <button type="button">
              <IconPocAdjustedAlignment name="clear_day" {...iconProps} /> I am the sun!
            </button>
            <IconButton
              label="I am the sun!"
              icon={<IconPocAdjustedAlignment name="clear_day" {...iconProps} />}
              primary
            />
            <Buttonv3>
              <IconPocAdjustedAlignment name="clear_day" {...iconProps} />
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
            <IconPocAdjustedAlignment name="clear_day" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 min-h-[unset] h-[40px] text-[16px]" style={{ fontWeight: 500 }}>
            <IconPocAdjustedAlignment name="clear_day" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 min-h-[unset] h-[32px] text-[12px]" style={{ fontWeight: 500 }}>
            <IconPocAdjustedAlignment name="clear_day" /> I am the sun!
          </Buttonv3>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="using sizes">
          <Buttonv3 className="border-1 min-h-[unset] h-[48px] text-[16px]" style={{ fontWeight: 500 }}>
            <IconPocAdjustedAlignment name="clear_day" size="large" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 min-h-[unset] h-[40px] text-[16px]" style={{ fontWeight: 500 }}>
            <IconPocAdjustedAlignment name="clear_day" size="medium" /> I am the sun!
          </Buttonv3>
          <Buttonv3 className="border-1 min-h-[unset] h-[32px] text-[12px]" style={{ fontWeight: 500 }}>
            <IconPocAdjustedAlignment name="clear_day" size="small" /> I am the sun!
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
        {(["inherit", "medium"] satisfies Array<IconPocAdjustedAlignmentProps["size"]>).map(size => (
          <StickerSheet.Row key={size} rowTitle={size}>
            <div>
              <IconPocAdjustedAlignment name="clear_day" size={size} /> I am the sun!
            </div>
            <Text variant="body">
              <IconPocAdjustedAlignment name="clear_day" size={size} /> I am the sun!
            </Text>
            <div style={{ maxWidth: "100px" }}>
              <Text variant="body">
                <IconPocAdjustedAlignment name="clear_day" size={size} /> I should wrap around in my container!
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
            <IconPocAdjustedAlignment name="arrow_forward" />
          </div>
          <div dir="rtl">
            <IconPocAdjustedAlignment name="arrow_forward" />
          </div>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    </>
  )
},
}

const FutureButton = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <Buttonv3 className={`border-1 min-h-[unset] font-500 ${className}`}>
    {children}
  </Buttonv3>
)

const FutureButtonLarge = ({ children }: { children: React.ReactNode }) => (
  <FutureButton className="h-[48px] text-[16px]">{children}</FutureButton>
)
const FutureButtonMedium = ({ children }: { children: React.ReactNode }) => (
  <FutureButton className="h-[40px] text-[16px]">{children}</FutureButton>
)
const FutureButtonSmall = ({ children }: { children: React.ReactNode }) => (
  <FutureButton className="h-[32px] text-[12px]">{children}</FutureButton>
)

export const APIComparison: StickerSheetStory = {
  render: () => (
    <>
    <Highlight>
      Notes:
      <ul>
        <li>TW `text-[inherit] is mapped to `color`, not `font-size` (as it does not end in a measurement)</li>
      </ul>
    </Highlight>

    <Heading variant="heading-3">Button large</Heading>
    <Highlight>
      <ul>
        <li>Height: 48px</li>
        <li>Font size: 16px</li>
        <li>Icon size: 24px</li>
        <li>Icon weight: 400</li>
        <li>Optical size: 40</li>
      </ul>
    </Highlight>
    <StickerSheet>
      <StickerSheet.Header headings={[
        "Example", "Code",
      ]} hasVerticalHeadings />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Base">
          <FutureButtonLarge>
            Onwards! <IconPocBasic name="arrow_forward" className="[--iconpoc-optical-size:40]" />
          </FutureButtonLarge>
          <Highlight>
            {`<IconPocBasic name="arrow_forward" className="[--iconpoc-optical-size:40]" />`}
          </Highlight>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Size prop">
          <FutureButtonLarge>
            Onwards! <IconPocWithSize name="arrow_forward" size="large" />
          </FutureButtonLarge>
          <Highlight>
            {`<IconPocWithSize name="arrow_forward" size="large" />`}
          </Highlight>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Inherit weight">
          <FutureButtonLarge>
            Onwards! <IconPocInheritWeight name="arrow_forward" className="[--iconpoc-font-weight:400] [--iconpoc-optical-size:40]" />
          </FutureButtonLarge>
          <Highlight>
            {`<IconPocInheritWeight name="arrow_forward" className="[--iconpoc-font-weight:400] [--iconpoc-optical-size:40]" />`}
          </Highlight>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <Heading variant="heading-3">Button medium</Heading>
    <Highlight>
      <ul>
        <li>Height: 40px</li>
        <li>Font size: 16px</li>
        <li>Icon size: 20px</li>
        <li>Icon weight: 400</li>
        <li>Optical size: 24</li>
      </ul>
    </Highlight>
    <StickerSheet>
      <StickerSheet.Header headings={[
        "Example", "Code",
      ]} hasVerticalHeadings />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Base">
          <FutureButtonMedium>
            Onwards! <IconPocBasic name="arrow_forward" className="text-[20px]" />
          </FutureButtonMedium>
          <Highlight>
            {`<IconPocBasic name="arrow_forward" className="text-[20px]" />`}
          </Highlight>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Size prop">
          <FutureButtonMedium>
            Onwards! <IconPocWithSize name="arrow_forward" size="medium" />
          </FutureButtonMedium>
          <Highlight>
            {`<IconPocWithSize name="arrow_forward" size="medium" />`}
          </Highlight>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Inherit weight">
          <FutureButtonMedium>
            Onwards! <IconPocInheritWeight name="arrow_forward" className="[--iconpoc-font-weight:400] text-[20px]" />
          </FutureButtonMedium>
          <Highlight>
            {`<IconPocInheritWeight name="arrow_forward" className="[--iconpoc-font-weight:400] text-[20px]" />`}
          </Highlight>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <Heading variant="heading-3">Button small</Heading>
    <Highlight>
      <ul>
        <li>Height: 32px</li>
        <li>Font size: 12px</li>
        <li>Icon size: 16px</li>
        <li>Icon weight: 400</li>
        <li>Optical size: 20</li>
      </ul>
    </Highlight>
    <StickerSheet>
      <StickerSheet.Header headings={[
        "Example", "Code",
      ]} hasVerticalHeadings />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Base">
          <FutureButtonSmall>
            Onwards! <IconPocBasic name="arrow_forward" className="text-[16px] [--iconpoc-optical-size:20]" />
          </FutureButtonSmall>
          <Highlight>
            {`<IconPocBasic name="arrow_forward" className="text-[16px] [--iconpoc-optical-size:20]" />`}
          </Highlight>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Size prop">
          <FutureButtonSmall>
            Onwards! <IconPocWithSize name="arrow_forward" size="small" />
          </FutureButtonSmall>
          <Highlight>
            {`<IconPocWithSize name="arrow_forward" size="small" />`}
          </Highlight>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Inherit weight">
          <FutureButtonSmall>
            Onwards! <IconPocInheritWeight name="arrow_forward" className="[--iconpoc-font-weight:400] [--iconpoc-optical-size:20] text-[16px]" />
          </FutureButtonSmall>
          <Highlight>
            {`<IconPocInheritWeight name="arrow_forward" className="[--iconpoc-font-weight:400] [--iconpoc-optical-size:20] text-[16px]" />`}
          </Highlight>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <Heading variant="heading-3">Heading 1</Heading>
    <Highlight>
      <ul>
        <li>Font size: 34px</li>
        <li>Font weight: 700</li>
        <li>Line height: 42px</li>
        <li>Icon size: inherit</li>
        <li>Icon weight: inherit</li>
        <li>Optical size: 48</li>
      </ul>
    </Highlight>
    <StickerSheet>
      <StickerSheet.Header headings={[
        "Example", "Code",
      ]} hasVerticalHeadings />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Base">
          <Heading variant="heading-1">
            Onwards! <IconPocBasic name="arrow_forward" className="[--iconpoc-font-weight:'inherit'] [--iconpoc-optical-size:48]" style={{ fontSize: "inherit" }} />
          </Heading>
          <Highlight>
            {`<IconPocBasic name="arrow_forward" className="[--iconpoc-font-weight:'inherit'] [--iconpoc-optical-size:48]" style={{ fontSize: "inherit" }} />`}
          </Highlight>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Size prop">
          <Heading variant="heading-1">
            Onwards! <IconPocWithSize name="arrow_forward" size="inherit" className="[--iconpoc-font-weight:'inherit'] [--iconpoc-optical-size:48]" />
          </Heading>
          <Highlight>
            {`<IconPocWithSize name="arrow_forward" size="inherit" className="[--iconpoc-font-weight:'inherit'] [--iconpoc-optical-size:48]" />`}
          </Highlight>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Inherit weight">
          <Heading variant="heading-1">
            Onwards! <IconPocInheritWeight name="arrow_forward" className="[--iconpoc-optical-size:48]" style={{ fontSize: "inherit" }} />
          </Heading>
          <Highlight>
            {`<IconPocInheritWeight name="arrow_forward" className="[--iconpoc-optical-size:48]" style={{ fontSize: "inherit" }} />`}
          </Highlight>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet heading="A11y">
      <StickerSheet.Header headings={[
        "Example", "Code",
      ]} hasVerticalHeadings />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Presentational">
          <button type="button">
            Onwards!<IconPocBasic name="arrow_forward" aria-hidden={true} />
          </button>
          <Highlight>
{`<button type="button">
  Onwards!<IconPoc... name="arrow_forward" aria-hidden={true} />
</button>`}
          </Highlight>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Meaningful">
          <button type="button">
            <IconPocBasic name="arrow_forward" aria-label="Onwards!" />
          </button>
          <Highlight>
{`<button type="button">
  <IconPoc... name="arrow_forward" aria-label="Onwards!" />
</button>`}
          </Highlight>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
    </>
  )
}

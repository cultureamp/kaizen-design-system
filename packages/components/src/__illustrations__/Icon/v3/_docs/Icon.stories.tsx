import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "~components/__actions__/v3"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { Icon } from "../index"

const meta = {
  title: "Illustrations/Icon/Icon (v3)",
  component: Icon,
  args: {
    name: "star",
    isPresentational: true,
  },
  argTypes: {
    name: { type: "string" },
    alt: {
      description: "Set this value when `isPresentational={false}`",
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: args => {
    if (args.isPresentational) return <Icon {...args} alt={undefined} />
    return <Icon {...args} alt={args.alt ?? "Fallback string"} />
  },
}

export const Filled: Story = {
  args: { isFilled: true },
}

export const MirrorInRTL: Story = {
  render: args => (
    <StickerSheet>
      <StickerSheet.Header
        headings={['dir=["ltr"]', 'dir=["rtl"]']}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="arrow_forward">
          <div dir="ltr" className="text-center">
            <Icon {...args} name="arrow_forward" shouldMirrorInRTL />
          </div>
          <div dir="rtl" className="text-center">
            <Icon {...args} name="arrow_forward" shouldMirrorInRTL />
          </div>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="format_list_numbered">
          <div dir="ltr" className="text-center">
            <Icon {...args} name="format_list_numbered" shouldMirrorInRTL />
          </div>
          <div dir="rtl" className="text-center">
            <Icon {...args} name="format_list_numbered" shouldMirrorInRTL />
          </div>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<div dir="ltr" className="text-center">
  <Icon {...props} name="arrow_forward" shouldMirrorInRTL />
</div>
<div dir="rtl" className="text-center">
  <Icon {...props} name="arrow_forward" shouldMirrorInRTL />
</div>
<div dir="ltr" className="text-center">
  <Icon {...props} name="format_list_numbered" shouldMirrorInRTL />
</div>
<div dir="rtl" className="text-center">
  <Icon {...props} name="format_list_numbered" shouldMirrorInRTL />
</div>
        `,
      },
    },
  },
}

export const Customisation: Story = {
  render: args => (
    <StickerSheet>
      <StickerSheet.Header headings={["font-size", "font-weight", "color"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Icon {...args} className="text-heading-1" />
          <Icon {...args} className="font-[700]" />
          <Icon {...args} className="text-blue-500" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Icon {...props} name="star" className="text-heading-1" />
<Icon {...props} name="star" className="font-[700]" />
<Icon {...props} name="star" className="text-blue-500" />
        `,
      },
    },
  },
}

export const OpticalSize: Story = {
  render: ({ className, ...args }) => (
    <Icon {...args} name="star" className={`text-heading-1 ${className}`} />
  ),
  parameters: { controls: { include: "className" } },
  args: { className: "[--icon-optical-size:48]" },
  argTypes: {
    className: {
      control: { type: "radio" },
      options: [
        "[--icon-optical-size:20]",
        "[--icon-optical-size:24]",
        "[--icon-optical-size:40]",
        "[--icon-optical-size:48]",
      ],
    },
  },
}

export const MeaningfulIcon: Story = {
  render: args => (
    <Button>
      <Icon {...args} />
    </Button>
  ),
  args: { isPresentational: false, alt: "Favourite" },
}

export const PresentationalIcon: Story = {
  render: args => (
    <Button>
      <Icon {...args} /> Favourite
    </Button>
  ),
  args: { isPresentational: true },
}

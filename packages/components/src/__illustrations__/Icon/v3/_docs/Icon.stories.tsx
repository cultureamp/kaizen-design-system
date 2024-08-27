import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { Icon, IconProps } from "../index"

const meta = {
  title: "Illustrations/Icon/Icon (v3)",
  component: Icon,
  args: {
    name: "star",
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Filled: Story = {
  args: { isFilled: true },
}

export const Sizes: Story = {
  render: () => {
    const sizes = ["small", "medium", "large", "inherit"] satisfies Array<
      IconProps["size"]
    >
    return (
      <StickerSheet>
        <StickerSheet.Header headings={sizes} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            {sizes.map(size => (
              <Icon key={size} name="star" size={size} />
            ))}
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
<Icon name="star" size="small" />
<Icon name="star" size="medium" />
<Icon name="star" size="large" />
<Icon name="star" size="inherit" />
        `,
      },
    },
  },
}

export const MirrorInRTL: Story = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header headings={['dir=["ltr"]', 'dir=["rtl"]']} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <div dir="ltr" className="text-center">
            <Icon name="arrow_forward" shouldMirrorInRTL />
          </div>
          <div dir="rtl" className="text-center">
            <Icon name="arrow_forward" shouldMirrorInRTL />
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
  <Icon name="arrow_forward" shouldMirrorInRTL />
</div>
<div dir="rtl" className="text-center">
  <Icon name="arrow_forward" shouldMirrorInRTL />
</div>
        `,
      },
    },
  },
}

export const Customisation: Story = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header headings={["font-size", "font-weight", "color"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Icon name="star" className="text-heading-1" />
          <Icon name="star" className="font-[700]" />
          <Icon name="star" className="text-blue-500" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Icon name="star" className="text-heading-1" />
<Icon name="star" className="font-[700]" />
<Icon name="star" className="text-blue-500" />
        `,
      },
    },
  },
}

export const OpticalSize: Story = {
  render: ({ className }) => (
    <Icon name="star" className={`text-heading-1 ${className}`} />
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

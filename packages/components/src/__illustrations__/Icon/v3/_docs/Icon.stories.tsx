import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { Icon, IconProps } from "../index"

const meta = {
  title: "Illustrations/Icon/v3",
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
    const sizes = ["small", "medium", "large"] satisfies Array<
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
}

export const CustomSizes: Story = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Header headings={["inherit", "custom"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <Icon name="star" size="inherit" />
          <Icon name="star" className="text-heading-1" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
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

export const FontWeight: Story = {
  render: ({ className }) => (
    <Icon name="star" className={`text-heading-1 ${className}`} />
  ),
  parameters: { controls: { include: "className" } },
  args: { className: "font-[400]" },
  argTypes: {
    className: {
      control: { type: "radio" },
      options: [
        "font-[100]",
        "font-[200]",
        "font-[300]",
        "font-[400]",
        "font-[500]",
        "font-[600]",
        "font-[700]",
      ],
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
}

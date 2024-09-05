import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import classnames from "classnames"
import { Text } from "~components/Text"
import { ToggleSwitchField } from "~components/ToggleSwitch"
import { Button } from "~components/__actions__/v3"
import { Tag } from "~components/__future__/Tag"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { iconDefaultSet } from "../constants"
import { Icon } from "../index"

const meta = {
  title: "Illustrations/Icon/Icon (Future)",
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
  render: args => <Icon {...args} name="star" />,
  parameters: { controls: { include: "className" } },
  args: { className: "text-[48px] [--icon-optical-size:48]" },
  argTypes: {
    className: {
      control: { type: "radio" },
      options: [
        "text-[20px] [--icon-optical-size:20]",
        "text-[24px] [--icon-optical-size:24]",
        "text-[40px] [--icon-optical-size:40]",
        "text-[48px] [--icon-optical-size:48]",
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

const IconSetButton = ({
  iconName,
  isFilled,
}: {
  iconName: string
  isFilled: boolean
}): JSX.Element => {
  const [copied, setCopied] = useState(false)

  const handleCopy = (): void => {
    const snippet = isFilled
      ? `<Icon name="${iconName}" isPresentational isFilled />`
      : `<Icon name="${iconName}" isPresentational />`
    navigator.clipboard.writeText(snippet)

    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <li>
      <button
        type="button"
        onClick={handleCopy}
        className={classnames(
          "flex flex-col justify-center items-center gap-16",
          "cursor-pointer h-full w-full p-16 rounded",
          "bg-gray-100 hover:bg-gray-200"
        )}
      >
        {copied ? (
          <Tag color="green" classNameOverride="border-1 border-green-500">
            Copied!
          </Tag>
        ) : (
          <>
            <Icon name={iconName} isPresentational isFilled={isFilled} />
            <Text variant="small" tag="span">
              {iconName}
            </Text>
          </>
        )}
      </button>
    </li>
  )
}

export const DefaultIconSet: Story = {
  render: () => {
    const [isFilled, setIsFilled] = useState(false)

    return (
      <div className="flex flex-col gap-8">
        <ToggleSwitchField
          labelText="Filled"
          toggledStatus={isFilled ? "on" : "off"}
          onToggle={() => setIsFilled(!isFilled)}
        />
        <ul
          className="grid list-none gap-16 m-0 p-0"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(11em, 1fr))" }}
        >
          {iconDefaultSet.map(iconName => (
            <IconSetButton
              key={iconName}
              iconName={iconName}
              isFilled={isFilled}
            />
          ))}
        </ul>
      </div>
    )
  },
}

export const AlignmentDo: Story = {
  render: () => (
    <img
      src="https://lh3.googleusercontent.com/twRAsK6vahc7l_yuhhlBzVp1yR_8tsspDL16Xry73IrhYE3ItxmKSqHC6MznHq9EZKfrOgP_a3RDNGLK28JmhHeFiDmiwYrbhBtpxjodrsw=s0"
      alt="Symbol baseline set lower in relation to symbol."
      className="w-full"
    />
  ),
}

export const AlignmentDont: Story = {
  render: () => (
    <img
      src="https://lh3.googleusercontent.com/MePU5NYnrFy96fiDdULne6XwFlboyznBeVWD5CTrFwzNdzsMjrvg_ySLfXJVdUNxSkeUT4UH28_Orz916LRN78bhneYBA0dL8YpCQswiERo=s0"
      alt="Both symbol and text set on same baseline."
      className="w-full"
    />
  ),
}

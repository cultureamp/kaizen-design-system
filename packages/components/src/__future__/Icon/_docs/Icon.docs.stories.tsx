import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import classnames from "classnames"
import { InlineNotification } from "~components/Notification"
import { RadioField, RadioGroup } from "~components/Radio"
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

export const ConsistentDo: Story = {
  render: () => (
    <div>
      <Icon name="star" isPresentational />
      <Icon name="star" isPresentational isFilled />
    </div>
  ),
}

export const FilledUnfilledDo: Story = {
  render: () => (
    <div className="flex gap-16">
      <div className="flex items-center gap-4">
        <Text variant="body">Active</Text>
        <Icon name="thumb_up" isPresentational isFilled />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">Inactive</Text>
        <Icon name="thumb_up" isPresentational />
      </div>
    </div>
  ),
}

export const FilledUnfilledDont: Story = {
  render: () => (
    <div className="flex flex-col gap-16">
      <div className="flex gap-16">
        <div className="flex items-center gap-4">
          <Text variant="body">Active</Text>
          <Icon name="thumb_up" isPresentational />
        </div>
        <div className="flex items-center gap-4">
          <Text variant="body">Inactive</Text>
          <Icon name="thumb_up" isPresentational isFilled />
        </div>
      </div>
      <div className="flex gap-16">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Text variant="body">Active (Filled)</Text>
            <Icon name="format_bold" isPresentational isFilled />
            <Text variant="body">Inactive (Unfilled)</Text>
            <Icon name="format_bold" isPresentational />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const OpticalSizeDo: Story = {
  render: () => (
    <div className="flex gap-16">
      <div className="flex items-center gap-4">
        <Text variant="body">20/20</Text>
        <Icon
          name="star"
          isPresentational
          className="text-[20px] [--icon-optical-size:20]"
        />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">24/24</Text>
        <Icon
          name="star"
          isPresentational
          className="text-[24px] [--icon-optical-size:24]"
        />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">40/40</Text>
        <Icon
          name="star"
          isPresentational
          className="text-[40px] [--icon-optical-size:40]"
        />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">48/48</Text>
        <Icon
          name="star"
          isPresentational
          className="text-[48px] [--icon-optical-size:48]"
        />
      </div>
    </div>
  ),
}

export const OpticalSizeDont: Story = {
  render: () => (
    <div className="flex gap-16">
      <div className="flex items-center gap-4">
        <Text variant="body">20/48</Text>
        <Icon
          name="star"
          isPresentational
          className="text-[20px] [--icon-optical-size:48]"
        />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">24/40</Text>
        <Icon
          name="star"
          isPresentational
          className="text-[24px] [--icon-optical-size:40]"
        />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">40/24</Text>
        <Icon
          name="star"
          isPresentational
          className="text-[40px] [--icon-optical-size:24]"
        />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">48/20</Text>
        <Icon
          name="star"
          isPresentational
          className="text-[48px] [--icon-optical-size:20]"
        />
      </div>
    </div>
  ),
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

export const ContrastDo: Story = {
  render: () => (
    <div className="bg-yellow-100 p-16">
      <Icon name="star" isPresentational className="text-yellow-700" />
    </div>
  ),
}

export const ContrastDont: Story = {
  render: () => (
    <div className="bg-yellow-100 p-16">
      <Icon name="star" isPresentational className="text-yellow-500" />
    </div>
  ),
}

export const ColorReinforceDo: Story = {
  render: () => (
    <>
      <InlineNotification variant="success">Success!</InlineNotification>
      <InlineNotification variant="warning" noBottomMargin>
        Error!
      </InlineNotification>
    </>
  ),
}

export const DistinguishDo: Story = {
  render: () => (
    <div className="flex gap-16">
      <div className="flex items-center gap-4">
        <Text variant="body">Like</Text>
        <Icon name="thumb_up" isPresentational />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">Liked</Text>
        <Icon
          name="thumb_up"
          isPresentational
          isFilled
          className="text-blue-500"
        />
      </div>
    </div>
  ),
}

export const DistinguishDont: Story = {
  render: () => (
    <div className="flex gap-16">
      <Icon name="thumb_up" isPresentational />
      <Icon name="thumb_up" isPresentational className="text-blue-500" />
    </div>
  ),
}

export const InterfaceDo: Story = {
  render: () => (
    <div className="flex gap-16">
      <div>
        <Button>
          Print
          <Icon name="print" isPresentational />
        </Button>
      </div>
      <div>
        <Text variant="body">
          Add your favourite items and then print away!
        </Text>
      </div>
    </div>
  ),
}

export const InterfaceDont: Story = {
  render: () => (
    <div className="flex gap-16">
      <div>
        <Button>
          Print
          <Icon name="print" isPresentational />
        </Button>
      </div>
      <div>
        <Text variant="body">
          Add
          <Icon name="add" isPresentational className="align-text-bottom" />
          your favourite
          <Icon
            name="favorite"
            isPresentational
            className="align-text-bottom"
          />
          items and then print
          <Icon
            name="print"
            isPresentational
            className="align-text-bottom"
          />{" "}
          away!
        </Text>
      </div>
    </div>
  ),
}

export const ImportantInformationDo: Story = {
  render: () => (
    <RadioGroup labelText="Hobby">
      <RadioField
        labelText={
          <>
            Renovating{" "}
            <Icon name="build" isPresentational className="align-text-bottom" />
          </>
        }
        name="radio-group"
        onChange={() => undefined}
        selectedStatus
        value="radio-value-1"
      />
      <RadioField
        labelText={
          <>
            Gardening{" "}
            <Icon
              name="potted_plant"
              isPresentational
              className="align-text-bottom"
            />
          </>
        }
        name="radio-group"
        onChange={() => undefined}
        value="radio-value-2"
      />
      <RadioField
        labelText={
          <>
            Socialising{" "}
            <Icon
              name="groups"
              isPresentational
              className="align-text-bottom"
            />
          </>
        }
        name="radio-group"
        onChange={() => undefined}
        value="radio-value-3"
      />
    </RadioGroup>
  ),
}

export const ImportantInformationDont: Story = {
  render: () => (
    <RadioGroup labelText="Hobby">
      <RadioField
        labelText={
          <Icon name="build" alt="Renovating" className="align-text-bottom" />
        }
        name="radio-group"
        onChange={() => undefined}
        selectedStatus
        value="radio-value-1"
      />
      <RadioField
        labelText={
          <Icon
            name="potted_plant"
            alt="Gardening"
            className="align-text-bottom"
          />
        }
        name="radio-group"
        onChange={() => undefined}
        value="radio-value-2"
      />
      <RadioField
        labelText={
          <Icon name="groups" alt="Socialising" className="align-text-bottom" />
        }
        name="radio-group"
        onChange={() => undefined}
        value="radio-value-3"
      />
    </RadioGroup>
  ),
}

const MockLink = ({
  children,
  ...props
}: {
  children: React.ReactNode
}): JSX.Element => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a
    href="#"
    className="text-black hover:text-blue-500 focus:text-blue-500 focus:border-1 focus:border-solid focus:border-blue-500"
    {...props}
  >
    {children}
  </a>
)

export const InteractiveStatesDo: Story = {
  render: () => (
    <div className="flex gap-16">
      <MockLink>
        Base <Icon name="auto_awesome" isPresentational isFilled />
      </MockLink>
      <MockLink data-sb-pseudo-styles="hover">
        Hover <Icon name="auto_awesome" isPresentational isFilled />
      </MockLink>
      <MockLink data-sb-pseudo-styles="focus">
        Focus <Icon name="auto_awesome" isPresentational isFilled />
      </MockLink>
    </div>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

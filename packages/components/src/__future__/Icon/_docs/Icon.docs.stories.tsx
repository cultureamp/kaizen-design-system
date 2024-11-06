import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import classnames from "classnames"
import { InlineNotification } from "~components/Notification"
import {
  TableCard,
  TableContainer,
  TableHeader,
  TableHeaderRowCell,
  TableRow,
  TableRowCell,
} from "~components/Table"
import { Text } from "~components/Text"
import { ToggleSwitchField } from "~components/ToggleSwitch"
import { Button } from "~components/__actions__/v3"
import { Tag } from "~components/__future__/Tag"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { iconDefaultSet } from "../constants"
import { Icon } from "../index"
import imgInterfaceDont from "./assets/interface-dont.png"
import imgTooltipDont from "./assets/tooltip-dont.png"
import styles from "./Icon.docs.module.css"

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

export const Color: Story = {
  render: args => (
    <div className="flex gap-16">
      <div className="text-green-500">
        <Icon {...args} />
      </div>
      <Icon {...args} className="text-blue-500" />
    </div>
  ),
}

export const Size: Story = {
  render: args => (
    <div className="flex gap-16">
      <Icon {...args} className="[--icon-size:48]" />
      <div className="text-[48px]">
        <Icon {...args} className="text-[1em] [--icon-optical-size:48]" />
      </div>
    </div>
  ),
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
          "bg-gray-100 hover:bg-gray-200",
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
    <Text variant="body">
      Edit <Icon name="edit" isPresentational />
    </Text>
  ),
}

export const FilledUnfilledDo: Story = {
  render: () => (
    <div className="flex gap-16">
      <div className="flex items-center gap-4">
        <Text variant="body">Default state</Text>
        <Icon name="thumb_up" isPresentational />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">Selected</Text>
        <Icon name="thumb_up" isPresentational isFilled />
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

export const ColorPurposefulDo: Story = {
  render: () => (
    <>
      <InlineNotification variant="success">Success</InlineNotification>
      <InlineNotification variant="warning" noBottomMargin>
        Error
      </InlineNotification>
    </>
  ),
}

export const DistinguishDo: Story = {
  render: () => (
    <div className="flex gap-16">
      <div className="flex items-center gap-4">
        <Text variant="body">Default state</Text>
        <Icon name="thumb_up" isPresentational />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">Selected</Text>
        <Icon name="thumb_up" isPresentational isFilled />
      </div>
    </div>
  ),
}

export const DistinguishDont: Story = {
  render: () => (
    <div className="flex gap-16">
      <div className="flex items-center gap-4">
        <Text variant="body">Default state</Text>
        <Icon name="thumb_up" isPresentational />
      </div>
      <div className="flex items-center gap-4">
        <Text variant="body">Selected</Text>
        <Icon name="thumb_up" isPresentational className="text-blue-500" />
      </div>
    </div>
  ),
}

export const InterfaceDont: Story = {
  render: () => (
    <img
      src={imgInterfaceDont}
      alt="Example of a bad interface"
      className="block m-auto max-w-[600px]"
    />
  ),
}

export const ImportantInformationDo: Story = {
  render: () => (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <TableHeaderRowCell
            labelText="Flag for review"
            sorting="ascending"
            width={4 / 12}
          />
          <TableHeaderRowCell labelText="Employee" sorting="ascending" />
        </TableRow>
      </TableHeader>
      <TableCard>
        <TableRow>
          <TableRowCell width={4 / 12}>
            <Icon name="flag" alt="Flag" />
          </TableRowCell>
          <TableRowCell>
            <Text tag="div" variant="body">
              John Johnson
            </Text>
          </TableRowCell>
        </TableRow>
      </TableCard>
      <TableCard>
        <TableRow>
          <TableRowCell width={4 / 12}>
            <Icon name="flag" alt="Flag" />
          </TableRowCell>
          <TableRowCell>
            <Text tag="div" variant="body">
              Michelle Summer
            </Text>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  ),
}

export const ImportantInformationDont: Story = {
  render: () => (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <TableHeaderRowCell labelText="" sorting="ascending" />
          <TableHeaderRowCell labelText="Employee" sorting="ascending" />
        </TableRow>
      </TableHeader>
      <TableCard>
        <TableRow>
          <TableRowCell>
            <Icon name="flag" alt="Flag" />
          </TableRowCell>
          <TableRowCell>
            <Text tag="div" variant="body">
              John Johnson
            </Text>
          </TableRowCell>
        </TableRow>
      </TableCard>
      <TableCard>
        <TableRow>
          <TableRowCell>
            <Icon name="flag" alt="Flag" />
          </TableRowCell>
          <TableRowCell>
            <Text tag="div" variant="body">
              Michelle Summer
            </Text>
          </TableRowCell>
        </TableRow>
      </TableCard>
    </TableContainer>
  ),
  parameters: {
    a11y: { disable: true }, // accessible label fix to be addressed in a separate PR
  },
}

const InteractiveIcon = (props: Record<string, any>): JSX.Element => (
  <button type="button" className={styles.interactiveIcon} {...props}>
    <Icon name="info" isPresentational isFilled />
  </button>
)

export const InteractiveStatesDo: Story = {
  render: () => (
    <div className="flex gap-16">
      <Text variant="body">
        Base <InteractiveIcon />
      </Text>
      <Text variant="body">
        Hover <InteractiveIcon data-sb-pseudo-styles="hover" />
      </Text>
      <Text variant="body">
        Focus <InteractiveIcon data-sb-pseudo-styles="focus" />
      </Text>
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

export const TooltipDont: Story = {
  render: () => (
    <img
      src={imgTooltipDont}
      alt="Example of a bad use of a tooltip on an icon"
      className="block m-auto max-w-[600px]"
    />
  ),
}

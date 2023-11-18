import React, { useEffect, useRef, useState } from "react"
import { Meta } from "@storybook/react"
import classnames from "classnames"
import { Heading } from "~components/Heading"
import { StickerSheetStory } from "~storybook/components/StickerSheet"
import { Popover, PopoverProps, useFloating } from "../index"

export default {
  title: "Staging/Multi Select/Popover",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const PopoverTemplate = (
  args: Partial<Omit<PopoverProps, "refs">>
): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const { refs } = useFloating()

  return (
    <div>
      <button
        ref={refs.setReference}
        type="button"
        className="border border-gray-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        Pancakes!
      </button>
      {isOpen && (
        <Popover refs={refs} aria-label="Pancakes!" {...args}>
          <div className="p-16">{args.children || "Content here!"}</div>
        </Popover>
      )}
    </div>
  )
}

const StickerSheetTemplate: StickerSheetStory = {
  render: (_, { parameters }) => {
    const portalRef = useRef<HTMLDivElement>(null)
    const [portalContainer, setPortalContainer] = useState<HTMLDivElement>()

    useEffect(() => {
      if (portalRef.current !== null) {
        setPortalContainer(portalRef.current)
      }
    }, [])

    return (
      <div
        ref={portalRef}
        // overflow-hidden is added so we can ensure the last row autoplaces above
        // padding added to allow buffer for box-shadow which gets cut off by overflow-hidden
        className="relative flex flex-col justify-between gap-160 h-[400px] px-16 overflow-hidden"
      >
        <div>
          <Heading variant="heading-3" tag="div" classNameOverride="!mb-16">
            {parameters.textDirection === "rtl"
              ? "Default alignment to bottom-right; align to left when no space on left"
              : "Default alignment to bottom-left; align to right when no space on right"}
          </Heading>
          <div className="flex justify-between w-[100%]">
            <PopoverTemplate />
            <PopoverTemplate />
            <PopoverTemplate />
          </div>
        </div>

        <div>
          <Heading variant="heading-3" tag="div" classNameOverride="!mb-64">
            Flips to top when no space below
          </Heading>
          <div>Content below popover</div>
          <div className="flex justify-between w-[100%]">
            <PopoverTemplate portalContainer={portalContainer} />
            <PopoverTemplate portalContainer={portalContainer} />
          </div>
        </div>
      </div>
    )
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}

const PopoverWithPortal = ({
  portalClassName,
  ...props
}: Partial<Omit<PopoverProps, "refs">> & {
  portalClassName?: string
}): JSX.Element => {
  const portalRef = useRef<HTMLDivElement>(null)
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement>()

  useEffect(() => {
    if (portalRef.current !== null) {
      setPortalContainer(portalRef.current)
    }
  }, [])

  return (
    <div
      ref={portalRef}
      // overflow-hidden is added so we can ensure the last row autoplaces above
      // padding added to allow buffer for box-shadow which gets cut off by overflow-hidden
      className={classnames(
        "relative border border-purple-500 overflow-hidden",
        portalClassName
      )}
    >
      <PopoverTemplate
        portalContainer={portalContainer}
        focusOnProps={{ enabled: false }}
        {...props}
      />
    </div>
  )
}

const List = ({ items }: { items: string[] }): JSX.Element => (
  <ul>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

export const StickerSheetWidth: StickerSheetStory = {
  name: "Sticker Sheet (Width)",
  render: () => (
    <div className="flex flex-col gap-16">
      <Heading variant="heading-3" tag="div">
        Content short (min-width)
      </Heading>
      <PopoverWithPortal portalClassName="h-[250px]">
        <List items={["A"]} />
      </PopoverWithPortal>

      <Heading variant="heading-3" tag="div">
        Content long (max-width)
      </Heading>
      <PopoverWithPortal portalClassName="h-[250px]">
        <List
          items={[
            "Super long string where the container is fixed width and the selected string goes multiline",
          ]}
        />
      </PopoverWithPortal>

      <Heading variant="heading-3" tag="div">
        Window max-width 250px
      </Heading>
      <PopoverWithPortal portalClassName="w-[250px] h-[250px]">
        <List
          items={[
            "Super long string where the container is fixed width and the selected string goes multiline",
          ]}
        />
      </PopoverWithPortal>
    </div>
  ),
}

const itemsLong = [
  "Super long string where the container is fixed width and the selected string goes multiline",
  "Another super long string where the container is fixed width and the selected string goes multiline",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
]

export const StickerSheetHeight: StickerSheetStory = {
  name: "Sticker Sheet (Height)",
  render: () => (
    <div className="flex flex-col gap-16">
      <Heading variant="heading-3" tag="div">
        Content overflow (max-height)
      </Heading>
      <PopoverWithPortal portalClassName="h-[500px]">
        <List items={itemsLong} />
      </PopoverWithPortal>

      <Heading variant="heading-3" tag="div">
        Window max-height 250px
      </Heading>
      <PopoverWithPortal portalClassName="h-[250px]">
        <List items={itemsLong} />
      </PopoverWithPortal>
    </div>
  ),
}

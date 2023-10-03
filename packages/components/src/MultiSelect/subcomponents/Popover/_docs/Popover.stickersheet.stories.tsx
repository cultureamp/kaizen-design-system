import React, { useEffect, useRef, useState } from "react"
import { Meta } from "@storybook/react"
import { Heading } from "@kaizen/typography"
import { StickerSheetStory } from "~storybook/components/StickerSheet"
import { Popover, PopoverProps, useFloating } from "../index"

export default {
  title: "Components/Multi Select/Popover",
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
        onClick={() => setIsOpen(!isOpen)}
      >
        Pancakes!
      </button>
      {isOpen && (
        <Popover refs={refs} aria-label="Pancakes!" {...args}>
          <div className="p-16">Content here!</div>
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
        id="stickersheet__popover"
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

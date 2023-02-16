import React, { useRef, useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../../storybook/constants"
import { figmaEmbed } from "../../../../storybook/helpers"
import { DateRange,
} from "../../index"
import { FilterDRP2 } from "../../src/Filter/FilterDRP2"
import { FilterDRP3 } from "../../src/Filter/FilterDRP3"
import {
  FilterTriggerButtonWithFilterRef,
  RemovableFilterTriggerButton,
  RemovableFilterTriggerButtonRefs,
} from "../../src/Filter/components"

export default {
  title: `${CATEGORIES.solutionPreview}/Filter DRP`,
  component: FilterDRP2,
  parameters: {
    docs: {
      description: {
        component: 'import { Filter } from "@kaizen/date-picker"',
      },
    },
    ...figmaEmbed(
      "REPLACE_THIS_WITH_FIGMA_URL"
    ) /** @todo: Replace with Figma frame url */,
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterDRP2>

export const FilterSolution2: ComponentStory<
  typeof FilterDRP2
> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [range, setRange] = useState<DateRange | undefined>()

  const triggerButtonRef = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef,
    removeButtonRef,
  })

  const [isOpenRemovable, setIsOpenRemovable] = useState<boolean>(false)
  const [rangeRemovable, setRangeRemovable] = useState<DateRange | undefined>()

  return (
    <>
      <div>
        <FilterDRP2
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          filterButton={(triggerButtonProps): JSX.Element => (
            <FilterTriggerButtonWithFilterRef
              {...triggerButtonProps}
            />
          )}
          id="filterdrp-sol2"
          label="Field label"
          locale="en-AU"
          selectedRange={range}
          onRangeChange={setRange}
        />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterDRP2
          isOpen={isOpenRemovable}
          setIsOpen={setIsOpenRemovable}
          filterButton={(triggerButtonProps): JSX.Element => (
            <RemovableFilterTriggerButton
              ref={removableButtonRefs}
              triggerButtonProps={{ ...triggerButtonProps }}
              removeButtonProps={{ onClick: () => undefined }}
            />
          )}
          id="filterdrp-sol2-removable"
          label="Field label"
          locale="en-AU"
          selectedRange={rangeRemovable}
          onRangeChange={setRangeRemovable}
        />

        <br />
        <br />
        <button
          onClick={(): void => {
            setRangeRemovable(undefined)
          }}
        >
          Clear value
        </button>

        <button
          onClick={(): void => {
            triggerButtonRef.current?.focus()
          }}
          style={{ marginLeft: "1rem" }}
        >
          Focus on Removable with ref - trigger button
        </button>
        <button
          onClick={(): void => {
            removeButtonRef.current?.focus()
          }}
          style={{ marginLeft: "1rem" }}
        >
          Focus on Removable with ref - remove button
        </button>
      </div>
    </>
  )
}


export const FilterSolution3: ComponentStory<
  typeof FilterDRP3
> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [range, setRange] = useState<DateRange | undefined>()

  const triggerButtonRef = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef,
    removeButtonRef,
  })

  const [isOpenRemovable, setIsOpenRemovable] = useState<boolean>(false)
  const [rangeRemovable, setRangeRemovable] = useState<DateRange | undefined>()

  return (
    <>
      <div>
        <FilterDRP3
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          filterButton={(triggerButtonProps): JSX.Element => (
            <FilterTriggerButtonWithFilterRef
              {...triggerButtonProps}
            />
          )}
          id="filterdrp-sol3"
          label="Field label"
          locale="en-AU"
          selectedRange={range}
          onRangeChange={setRange}
        />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterDRP3
          isOpen={isOpenRemovable}
          setIsOpen={setIsOpenRemovable}
          filterButton={(triggerButtonProps): JSX.Element => (
            <RemovableFilterTriggerButton
              ref={removableButtonRefs}
              triggerButtonProps={triggerButtonProps}
              removeButtonProps={{ onClick: () => undefined }}
            />
          )}
          id="filterdrp-sol3-removable"
          label="Field label"
          locale="en-AU"
          selectedRange={rangeRemovable}
          onRangeChange={setRangeRemovable}
        />

        <br />
        <br />
        <button
          onClick={(): void => {
            setRange(undefined)
          }}
        >
          Clear value
        </button>

        <button
          onClick={(): void => {
            triggerButtonRef.current?.focus()
          }}
          style={{ marginLeft: "1rem" }}
        >
          Focus on Removable with ref - trigger button
        </button>
        <button
          onClick={(): void => {
            removeButtonRef.current?.focus()
          }}
          style={{ marginLeft: "1rem" }}
        >
          Focus on Removable with ref - remove button
        </button>
      </div>
    </>
  )
}

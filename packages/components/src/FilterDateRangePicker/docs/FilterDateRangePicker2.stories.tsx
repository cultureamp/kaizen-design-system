import React, { useRef, useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { DateRange } from "@kaizen/date-picker"
import {
  FilterButton,
  FilterButtonRemovable,
  FilterButtonRemovableRefs,
} from "../../FilterButton"
import { FilterDateRangePicker } from ".."

export default {
  title: "Components/Filter Date Range Picker SP",
  component: FilterDateRangePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { Filter } from "@kaizen/date-picker"',
      },
    },
  },
} as ComponentMeta<typeof FilterDateRangePicker>

export const DefaultStory: ComponentStory<
  typeof FilterDateRangePicker
> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [range, setRange] = useState<DateRange | undefined>()

  const triggerRef = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<FilterButtonRemovableRefs>({
    triggerRef,
    removeButtonRef,
  })

  const [isOpenRemovable, setIsOpenRemovable] = useState<boolean>(false)
  const [rangeRemovable, setRangeRemovable] = useState<DateRange | undefined>()

  return (
    <>
      <div>
        <FilterDateRangePicker
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          renderTrigger={(triggerButtonProps): JSX.Element => (
            <FilterButton {...triggerButtonProps} />
          )}
          id="filterdrp-sol2"
          label="Field label"
          locale="en-AU"
          selectedRange={range}
          onRangeChange={setRange}
        />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterDateRangePicker
          isOpen={isOpenRemovable}
          setIsOpen={setIsOpenRemovable}
          renderTrigger={(triggerButtonProps): JSX.Element => (
            <FilterButtonRemovable
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
            triggerRef.current?.focus()
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

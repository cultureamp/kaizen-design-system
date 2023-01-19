import React, { useRef, useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { FocusOn } from "react-focus-on"
import { withDesign } from "storybook-addon-designs"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { DateRange, FilterSolution3 } from "../index"
import { FilterDateRangePickerField } from "../src/Filter/FilterDateRangePickerField"
import {
  FilterTriggerButton,
  FilterTriggerButtonContext,
  RemovableFilterTriggerButton,
  RemovableFilterTriggerButtonContext,
  RemovableFilterTriggerButtonRefs,
} from "../src/Filter/components"
import { FilterContents } from "../src/Filter/components/FilterContents"
import { FilterPopover, FilterPopoverWithFocusLock } from "../src/Filter/components/FilterPopover"
import { DateRangeDisplayLabel } from "../src/FilterDateRangePicker/components/DateRangeDisplayLabel"
import { isCompleteDateRange } from "../src/FilterDateRangePicker/utils/isCompleteDateRange"
import { getLocale } from "../src/utils/getLocale"

export default {
  title: `${CATEGORIES.introduction}/Filter`,
  component: FilterSolution3,
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
} as ComponentMeta<typeof FilterSolution3>

export const FilterSolution3Story: ComponentStory<
  typeof FilterSolution3
> = args => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  // const buttonRef2 = useRef<HTMLButtonElement>(null)
  // const removeButtonRef = useRef<HTMLButtonElement>(null)
  // const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
  //   triggerButtonRef: buttonRef2,
  //   removeButtonRef,
  // })

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <FilterSolution3
        label="First button"
      >
        <FilterTriggerButtonContext
          ref={buttonRef1}
          isOpen={isOpen}
          onClick={(): void => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <FilterPopoverWithFocusLock
            referenceElement={buttonRef1.current}
            onClose={(): void => setIsOpen(false)}
          >
            <FilterContents>Contents in here</FilterContents>
          </FilterPopoverWithFocusLock>
        )}
      </FilterSolution3>

      {/* <div style={{ marginTop: "2rem" }}>
        <FilterSolution3
          {...args}
          filterButton={<FilterTriggerButton label="1.5 Multiple contents" />}
        >
          <FilterContents>Contents in here</FilterContents>
          <FilterContents>More contents in here</FilterContents>
        </FilterSolution3>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution3
          {...args}
          ref={buttonRef1}
          filterButton={
            <FilterTriggerButton label="2. Consumer controlled ref" />
          }
        >
          <FilterContents>Contents in here</FilterContents>
        </FilterSolution3>

        <br />
        <br />
        <button
          onClick={(): void => {
            buttonRef1.current?.focus()
          }}
        >
          Focus on Filter 2
        </button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution3
          // {...args}
          ref={buttonRef2}
          filterButton={
            <RemovableFilterTriggerButton
              ref={removableButtonRefs}
              triggerButtonProps={{
                label: "3. Consumer controlled ref (removable)",
              }}
              removeButtonProps={{ onClick: () => undefined }}
            />
          }
        >
          <FilterContents>Contents in here</FilterContents>
        </FilterSolution3>

        <br />
        <br />
        <button
          onClick={(): void => {
            buttonRef2.current?.focus()
          }}
        >
          Focus on Filter 3 - trigger button
        </button>
        <button
          onClick={(): void => {
            removeButtonRef.current?.focus()
          }}
          style={{ marginLeft: "1rem" }}
        >
          Focus on Filter 3 - remove button
        </button>
      </div> */}
    </>
  )
}

// Pros:
// - No magic ref handling in the component
// Cons:
// - All refs must be provided by consumer
// - Open state handled by consumer;
//   - @todo try put it in context?
export const Solution3DRP: ComponentStory<
  typeof FilterSolution3
> = args => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [range, setRange] = useState<DateRange | undefined>()


  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const [isOpenExisting, setIsOpenExisting] = useState<boolean>(false)
  const [rangeDefaultExisting, setRangeDefaultExisting] = useState<
  DateRange | undefined
  >({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })

  const buttonRef3 = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef: buttonRef3,
    removeButtonRef,
  })
  const [isOpenRemovable, setIsOpenRemovable] = useState<boolean>(false)
  const [rangeRemovable, setRangeRemovable] = useState<DateRange | undefined>()

  return (
    <>
      <FilterSolution3
        // {...args}
        label="Dates"
      >
        <FilterTriggerButtonContext
          ref={buttonRef1}
          isOpen={isOpen}
          onClick={(): void => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <FilterPopoverWithFocusLock
            referenceElement={buttonRef1.current}
            onClose={(): void => setIsOpen(false)}
          >
            <FilterContents>
              <FilterDateRangePickerField
                id="filterdrp"
                // label="Dates"
                locale="en-AU"
                selectedRange={range}
                onRangeChange={setRange}
              />
            </FilterContents>
          </FilterPopoverWithFocusLock>
        )}
      </FilterSolution3>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution3
          // {...args}
          label="Dates existing"
          // NOTE:
          // Since the button is mounted before the contents within the popover,
          // to pre-fill the button we must provide the initial selected value here
          defaultSelectedValuesLabel={
            isCompleteDateRange(rangeDefaultExisting) ? (
              <DateRangeDisplayLabel
                dateRange={rangeDefaultExisting}
                locale={getLocale("en-AU")}
              />
            ) : undefined
          }
        >
        <FilterTriggerButtonContext
          ref={buttonRef2}
          isOpen={isOpenExisting}
          onClick={(): void => setIsOpenExisting(!isOpenExisting)}
        />
        {isOpenExisting && (
          <FilterPopoverWithFocusLock
            referenceElement={buttonRef2.current}
            onClose={(): void => setIsOpenExisting(false)}
          >
            <FilterContents>
              <FilterDateRangePickerField
                id="filterdrp-existing"
                // label="Dates"
                locale="en-AU"
                selectedRange={rangeDefaultExisting}
                onRangeChange={setRangeDefaultExisting}
              />
            </FilterContents>
          </FilterPopoverWithFocusLock>
        )}
        </FilterSolution3>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution3
          // {...args}
          ref={buttonRef3}
          label="Dates"
        >
          <RemovableFilterTriggerButtonContext
            ref={removableButtonRefs}
            triggerButtonProps={{
              isOpen: isOpenRemovable,
              onClick: (): void => setIsOpenRemovable(!isOpenRemovable)
            }}
            removeButtonProps={{ onClick: () => undefined }}
          />
          {isOpenRemovable && (
          <FilterPopoverWithFocusLock
            referenceElement={buttonRef3.current}
            onClose={(): void => setIsOpenRemovable(false)}
          >
            <FilterContents>
              <FilterDateRangePickerField
                id="filterdrp--remove"
                // label="Dates"
                locale="en-AU"
                selectedRange={rangeRemovable}
                onRangeChange={setRangeRemovable}
              />
            </FilterContents>
          </FilterPopoverWithFocusLock>
          )}
        </FilterSolution3>
      </div>
    </>
  )
}
Solution3DRP.storyName = "Solution 3 - FilterDRP"

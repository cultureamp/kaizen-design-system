import React, { useRef, useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { DateRange, FilterSolution2Context, FilterSolution2Ref } from "../index"
import { FilterDateRangePickerField } from "../src/Filter/FilterDateRangePickerField"
import {
  FilterTriggerButton,
  FilterTriggerButtonContext,
  RemovableFilterTriggerButton,
  RemovableFilterTriggerButtonContext,
  RemovableFilterTriggerButtonRefs,
} from "../src/Filter/components"
import { FilterContents } from "../src/Filter/components/FilterContents"
import { DateRangeDisplayLabel } from "../src/FilterDateRangePicker/components/DateRangeDisplayLabel"
import { isCompleteDateRange } from "../src/FilterDateRangePicker/utils/isCompleteDateRange"
import { getLocale } from "../src/utils/getLocale"

export default {
  title: `${CATEGORIES.introduction}/Filter`,
  component: FilterSolution2Ref,
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
} as ComponentMeta<typeof FilterSolution2Ref>

export const FilterSolution2: ComponentStory<
  typeof FilterSolution2Ref
> = args => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef: buttonRef2,
    removeButtonRef,
  })

  return (
    <>
      <FilterSolution2Ref
        // {...args}
        filterButton={(props): JSX.Element => (
          <FilterTriggerButton label="1. Component controlled ref" {...props} />
        )}
      >
        <FilterContents>Contents in here</FilterContents>
      </FilterSolution2Ref>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2Ref
          {...args}
          filterButton={(props): JSX.Element => (
            <FilterTriggerButton label="1.5 Multiple contents" {...props} />
          )}
        >
          <FilterContents>Contents in here</FilterContents>
          <FilterContents>More contents in here</FilterContents>
        </FilterSolution2Ref>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2Ref
          {...args}
          ref={buttonRef1}
          filterButton={(props): JSX.Element => (
            <FilterTriggerButton
              label="2. Consumer controlled ref"
              {...props}
            />
          )}
        >
          <FilterContents>Contents in here</FilterContents>
        </FilterSolution2Ref>

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
        <FilterSolution2Ref
          // {...args}
          ref={buttonRef2}
          filterButton={(props): JSX.Element => (
            <RemovableFilterTriggerButton
              ref={removableButtonRefs}
              triggerButtonProps={{
                label: "3. Consumer controlled ref (removable)",
                ...props,
              }}
              removeButtonProps={{ onClick: () => undefined }}
            />
          )}
        >
          <FilterContents>Contents in here</FilterContents>
        </FilterSolution2Ref>

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
      </div>
    </>
  )
}

export const Solution2DRP: ComponentStory<
  typeof FilterSolution2Context
> = args => {
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef: buttonRef2,
    removeButtonRef,
  })

  const [range, setRange] = useState<DateRange | undefined>()
  const [rangeDefaultExisting, setRangeDefaultExisting] = useState<
    DateRange | undefined
  >({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })
  const [rangeRemovable, setRangeRemovable] = useState<DateRange | undefined>()

  return (
    <>
      <FilterSolution2Context
        // {...args}
        label="Dates"
        filterButton={(props): JSX.Element => (
          <FilterTriggerButtonContext {...props} />
        )}
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
      </FilterSolution2Context>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2Context
          // {...args}
          label="Dates existing"
          filterButton={(props): JSX.Element => (
            <FilterTriggerButtonContext {...props} />
          )}
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
          <FilterContents>
            <FilterDateRangePickerField
              id="filterdrp-existing"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeDefaultExisting}
              onRangeChange={setRangeDefaultExisting}
            />
          </FilterContents>
        </FilterSolution2Context>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2Context
          // {...args}
          ref={buttonRef2}
          label="Dates"
          filterButton={(props): JSX.Element => (
            <RemovableFilterTriggerButtonContext
              ref={removableButtonRefs}
              triggerButtonProps={{ ...props }}
              removeButtonProps={{ onClick: () => undefined }}
            />
          )}
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
        </FilterSolution2Context>
      </div>
    </>
  )
}
Solution2DRP.storyName = "Solution 2 - FilterDRP"

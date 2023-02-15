import React, { useRef, useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../../storybook/constants"
import { figmaEmbed } from "../../../../storybook/helpers"
import { DateRange, FilterSolution3, FilterSolution3NoContext,
} from "../../index"
import { FilterDateRangePickerField, FilterDateRangePickerFieldNoContext } from "../../src/Filter/FilterDateRangePickerField"
import {
  FilterTriggerButton,
  FilterTriggerButtonContext,
  RemovableFilterTriggerButton,
  RemovableFilterTriggerButtonContext,
  RemovableFilterTriggerButtonRefs,
} from "../../src/Filter/components"
import { FilterContents } from "../../src/Filter/components/FilterContents"
import { FilterPopoverWithFocusLock } from "../../src/Filter/components/FilterPopover"
import { DateRangeDisplayLabel } from "../../src/FilterDateRangePicker/components/DateRangeDisplayLabel"
import { isCompleteDateRange } from "../../src/FilterDateRangePicker/utils/isCompleteDateRange"
import { getLocale } from "../../src/utils/getLocale"

export default {
  title: `${CATEGORIES.solutionPreview}/Filter Solution 3`,
  component: FilterSolution3NoContext,
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
} as ComponentMeta<typeof FilterSolution3NoContext>

export const Solution3: ComponentStory<
  typeof FilterSolution3
> = () => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [range, setRange] = useState<DateRange | undefined>()

  const buttonRefMultiContents = useRef<HTMLButtonElement>(null)
  const [isOpenMultiContents, setIsOpenMultiContents] = useState<boolean>(false)
  const [rangeMultiContents, setRangeMultiContents] = useState<DateRange | undefined>()

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
      <p><strong>Note:</strong> Consumer must provide the refs for all</p>
<React.StrictMode>
      <FilterSolution3
        label="Single button"
      >
        <FilterTriggerButtonContext
          ref={buttonRef1}
          isOpen={isOpen}
          onClick={(): void => setIsOpen(!isOpen)}
          selectedValue={
            isCompleteDateRange(range) ? (
              <DateRangeDisplayLabel
                dateRange={range}
                locale={getLocale("en-AU")}
              />
            ) : undefined
          }
        />
        {isOpen && (
          <FilterPopoverWithFocusLock
            referenceElement={buttonRef1.current}
            onClose={(): void => setIsOpen(false)}
          >
            <FilterContents>
              <FilterDateRangePickerField
                id="filterdrp"
                locale="en-AU"
                selectedRange={range}
                onRangeChange={setRange}
              />
            </FilterContents>
          </FilterPopoverWithFocusLock>
        )}
      </FilterSolution3>
      </React.StrictMode>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution3
          label="Multi contents"
        >
          <FilterTriggerButtonContext
            ref={buttonRefMultiContents}
            isOpen={isOpenMultiContents}
            onClick={(): void => setIsOpenMultiContents(!isOpenMultiContents)}
            selectedValue={
              isCompleteDateRange(rangeMultiContents) ? (
                <DateRangeDisplayLabel
                  dateRange={rangeMultiContents}
                  locale={getLocale("en-AU")}
                />
              ) : undefined
            }
          />
          {isOpenMultiContents && (
            <FilterPopoverWithFocusLock
              referenceElement={buttonRefMultiContents.current}
              onClose={(): void => setIsOpenMultiContents(false)}
            >
              <FilterContents>
                Some more contents
              </FilterContents>
              <FilterContents>
                <FilterDateRangePickerField
                  id="filterdrp"
                  locale="en-AU"
                  selectedRange={rangeMultiContents}
                  onRangeChange={setRangeMultiContents}
                />
              </FilterContents>
            </FilterPopoverWithFocusLock>
          )}
        </FilterSolution3>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution3
          label="Dates existing"
        >
          <FilterTriggerButtonContext
            ref={buttonRef2}
            isOpen={isOpenExisting}
            onClick={(): void => setIsOpenExisting(!isOpenExisting)}
            selectedValue={
              isCompleteDateRange(rangeDefaultExisting) ? (
                <DateRangeDisplayLabel
                  dateRange={rangeDefaultExisting}
                  locale={getLocale("en-AU")}
                />
              ) : undefined
            }
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

        <br />
        <br />
        <button
          onClick={(): void => {
            setRangeDefaultExisting(undefined)
          }}
        >
          Clear value
        </button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution3
          label="Dates"
        >
          <RemovableFilterTriggerButtonContext
            ref={removableButtonRefs}
            triggerButtonProps={{
              isOpen: isOpenRemovable,
              onClick: (): void => setIsOpenRemovable(!isOpenRemovable),
              selectedValue:
                isCompleteDateRange(rangeRemovable) ? (
                  <DateRangeDisplayLabel
                    dateRange={rangeRemovable}
                    locale={getLocale("en-AU")}
                  />
                ) : undefined
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
Solution3.storyName = "Solution 3 with context"

export const Solution3NoContext: ComponentStory<
  typeof FilterSolution3
> = () => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [range, setRange] = useState<DateRange | undefined>()

  const buttonRefMultiContents = useRef<HTMLButtonElement>(null)
  const [isOpenMultiContents, setIsOpenMultiContents] = useState<boolean>(false)
  const [rangeMultiContents, setRangeMultiContents] = useState<DateRange | undefined>()

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
      <p><strong>Note:</strong> Consumer must provide the refs for all</p>

      <FilterSolution3NoContext
      >
        <FilterTriggerButton
        label="Single button"
          ref={buttonRef1}
          isOpen={isOpen}
          onClick={(): void => setIsOpen(!isOpen)}
          selectedValue={
            isCompleteDateRange(range) ? (
              <DateRangeDisplayLabel
                dateRange={range}
                locale={getLocale("en-AU")}
              />
            ) : undefined
          }
        />
        {isOpen && (
          <FilterPopoverWithFocusLock
            referenceElement={buttonRef1.current}
            onClose={(): void => setIsOpen(false)}
          >
            <FilterContents>
              <FilterDateRangePickerFieldNoContext
                id="filterdrp"
                label="Single button"
                locale="en-AU"
                selectedRange={range}
                onRangeChange={setRange}
              />
            </FilterContents>
          </FilterPopoverWithFocusLock>
        )}
      </FilterSolution3NoContext>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution3NoContext
        >
          <FilterTriggerButton
          label="Multi contents"
            ref={buttonRefMultiContents}
            isOpen={isOpenMultiContents}
            onClick={(): void => setIsOpenMultiContents(!isOpenMultiContents)}
            selectedValue={
              isCompleteDateRange(rangeMultiContents) ? (
                <DateRangeDisplayLabel
                  dateRange={rangeMultiContents}
                  locale={getLocale("en-AU")}
                />
              ) : undefined
            }
          />
          {isOpenMultiContents && (
            <FilterPopoverWithFocusLock
              referenceElement={buttonRefMultiContents.current}
              onClose={(): void => setIsOpenMultiContents(false)}
            >
              <FilterContents>
                Some more contents
              </FilterContents>
              <FilterContents>
                <FilterDateRangePickerFieldNoContext
                  id="filterdrp"
                  label="Multi contents"
                  locale="en-AU"
                  selectedRange={rangeMultiContents}
                  onRangeChange={setRangeMultiContents}
                />
              </FilterContents>
            </FilterPopoverWithFocusLock>
          )}
        </FilterSolution3NoContext>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution3NoContext
        >
          <FilterTriggerButton
            ref={buttonRef2}
            label="Dates existing"
            isOpen={isOpenExisting}
            onClick={(): void => setIsOpenExisting(!isOpenExisting)}
            selectedValue={
              isCompleteDateRange(rangeDefaultExisting) ? (
                <DateRangeDisplayLabel
                  dateRange={rangeDefaultExisting}
                  locale={getLocale("en-AU")}
                />
              ) : undefined
            }
          />
          {isOpenExisting && (
            <FilterPopoverWithFocusLock
              referenceElement={buttonRef2.current}
              onClose={(): void => setIsOpenExisting(false)}
            >
              <FilterContents>
                <FilterDateRangePickerFieldNoContext
                  id="filterdrp-existing"
                  label="Dates"
                  locale="en-AU"
                  selectedRange={rangeDefaultExisting}
                  onRangeChange={setRangeDefaultExisting}
                />
              </FilterContents>
            </FilterPopoverWithFocusLock>
          )}
        </FilterSolution3NoContext>

        <br />
        <br />
        <button
          onClick={(): void => {
            setRangeDefaultExisting(undefined)
          }}
        >
          Clear value
        </button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution3NoContext
        >
          <RemovableFilterTriggerButton
            ref={removableButtonRefs}
            triggerButtonProps={{
              label: "Dates",
              isOpen: isOpenRemovable,
              onClick: (): void => setIsOpenRemovable(!isOpenRemovable),
              selectedValue:
                isCompleteDateRange(rangeRemovable) ? (
                  <DateRangeDisplayLabel
                    dateRange={rangeRemovable}
                    locale={getLocale("en-AU")}
                  />
                ) : undefined
            }}
            removeButtonProps={{ onClick: () => undefined }}
          />
          {isOpenRemovable && (
            <FilterPopoverWithFocusLock
              referenceElement={buttonRef3.current}
              onClose={(): void => setIsOpenRemovable(false)}
            >
              <FilterContents>
                <FilterDateRangePickerFieldNoContext
                  id="filterdrp--remove"
                  label="Dates"
                  locale="en-AU"
                  selectedRange={rangeRemovable}
                  onRangeChange={setRangeRemovable}
                />
              </FilterContents>
            </FilterPopoverWithFocusLock>
          )}
        </FilterSolution3NoContext>
      </div>
    </>
  )
}
Solution3NoContext.storyName = "Solution 3 NO context"

import React, { useRef, useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StickerSheet } from "../../../../storybook/components/StickerSheet"
import { CATEGORIES } from "../../../../storybook/constants"
import { figmaEmbed } from "../../../../storybook/helpers"
import { DateRange,
  FilterSolution2ForcedButtonRef } from "../../index"
import { FilterDateRangePickerField } from "../../src/Filter/FilterDateRangePickerField"
import { FilterRef, FilterSolution2FlexiButtonRef, FilterSolution2ManualOpen } from "../../src/Filter/FilterSolution2"
import {
  FilterTriggerButton,
  FilterTriggerButtonContext,
  FilterTriggerButtonContextWithFilterRef,
  RemovableFilterTriggerButton,
  RemovableFilterTriggerButtonContext,
  RemovableFilterTriggerButtonRefs,
} from "../../src/Filter/components"
import { FilterContents } from "../../src/Filter/components/FilterContents"
import { DateRangeDisplayLabel } from "../../src/FilterDateRangePicker/components/DateRangeDisplayLabel"
import { isCompleteDateRange } from "../../src/FilterDateRangePicker/utils/isCompleteDateRange"
import { getLocale } from "../../src/utils/getLocale"

export default {
  title: `${CATEGORIES.solutionPreview}/Filter Solution 2`,
  component: FilterSolution2FlexiButtonRef,
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
} as ComponentMeta<typeof FilterSolution2FlexiButtonRef>

// export const FilterSolution2: ComponentStory<
//   typeof FilterSolution2Ref
// > = args => {
//   const buttonRef1 = useRef<HTMLButtonElement>(null)
//   const buttonRef2 = useRef<HTMLButtonElement>(null)
//   const removeButtonRef = useRef<HTMLButtonElement>(null)
//   const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
//     triggerButtonRef: buttonRef2,
//     removeButtonRef,
//   })

//   return (
//     <>
//       <FilterSolution2Ref
//         // {...args}
//         filterButton={(props): JSX.Element => (
//           <FilterTriggerButton label="1. Component controlled ref" {...props} />
//         )}
//       >
//         <FilterContents>Contents in here</FilterContents>
//       </FilterSolution2Ref>

//       <div style={{ marginTop: "2rem" }}>
//         <FilterSolution2Ref
//           {...args}
//           filterButton={(props): JSX.Element => (
//             <FilterTriggerButton label="1.5 Multiple contents" {...props} />
//           )}
//         >
//           <FilterContents>Contents in here</FilterContents>
//           <FilterContents>More contents in here</FilterContents>
//         </FilterSolution2Ref>
//       </div>

//       <div style={{ marginTop: "2rem" }}>
//         <FilterSolution2Ref
//           {...args}
//           ref={buttonRef1}
//           filterButton={(props): JSX.Element => (
//             <FilterTriggerButton
//               label="2. Consumer controlled ref"
//               {...props}
//             />
//           )}
//         >
//           <FilterContents>Contents in here</FilterContents>
//         </FilterSolution2Ref>

//         <br />
//         <br />
//         <button
//           onClick={(): void => {
//             buttonRef1.current?.focus()
//           }}
//         >
//           Focus on Filter 2
//         </button>
//       </div>

//       <div style={{ marginTop: "2rem" }}>
//         <FilterSolution2Ref
//           // {...args}
//           ref={buttonRef2}
//           filterButton={(props): JSX.Element => (
//             <RemovableFilterTriggerButton
//               ref={removableButtonRefs}
//               triggerButtonProps={{
//                 label: "3. Consumer controlled ref (removable)",
//                 ...props,
//               }}
//               removeButtonProps={{ onClick: () => undefined }}
//             />
//           )}
//         >
//           <FilterContents>Contents in here</FilterContents>
//         </FilterSolution2Ref>

//         <br />
//         <br />
//         <button
//           onClick={(): void => {
//             buttonRef2.current?.focus()
//           }}
//         >
//           Focus on Filter 3 - trigger button
//         </button>
//         <button
//           onClick={(): void => {
//             removeButtonRef.current?.focus()
//           }}
//           style={{ marginLeft: "1rem" }}
//         >
//           Focus on Filter 3 - remove button
//         </button>
//       </div>
//     </>
//   )
// }

export const Solution2DRP: ComponentStory<
  typeof FilterSolution2FlexiButtonRef
> = () => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  // const buttonRef2 = useRef<HTMLButtonElement>(null)
  const buttonRef3 = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef: buttonRef3,
    removeButtonRef,
  })

  const [range, setRange] = useState<DateRange | undefined>()
  const [rangeMultiContents, setRangeMultiContents] = useState<DateRange | undefined>()
  const [rangeRefParent, setRangeRefParent] = useState<DateRange | undefined>()
  // const [rangeRefButton, setRangeRefButton] = useState<DateRange | undefined>()
  const [rangeDefaultExisting, setRangeDefaultExisting] = useState<
    DateRange | undefined
  >({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })
  const [rangeRemovable, setRangeRemovable] = useState<DateRange | undefined>()

  return (
    <>
      <FilterSolution2FlexiButtonRef
        label="Single button; No ref"
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
      </FilterSolution2FlexiButtonRef>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2FlexiButtonRef
          label="Multi contents"
          filterButton={(props): JSX.Element => (
            <FilterTriggerButtonContext {...props} />
          )}
        >
          <FilterContents>
            Some more contents
          </FilterContents>
          <FilterContents>
            <FilterDateRangePickerField
              id="filterdrp"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeMultiContents}
              onRangeChange={setRangeMultiContents}
            />
          </FilterContents>
        </FilterSolution2FlexiButtonRef>
      </div>


      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2FlexiButtonRef
          // {...args}
          // @note: confusing having this here?
          ref={buttonRef1}
          label="Single button; Has ref on parent"
          filterButton={(props): JSX.Element => (
            <FilterTriggerButtonContext {...props} />
          )}
        >
          <FilterContents>
            <FilterDateRangePickerField
              id="filterdrp"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeRefParent}
              onRangeChange={setRangeRefParent}
            />
          </FilterContents>
        </FilterSolution2FlexiButtonRef>

        <br />
        <br />
        <button
          onClick={(): void => {
            buttonRef1.current?.focus()
          }}
        >
          Focus on single button with ref on parent
        </button>
      </div>

      {/*
        THIS DOES NOT WORK
        Since we do not know the shape of the button,
        the component cannot figure out the correct
        path to the ref element, so it must always exist on
        the parent (putting it on the button in addition is
        fine though).
      */}
      {/* <div style={{ marginTop: "2rem" }}>
        <FilterSolution2FlexiButtonRef
          // {...args}
          label="Single button; Has ref on button (THIS DOES NOT WORK)"
          filterButton={(props): JSX.Element => (
            <FilterTriggerButtonContext
            ref={buttonRef2}
            {...props}
            />
          )}
        >
          <FilterContents>
            <FilterDateRangePickerField
              id="filterdrp"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeRefButton}
              onRangeChange={setRangeRefButton}
            />
          </FilterContents>
        </FilterSolution2FlexiButtonRef>

        <br />
        <br />
        <button
          onClick={(): void => {
            buttonRef2.current?.focus()
          }}
        >
          Focus on single button with ref on button (popover does not work)
        </button>
      </div> */}

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2FlexiButtonRef
          label="Existing value; No ref"
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
        </FilterSolution2FlexiButtonRef>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2FlexiButtonRef
          // We must provide the button ref here, and the whole object within the button
          ref={buttonRef3}
          label="Removeable; Has ref on parent + button"
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
        </FilterSolution2FlexiButtonRef>
      </div>

      <br />
        <br />
        <button
          onClick={(): void => {
            buttonRef3.current?.focus()
          }}
        >
          Focus on Removable button - trigger button
        </button>
        <button
          onClick={(): void => {
            removeButtonRef.current?.focus()
          }}
          style={{ marginLeft: "1rem" }}
        >
          Focus on Removable button - remove button
        </button>
    </>
  )
}
Solution2DRP.storyName = "Flexible button ref"


// Pros:
// - Putting a ref in the Button can be optional for the consumer
// Cons:
// - Consumers are tied into a shape for the refs (must have `triggerButtonRef`)
// - The obj ref means at least 2 usages of useRef
// - Consumer MUST use useRef, otherwise it will not work
export const Solution2ForcedButtonRef: ComponentStory<
  typeof FilterSolution2FlexiButtonRef
> = () => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const singleButtonRef = useRef<FilterRef>({
    triggerButtonRef: buttonRef1,
  })
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef: buttonRef2,
    removeButtonRef,
  })

  const [range, setRange] = useState<DateRange | undefined>()
  const [rangeMultiContents, setRangeMultiContents] = useState<DateRange | undefined>()
  const [rangeRef, setRangeRef] = useState<DateRange | undefined>()
  const [rangeDefaultExisting, setRangeDefaultExisting] = useState<
    DateRange | undefined
  >({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })
  const [rangeRemovable, setRangeRemovable] = useState<DateRange | undefined>()
  const [rangeRemovableRef, setRangeRemovableRef] = useState<DateRange | undefined>()

  return (
    <>
      <FilterSolution2ForcedButtonRef
        label="No ref"
        filterButton={(props): JSX.Element => (
          <FilterTriggerButtonContextWithFilterRef {...props} />
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
      </FilterSolution2ForcedButtonRef>


      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2ForcedButtonRef
          label="Multi contents"
          filterButton={(props): JSX.Element => (
            <FilterTriggerButtonContextWithFilterRef {...props} />
          )}
        >
          <FilterContents>
            Some more contents
          </FilterContents>
          <FilterContents>
            <FilterDateRangePickerField
              id="filterdrp"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeMultiContents}
              onRangeChange={setRangeMultiContents}
            />
          </FilterContents>
        </FilterSolution2ForcedButtonRef>
      </div>


      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2ForcedButtonRef
          label="Single button ref"
          filterButton={(props): JSX.Element => (
            <FilterTriggerButtonContextWithFilterRef
              ref={singleButtonRef}
              {...props}
            />
          )}
        >
          <FilterContents>
            <FilterDateRangePickerField
              id="filterdrp"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeRef}
              onRangeChange={setRangeRef}
            />
          </FilterContents>
        </FilterSolution2ForcedButtonRef>

        <br />
        <br />
        <button
          onClick={(): void => {
            buttonRef1.current?.focus()
          }}
        >
          Focus on Single button with ref
        </button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2ForcedButtonRef
          label="Existing value"
          filterButton={(props): JSX.Element => (
            <FilterTriggerButtonContextWithFilterRef
              {...props}
              />
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
              id="filterdrp"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeDefaultExisting}
              onRangeChange={setRangeDefaultExisting}
            />
          </FilterContents>
        </FilterSolution2ForcedButtonRef>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2ForcedButtonRef
          label="Removable no ref"
          filterButton={(props): JSX.Element => (
            <RemovableFilterTriggerButtonContext
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
        </FilterSolution2ForcedButtonRef>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2ForcedButtonRef
          label="Removable with ref"
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
              selectedRange={rangeRemovableRef}
              onRangeChange={setRangeRemovableRef}
            />
          </FilterContents>
        </FilterSolution2ForcedButtonRef>

        <br />
        <br />
        <button
          onClick={(): void => {
            buttonRef2.current?.focus()
          }}
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
Solution2ForcedButtonRef.storyName = "Forced shape button ref"

export const Solution2ManualOpen: ComponentStory<
  typeof FilterSolution2ManualOpen
> = () => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const singleButtonRef = useRef<FilterRef>({
    triggerButtonRef: buttonRef1,
  })
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef: buttonRef2,
    removeButtonRef,
  })

  const [isOpenNoRef, setIsOpenNoRef] = useState<boolean>(false)
  const [range, setRange] = useState<DateRange | undefined>()
  const [isOpenMultiContents, setIsOpenMultiContents] = useState<boolean>(false)
  const [rangeMultiContents, setRangeMultiContents] = useState<DateRange | undefined>()
  const [isOpenRef, setIsOpenRef] = useState<boolean>(false)
  const [rangeRef, setRangeRef] = useState<DateRange | undefined>()
  const [isOpenDefaultExisting, setIsOpenDefaultExisting] = useState<boolean>(false)
  const [rangeDefaultExisting, setRangeDefaultExisting] = useState<
  DateRange | undefined
  >({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })
  const [isOpenRemovable, setIsOpenRemovable] = useState<boolean>(false)
  const [rangeRemovable, setRangeRemovable] = useState<DateRange | undefined>()
  const [isOpenRemovableRef, setIsOpenRemovableRef] = useState<boolean>(false)
  const [rangeRemovableRef, setRangeRemovableRef] = useState<DateRange | undefined>()

  return (
    <>
      <FilterSolution2ManualOpen
        isOpen={isOpenNoRef}
        setIsOpen={setIsOpenNoRef}
        label="No ref"
        filterButton={(props): JSX.Element => (
          <FilterTriggerButtonContextWithFilterRef
            selectedValue={isCompleteDateRange(range) ? (
              <DateRangeDisplayLabel
                dateRange={range}
                locale={getLocale("en-AU")}
              />
            ) : undefined}
           {...props}
           />
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
      </FilterSolution2ManualOpen>


      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2ManualOpen
          isOpen={isOpenMultiContents}
          setIsOpen={setIsOpenMultiContents}
          label="Multi contents"
          filterButton={(props): JSX.Element => (
            <FilterTriggerButtonContextWithFilterRef
            selectedValue={isCompleteDateRange(rangeMultiContents) ? (
              <DateRangeDisplayLabel
                dateRange={rangeMultiContents}
                locale={getLocale("en-AU")}
              />
            ) : undefined}
            {...props} />
          )}
        >
          <FilterContents>
            Some more contents
          </FilterContents>
          <FilterContents>
            <FilterDateRangePickerField
              id="filterdrp"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeMultiContents}
              onRangeChange={setRangeMultiContents}
            />
          </FilterContents>
        </FilterSolution2ManualOpen>
      </div>


      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2ManualOpen
          isOpen={isOpenRef}
          setIsOpen={setIsOpenRef}
          label="Single button ref"
          filterButton={(props): JSX.Element => (
            <FilterTriggerButtonContextWithFilterRef
              ref={singleButtonRef}
              selectedValue={isCompleteDateRange(rangeRef) ? (
                <DateRangeDisplayLabel
                  dateRange={rangeRef}
                  locale={getLocale("en-AU")}
                />
              ) : undefined}
              {...props}
            />
          )}
        >
          <FilterContents>
            <FilterDateRangePickerField
              id="filterdrp"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeRef}
              onRangeChange={setRangeRef}
            />
          </FilterContents>
        </FilterSolution2ManualOpen>

        <br />
        <br />
        <button
          onClick={(): void => {
            buttonRef1.current?.focus()
          }}
        >
          Focus on Single button with ref
        </button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2ManualOpen
          isOpen={isOpenDefaultExisting}
          setIsOpen={setIsOpenDefaultExisting}
          label="Existing value"
          filterButton={(props): JSX.Element => (
            <FilterTriggerButtonContextWithFilterRef
              selectedValue={isCompleteDateRange(rangeDefaultExisting) ? (
                <DateRangeDisplayLabel
                  dateRange={rangeDefaultExisting}
                  locale={getLocale("en-AU")}
                />
              ) : undefined}
              {...props}
              />
          )}
        >
          <FilterContents>
            <FilterDateRangePickerField
              id="filterdrp"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeDefaultExisting}
              onRangeChange={setRangeDefaultExisting}
            />
          </FilterContents>
        </FilterSolution2ManualOpen>

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
        <FilterSolution2ManualOpen
          isOpen={isOpenRemovable}
          setIsOpen={setIsOpenRemovable}
          label="Removable no ref"
          filterButton={(props): JSX.Element => (
            <RemovableFilterTriggerButtonContext
              triggerButtonProps={{
                selectedValue: isCompleteDateRange(rangeRemovable) ? (
                  <DateRangeDisplayLabel
                    dateRange={rangeRemovable}
                    locale={getLocale("en-AU")}
                  />
                ) : undefined,
                ...props
               }}
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
        </FilterSolution2ManualOpen>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2ManualOpen
          isOpen={isOpenRemovableRef}
          setIsOpen={setIsOpenRemovableRef}
          label="Removable with ref"
          filterButton={(props): JSX.Element => (
            <RemovableFilterTriggerButtonContext
              ref={removableButtonRefs}
              triggerButtonProps={{
                selectedValue: isCompleteDateRange(rangeRemovableRef) ? (
                  <DateRangeDisplayLabel
                    dateRange={rangeRemovableRef}
                    locale={getLocale("en-AU")}
                  />
                ) : undefined,
                ...props
               }}
              removeButtonProps={{ onClick: () => undefined }}
            />
          )}
        >
          <FilterContents>
            <FilterDateRangePickerField
              id="filterdrp--remove"
              // label="Dates"
              locale="en-AU"
              selectedRange={rangeRemovableRef}
              onRangeChange={setRangeRemovableRef}
            />
          </FilterContents>
        </FilterSolution2ManualOpen>

        <br />
        <br />
        <button
          onClick={(): void => {
            buttonRef2.current?.focus()
          }}
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
Solution2ManualOpen.storyName = "Forced shape button ref; manual isOpen"

import React, { useRef } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import {
  FilterWithRef,
  FilterConsumerRef,
  FilterWithForcedShapeRef,
  FilterRef,
} from "../index"
import {
  FilterTriggerButton,
  FilterTriggerButtonWithFilterRef,
  RemovableFilterTriggerButton,
  RemovableFilterTriggerButtonRefs,
} from "../src/Filter/components"

export default {
  title: `${CATEGORIES.introduction}/Filter Solution 2`,
  component: FilterWithRef,
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
} as ComponentMeta<typeof FilterWithRef>

// Pros:
// - Putting a ref in the Button can be optional for the consumer
// Cons:
// - Consumer MUST use useRef, otherwise it will not work
// Notes:
// - When the button refs are an object, the consumer must provide it
export const WithRef: ComponentStory<typeof FilterWithRef> = args => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef: buttonRef2,
    removeButtonRef,
  })

  return (
    <>
      <FilterWithRef
        {...args}
        ref={buttonRef1}
        filterButton={<FilterTriggerButton label="Pancakes" />}
      >
        Contents in here
      </FilterWithRef>

      <div style={{ marginTop: "2rem" }}>
        <FilterWithRef
          {...args}
          ref={buttonRef2}
          filterButton={
            <RemovableFilterTriggerButton
              ref={removableButtonRefs}
              triggerButtonProps={{ label: "Pancakes" }}
              removeButtonProps={{ onClick: () => undefined }}
            />
          }
        >
          Contents in here
        </FilterWithRef>
      </div>
    </>
  )
}
WithRef.storyName = "Filter - button ref not provided by consumer"

// Pros:
// - Putting a ref in the Button can be optional for the consumer
// Cons:
// - Consumers are tied into a shape for the refs (must have `triggerButtonRef`)
// - The obj ref means at least 2 usages of useRef
// - Consumer MUST use useRef, otherwise it will not work
export const ForcedShapeRef: ComponentStory<typeof FilterWithRef> = args => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const buttonRef = useRef<FilterRef>({
    triggerButtonRef: buttonRef1,
  })
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef: buttonRef2,
    removeButtonRef,
  })

  return (
    <>
      <FilterWithForcedShapeRef
        {...args}
        ref={buttonRef}
        filterButton={<FilterTriggerButtonWithFilterRef label="Pancakes" />}
      >
        Contents in here
      </FilterWithForcedShapeRef>

      <div style={{ marginTop: "2rem" }}>
        <FilterWithForcedShapeRef
          {...args}
          ref={removableButtonRefs}
          filterButton={
            <RemovableFilterTriggerButton
              triggerButtonProps={{ label: "Pancakes" }}
              removeButtonProps={{ onClick: () => undefined }}
            />
          }
        >
          Contents in here
        </FilterWithForcedShapeRef>
      </div>
    </>
  )
}
ForcedShapeRef.storyName =
  "Filter - button ref not provided by consumer (forced shape)"

// Pros:
// - Component code is simpler
// Cons:
// - Consumer MUST provide refs, otherwise the Popover and Button will not be attached
export const ConsumerRef: ComponentStory<typeof FilterConsumerRef> = args => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef: buttonRef2,
    removeButtonRef,
  })

  return (
    <>
      <FilterConsumerRef
        {...args}
        ref={buttonRef1}
        filterButton={<FilterTriggerButton ref={buttonRef1} label="Pancakes" />}
      >
        Contents in here
      </FilterConsumerRef>

      <div style={{ marginTop: "2rem" }}>
        <FilterConsumerRef
          {...args}
          ref={buttonRef2}
          filterButton={
            <RemovableFilterTriggerButton
              ref={removableButtonRefs}
              triggerButtonProps={{ label: "Pancakes" }}
              removeButtonProps={{ onClick: () => undefined }}
            />
          }
        >
          Contents in here
        </FilterConsumerRef>
      </div>
    </>
  )
}
ConsumerRef.storyName = "Filter - button ref(s) provided by consumer"

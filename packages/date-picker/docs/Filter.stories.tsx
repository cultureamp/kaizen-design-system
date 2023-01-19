import React, { useRef } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import {
  FilterSolution2Select,
} from "../index"
import {
  FilterTriggerButton,
  RemovableFilterTriggerButton,
  RemovableFilterTriggerButtonRefs,
} from "../src/Filter/components"

export default {
  title: `${CATEGORIES.introduction}/Filter`,
  component: FilterSolution2Select,
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
} as ComponentMeta<typeof FilterSolution2Select>

export const FilterSolution2: ComponentStory<typeof FilterSolution2Select> = args => {
  const buttonRef1 = useRef<HTMLButtonElement>(null)
  const buttonRef2 = useRef<HTMLButtonElement>(null)
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const removableButtonRefs = useRef<RemovableFilterTriggerButtonRefs>({
    triggerButtonRef: buttonRef2,
    removeButtonRef,
  })

  return (
    <>
      <FilterSolution2Select
        {...args}
        filterButton={<FilterTriggerButton label="1. Component controlled ref" />}
      >
        Contents in here
      </FilterSolution2Select>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2Select
          {...args}
          ref={buttonRef1}
          filterButton={<FilterTriggerButton label="2. Consumer controlled ref" />}
        >
          Contents in here
        </FilterSolution2Select>

        <br /><br />
        <button onClick={(): void => {
          buttonRef1.current?.focus()
        }}>
          Focus on Filter 2
        </button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <FilterSolution2Select
          {...args}
          ref={buttonRef2}
          filterButton={
            <RemovableFilterTriggerButton
              ref={removableButtonRefs}
              triggerButtonProps={{ label: "3. Consumer controlled ref (removable)" }}
              removeButtonProps={{ onClick: () => undefined }}
            />
          }
        >
          Contents in here
        </FilterSolution2Select>

        <br /><br />
        <button onClick={(): void => {
          buttonRef2.current?.focus()
        }}>
          Focus on Filter 3 - trigger button
        </button>
        <button onClick={(): void => {
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

import React, { useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CheckboxField, CheckboxGroup, Label } from "@kaizen/draft-form"
import { Select } from "@kaizen/draft-select"
import { FilterMenuButton } from "@kaizen/draft-filter-menu-button"
import isChromatic from "chromatic/isChromatic"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePicker } from "../src/DatePicker"
import { Calendar } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/Date Picker`,
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { DatePicker } from "@kaizen/date-picker"',
      },
    },
  },
}

export const KaizenDefault = props => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      id="make-me-unique-1"
      labelText="Label"
      value={selectedDate}
      onChange={onDayChange}
      initialMonth={new Date(2022, 2, 5)}
      {...props}
    />
  )
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader headings={["Default", "Value", "Disabled"]} />
        <StoryWrapper.Row rowTitle="Input">
          <DatePicker
            id="make-me-unique-1"
            labelText="Label"
            value={selectedDate}
            onChange={onDayChange}
          />
          <DatePicker
            id="make-me-unique-1"
            labelText="Label"
            value={new Date(2022, 2, 5)}
            onChange={onDayChange}
          />
          <DatePicker
            isDisabled
            id="make-me-unique-1"
            labelText="Label"
            value={selectedDate}
            onChange={onDayChange}
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})

StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

const CalendarTemplate: Story = props => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 15],
        },
      },
    ],
    placement: "bottom-start",
  })

  return (
    <div ref={setReferenceElement}>
      <Calendar
        setPopperElement={setPopperElement}
        styles={styles}
        attributes={attributes}
        firstDayOfWeek={0}
        onDayChange={() => undefined}
        onKeyDown={() => undefined}
        value={new Date(2022, 2, 5)}
        initialMonth={new Date(2022, 2, 5)}
        {...props}
      />
    </div>
  )
}

export const WithFocusedState = CalendarTemplate.bind({})
WithFocusedState.storyName = "Calendar (Focused state)"
WithFocusedState.parameters = { chromatic: { disable: false } }

WithFocusedState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const focusedDate = canvas.getByLabelText("Wed Mar 16 2022")
  await userEvent.click(focusedDate)
}

export const WithHoveredState = CalendarTemplate.bind({})
WithHoveredState.storyName = "Calendar (Hovered state)"
WithHoveredState.parameters = { chromatic: { disable: false } }

WithHoveredState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const hoveredDate = canvas.getByLabelText("Wed Mar 16 2022")
  await userEvent.hover(hoveredDate)
}

export const FormExample = props => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }
  const isInitialDropdownVisible = isChromatic()
  const [isDropdownVisible, setIsDropdownVisible] = useState(
    isInitialDropdownVisible
  )

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const hideDropdown = () => {
    setIsDropdownVisible(false)
  }
  const options = [
    { value: "Mindy", label: "Mindy" },
    { value: "Jaime", label: "Jaime", isDisabled: true },
    { value: "Rafa", label: "Rafa" },
    { value: "Elaine", label: "Elaine" },
    { value: "Julio", label: "Julio" },
    { value: "Priyanka", label: "Priyanka" },
    { value: "Prince", label: "Prince" },
    { value: "Charith", label: "Charith" },
    { value: "Nick", label: "Nick" },
  ]

  const dropdownOptions = [
    { id: 1, label: "Furry" },
    { id: 2, label: "Aquatic" },
    { id: 3, label: "Venomous" },
    { id: 4, label: "Egg-laying" },
    { id: 5, label: "Water-proof feathers" },
    { id: 6, label: "Cold-blooded" },
    { id: 7, label: "Warm-blooded" },
  ]

  return (
    <>
      <Label labelText="This is an example form" />
      <Select options={options} />
      <DatePicker
        id="make-me-unique-1"
        labelText="Label"
        value={selectedDate}
        onChange={onDayChange}
        {...props}
      />
      <FilterMenuButton
        id="filter-drawer-3"
        labelText="Filter"
        toggleDropdown={toggleDropdown}
        hideDropdown={hideDropdown}
        isDropdownVisible={true}
      >
        <div>
          <CheckboxGroup labelText="Traits">
            {dropdownOptions.map(trait => (
              <CheckboxField
                id={`checkbox-${trait.id}`}
                labelText={trait.label}
              />
            ))}
          </CheckboxGroup>
        </div>
      </FilterMenuButton>
    </>
  )
}
FormExample.parameters = { chromatic: { disable: false } }

import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { CheckboxGroup, CheckboxField, Label } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

interface RenderProps {
  checkedStatus: string
  onCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface CheckboxGroupExampleProps {
  render: (props: RenderProps) => JSX.Element
}

const CheckboxGroupExample = ({
  render,
}: CheckboxGroupExampleProps): JSX.Element => {
  const [checkedStatus, setCheckedStatus] = useState("mixed")
  const onCheckHandler = (): void => {
    const newStatus = checkedStatus === "on" ? "off" : "on"
    setCheckedStatus(newStatus)
  }

  return render({ checkedStatus, onCheckHandler })
}

export default {
  tags: ["autodocs"],
  title: "Components/Checkbox/Checkbox Group",
  component: CheckboxField,
  parameters: {
    docs: {
      description: {
        component: 'import { CheckboxGroup } from "@kaizen/draft-form";',
      },
    },
  },
} satisfies Meta<typeof CheckboxField>

export const InteractiveKaizenSiteDemo: StoryFn<
  typeof CheckboxField
> = args => (
  <div>
    <CheckboxGroup labelText="Checkbox Group Label">
      <CheckboxGroupExample
        render={({ checkedStatus, onCheckHandler }): JSX.Element => (
          <CheckboxField
            onCheck={onCheckHandler}
            id="checkbox-1"
            checkedStatus={checkedStatus as any}
            {...args}
          />
        )}
      />
      <CheckboxGroupExample
        render={({ checkedStatus, onCheckHandler }): JSX.Element => (
          <CheckboxField
            onCheck={onCheckHandler}
            id="checkbox-2"
            checkedStatus={checkedStatus as any}
            {...args}
          />
        )}
      />
      <CheckboxGroupExample
        render={({ checkedStatus, onCheckHandler }): JSX.Element => (
          <CheckboxField
            onCheck={onCheckHandler}
            id="checkbox-3"
            checkedStatus={checkedStatus as any}
            {...args}
          />
        )}
      />
    </CheckboxGroup>
  </div>
)
InteractiveKaizenSiteDemo.storyName = "Checkbox Group"
InteractiveKaizenSiteDemo.args = {
  labelText: "Label",
}

export const NestedCheckboxGroup: StoryFn = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<number[]>([])

  const onCheckHandler = (state: string, value: number): void => {
    if (state === "off") {
      setSelectedOptions(prev => [...prev, value])
    } else {
      setSelectedOptions(selectedOptions.filter(val => val !== value))
    }
  }

  const checkAllCheckboxOnCheckHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const state = event.currentTarget.value
    if (state === "off" || state === "mixed") {
      setSelectedOptions([1, 2, 3])
    } else {
      setSelectedOptions([])
    }
  }

  const allCheckboxState = React.useMemo(() => {
    if (selectedOptions.length === 3) {
      return "on"
    }
    if (selectedOptions.length === 0) {
      return "off"
    }
    return "mixed"
  }, [selectedOptions])

  return (
    <div>
      <CheckboxGroup noBottomMargin labelText="Checkbox Group Label">
        <CheckboxField
          id="checkbox-all"
          checkedStatus={allCheckboxState}
          labelText="All"
          onCheck={checkAllCheckboxOnCheckHandler}
        />
        <CheckboxField
          id="checkbox-1"
          checkedStatus={selectedOptions.includes(1) ? "on" : "off"}
          labelText="Label"
          onCheck={(e): void => onCheckHandler(e.currentTarget.value, 1)}
        />
        <CheckboxField
          id="checkbox-2"
          checkedStatus={selectedOptions.includes(2) ? "on" : "off"}
          labelText="Label"
          onCheck={(e): void => onCheckHandler(e.currentTarget.value, 2)}
        />
        <CheckboxField
          id="checkbox-3"
          checkedStatus={selectedOptions.includes(3) ? "on" : "off"}
          labelText="Label"
          onCheck={(e): void => onCheckHandler(e.currentTarget.value, 3)}
        />
      </CheckboxGroup>
    </div>
  )
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
      <StoryWrapper.Row rowTitle="On">
        <CheckboxGroup labelText="Checkbox Group Label" reversed={isReversed}>
          <CheckboxField
            id="checkbox-on-1"
            checkedStatus="on"
            labelText="Label"
            reversed={isReversed}
          />
          <CheckboxField
            id="checkbox-on-2"
            checkedStatus="on"
            labelText="Label"
            reversed={isReversed}
          />
        </CheckboxGroup>
        <CheckboxGroup labelText="Checkbox Group Label" reversed={isReversed}>
          <CheckboxField
            id="checkbox-on-disabled-1"
            checkedStatus="on"
            disabled
            labelText="Label"
            reversed={isReversed}
          />
          <CheckboxField
            id="checkbox-on-disabled-2"
            checkedStatus="on"
            disabled
            labelText="Label"
            reversed={isReversed}
          />
        </CheckboxGroup>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Off">
        <CheckboxGroup labelText="Checkbox Group Label" reversed={isReversed}>
          <CheckboxField
            id="checkbox-off-1"
            checkedStatus="off"
            labelText="Label"
            reversed={isReversed}
          />
          <CheckboxField
            id="checkbox-off-2"
            checkedStatus="off"
            labelText="Label"
            reversed={isReversed}
          />
        </CheckboxGroup>
        <CheckboxGroup labelText="Checkbox Group Label" reversed={isReversed}>
          <CheckboxField
            id="checkbox-off-disabled-1"
            checkedStatus="off"
            disabled
            labelText="Label"
            reversed={isReversed}
          />
          <CheckboxField
            id="checkbox-off-disabled-2"
            checkedStatus="off"
            disabled
            labelText="Label"
            reversed={isReversed}
          />
        </CheckboxGroup>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Mixed">
        <CheckboxGroup labelText="Checkbox Group Label" reversed={isReversed}>
          <CheckboxField
            id="checkbox-mixed-1"
            checkedStatus="mixed"
            labelText="Label"
            reversed={isReversed}
          />
          <CheckboxField
            id="checkbox-mixed-2"
            checkedStatus="mixed"
            labelText="Label"
            reversed={isReversed}
          />
        </CheckboxGroup>
        <CheckboxGroup labelText="Checkbox Group Label" reversed={isReversed}>
          <CheckboxField
            id="checkbox-mixed-disabled-1"
            checkedStatus="mixed"
            disabled
            labelText="Label"
            reversed={isReversed}
          />
          <CheckboxField
            id="checkbox-mixed-disabled-2"
            checkedStatus="mixed"
            disabled
            labelText="Label"
            reversed={isReversed}
          />
        </CheckboxGroup>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Bottom Margin">
        <div>
          <CheckboxGroup labelText="Checkbox Group Label" reversed={isReversed}>
            <CheckboxField
              id="checkbox-no-mb-1"
              checkedStatus="on"
              labelText="Label"
              reversed={isReversed}
            />
            <CheckboxField
              id="checkbox-no-mb-2"
              checkedStatus="on"
              labelText="Label"
              reversed={isReversed}
            />
          </CheckboxGroup>
          <Label
            id="test_label"
            htmlFor="test_label"
            automationId="test_label"
            labelText="Next line"
            labelType="checkbox"
            reversed={isReversed}
          />
        </div>
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}

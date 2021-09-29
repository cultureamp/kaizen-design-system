import { CheckboxGroup, CheckboxField, Label } from "@kaizen/draft-form"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

interface RenderProps {
  checkedStatus: string
  onCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

interface Props {
  render: (props: RenderProps) => JSX.Element
}

class CheckboxGroupExample extends React.Component<Props> {
  public state = {
    checkedStatus: "mixed",
  }
  constructor(props: Props) {
    super(props)

    this.onCheckHandler = this.onCheckHandler.bind(this)
  }

  public onCheckHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      checkedStatus: this.state.checkedStatus === "on" ? "off" : "on",
    })
  }

  public render() {
    const { render } = this.props
    return (
      <div>
        {render({
          checkedStatus: this.state.checkedStatus,
          onCheckHandler: this.onCheckHandler,
        })}
      </div>
    )
  }
}

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Checkbox Group`,
  component: CheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: 'import { CheckboxGroup } from "@kaizen/draft-form";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14533%3A69854"
    ),
  },
  decorators: [withDesign],
}

export const InteractiveKaizenSiteDemo = () => (
  <div>
    <CheckboxGroup labelText="Checkbox Group Label">
      <CheckboxGroupExample
        render={({ checkedStatus, onCheckHandler }) => (
          <CheckboxField
            onCheck={onCheckHandler}
            id="checkbox-1"
            checkedStatus={checkedStatus as any}
            labelText={
              <div>
                This is a label with a{" "}
                <a href="http://google.com" target="_blank">
                  link
                </a>
              </div>
            }
          />
        )}
      />
      <CheckboxGroupExample
        render={({ checkedStatus, onCheckHandler }) => (
          <CheckboxField
            onCheck={onCheckHandler}
            id="checkbox-2"
            checkedStatus={checkedStatus as any}
            labelText={
              <div>
                This is a label with a{" "}
                <a href="http://google.com" target="_blank">
                  link
                </a>
              </div>
            }
          />
        )}
      />
      <CheckboxGroupExample
        render={({ checkedStatus, onCheckHandler }) => (
          <CheckboxField
            onCheck={onCheckHandler}
            id="checkbox-3"
            checkedStatus={checkedStatus as any}
            labelText={
              <div>
                This is a label with a{" "}
                <a href="http://google.com" target="_blank">
                  link
                </a>
              </div>
            }
          />
        )}
      />
    </CheckboxGroup>
  </div>
)

InteractiveKaizenSiteDemo.storyName = "Interactive (Kaizen Site Demo)"

export const WithDisabledCheckboxes = () => (
  <div>
    <CheckboxGroup labelText="Checkbox Group Label">
      <CheckboxField
        id="checkbox-1"
        checkedStatus="off"
        disabled={true}
        labelText="Label"
      />
      <CheckboxField
        id="checkbox-2"
        checkedStatus="on"
        disabled={false}
        labelText="Label"
      />
      <CheckboxField
        id="checkbox-3"
        checkedStatus="on"
        disabled={true}
        labelText="Label"
      />
    </CheckboxGroup>
  </div>
)

WithDisabledCheckboxes.storyName = "with disabled checkboxes"

export const Rtl = () => (
  <div dir="rtl">
    <CheckboxGroup labelText="Checkbox Group Label">
      <CheckboxField
        id="checkbox-1"
        checkedStatus="off"
        disabled={true}
        labelText="Label"
      />
      <CheckboxField
        id="checkbox-2"
        checkedStatus="on"
        disabled={false}
        labelText="Label"
      />
      <CheckboxField
        id="checkbox-3"
        checkedStatus="on"
        disabled={true}
        labelText="Label"
      />
    </CheckboxGroup>
  </div>
)

Rtl.storyName = "RTL"

export const WithLinks = () => (
  <div>
    <CheckboxGroup labelText="Checkbox Group Label">
      <CheckboxField
        id="checkbox-1"
        checkedStatus="off"
        disabled={false}
        labelText={
          <div>
            <a href="http://google.com" target="_blank">
              Option 1
            </a>
          </div>
        }
      />
      <CheckboxField
        id="checkbox-2"
        checkedStatus="off"
        disabled={false}
        labelText={
          <div>
            <a href="http://google.com" target="_blank">
              Option 2
            </a>
          </div>
        }
      />
      <CheckboxField
        id="checkbox-3"
        checkedStatus="off"
        disabled={false}
        labelText={
          <div>
            <a href="http://google.com" target="_blank">
              Option 3
            </a>
          </div>
        }
      />
    </CheckboxGroup>
  </div>
)

WithLinks.storyName = "with links"

export const WithBottomMargin = () => (
  <div>
    <CheckboxGroup labelText="Checkbox Group Label">
      <CheckboxField
        id="checkbox-1"
        checkedStatus="on"
        disabled={false}
        labelText="Label"
      />
      <CheckboxField
        id="checkbox-2"
        checkedStatus="on"
        disabled={false}
        labelText="Label"
      />
      <CheckboxField
        id="checkbox-3"
        checkedStatus="on"
        disabled={false}
        labelText="Label"
      />
    </CheckboxGroup>
    <Label
      id="test_label"
      htmlFor="test_label"
      automationId="test_label"
      labelText="Next line"
      labelType="checkbox"
    />
  </div>
)

WithBottomMargin.storyName = "with bottom margin"

export const WithoutBottomMargin = () => (
  <div>
    <CheckboxGroup noBottomMargin labelText="Checkbox Group Label">
      <CheckboxField
        id="checkbox-1"
        checkedStatus="on"
        disabled={false}
        labelText="Label"
      />
      <CheckboxField
        id="checkbox-2"
        checkedStatus="on"
        disabled={false}
        labelText="Label"
      />
      <CheckboxField
        id="checkbox-3"
        checkedStatus="on"
        disabled={false}
        labelText="Label"
      />
    </CheckboxGroup>
    <Label
      id="test_label"
      htmlFor="test_label"
      automationId="test_label"
      labelText="Next line"
      labelType="checkbox"
    />
  </div>
)

WithoutBottomMargin.storyName = "without bottom margin"

export const NestedCheckboxGroup = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<number[]>([])

  const onCheckHandler = (state: string, value: number) => {
    if (state === "off") {
      setSelectedOptions(prev => [...prev, value])
    } else {
      setSelectedOptions(selectedOptions.filter(val => val !== value))
    }
  }

  const checkAllCheckboxOnCheckHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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
          onCheck={e => onCheckHandler(e.currentTarget.value, 1)}
        />
        <CheckboxField
          id="checkbox-2"
          checkedStatus={selectedOptions.includes(2) ? "on" : "off"}
          labelText="Label"
          onCheck={e => onCheckHandler(e.currentTarget.value, 2)}
        />
        <CheckboxField
          id="checkbox-3"
          checkedStatus={selectedOptions.includes(3) ? "on" : "off"}
          labelText="Label"
          onCheck={e => onCheckHandler(e.currentTarget.value, 3)}
        />
      </CheckboxGroup>
    </div>
  )
}

NestedCheckboxGroup.storyName = "Nested Checkbox Group"

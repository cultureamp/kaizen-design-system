import { CheckboxGroup, CheckboxField, Label } from "@kaizen/draft-form"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

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
  title: "CheckboxGroup (React)",
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

import {
  CheckboxField,
  CheckboxGroup,
} from "@kaizen/component-library/draft"
import { Label } from "@kaizen/component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"
const styles = require("./CheckboxGroup.stories.scss")

type RenderProps = {
  checkedStatus: string
  onCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

type Props = {
  render: (props: RenderProps) => JSX.Element
}

export default class CheckboxGroupExample extends React.Component<Props> {
  state = {
    checkedStatus: "mixed",
  }
  constructor(props: Props) {
    super(props)

    this.onCheckHandler = this.onCheckHandler.bind(this)
  }

  onCheckHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      checkedStatus: this.state.checkedStatus === "on" ? "off" : "on",
    })
  }

  render() {
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
storiesOf("CheckboxGroup", module)
  .add("Interactive", () => (
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
  ))
  .add("with disabled checkboxes", () => (
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
  ))
  .add("RTL", () => (
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
  ))
  .add("with links", () => (
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
  ))
  .add("with bottom margin", () => (
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
  ))
  .add("without bottom margin", () => (
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
  ))

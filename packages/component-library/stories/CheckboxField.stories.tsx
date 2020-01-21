import { loadElmStories } from "@cultureamp/elm-storybook"
import { CheckboxField } from "@kaizen/component-library/draft"
import { boolean, radios, text, withKnobs } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"
import * as React from "react"

type RenderProps = {
  checkedStatus: string
  onCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

type Props = {
  render: (props: RenderProps) => JSX.Element
}

class CheckboxFieldExample extends React.Component<Props> {
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
      <div
        style={{
          paddingTop: 24,
        }}
      >
        {render({
          checkedStatus: this.state.checkedStatus,
          onCheckHandler: this.onCheckHandler,
        })}
      </div>
    )
  }
}

storiesOf("CheckboxField (React)", module)
  .addDecorator(withKnobs)
  .add("with Knobs", () => {
    // TODO: missing knobs: onCheck

    return (
      <CheckboxField
        id={text("id (optional)", "checkbox-1")}
        automationId={text("automationId (optional)", "checkbox-1")}
        name={text("name (optional)", "checkbox-name")}
        labelText={text("labelText", "Label")}
        checkedStatus={radios(
          "checkedStatus (optional)",
          // @ts-ignore
          ["on", "off", "mixed"],
          "off"
        )}
        disabled={boolean("disabled (optional)", false)}
        noBottomMargin={boolean("noBottomMargin (optional)", false)}
      />
    )
  })
  .add("Interactive (Kaizen Site Demo)", () => (
    <CheckboxFieldExample
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
  ))

  .add("On", () => (
    <CheckboxField
      id="checkbox-2"
      checkedStatus="on"
      disabled={false}
      labelText="Label"
    />
  ))
  .add("Mixed", () => (
    <CheckboxField
      id="checkbox-3"
      checkedStatus="mixed"
      disabled={false}
      labelText="Label"
    />
  ))
  .add("Off", () => (
    <CheckboxField
      id="checkbox-4"
      checkedStatus="off"
      disabled={false}
      labelText="Label"
    />
  ))
  .add("Disabled + on", () => (
    <CheckboxField
      id="checkbox-5"
      checkedStatus="on"
      disabled={true}
      labelText="Label"
    />
  ))
  .add("Disabled + mixed", () => (
    <CheckboxField
      id="checkbox-6"
      checkedStatus="mixed"
      disabled={true}
      labelText="Label"
    />
  ))
  .add("Disabled + off", () => (
    <CheckboxField
      id="checkbox-7"
      checkedStatus="off"
      disabled={true}
      labelText="Label"
    />
  ))
  .add("with bottom margin", () => (
    <div>
      <CheckboxField
        id="checkbox-1"
        checkedStatus="off"
        disabled={false}
        labelText="Label"
      />
      <CheckboxField
        id="checkbox-2"
        checkedStatus="off"
        disabled={false}
        labelText="Label"
      />
    </div>
  ))
  .add("without bottom margin", () => (
    <div>
      <CheckboxField
        noBottomMargin
        id="checkbox-1"
        checkedStatus="off"
        disabled={false}
        labelText="Label"
      />
      <CheckboxField
        noBottomMargin
        id="checkbox-2"
        checkedStatus="off"
        disabled={false}
        labelText="Label"
      />
    </div>
  ))

loadElmStories(
  "CheckboxField (Elm)",
  module,
  require("./CheckboxField.stories.elm"),
  [
    "On",
    "Mixed",
    "Off",
    "Disabled + on",
    "Disabled + mixed",
    "Disabled + off",
    "with bottom margin",
    "without bottom margin",
  ]
)

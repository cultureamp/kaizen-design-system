import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import React, { useState } from "react"
import { CheckboxGroup } from "@kaizen/draft-checkbox-group"
import { CheckboxField, Label } from "@kaizen/draft-form"
import { Button } from "@kaizen/draft-button"
import { FilterDrawer } from "@kaizen/draft-filter-drawer"

const StoryWrapper = ({ children }) => (
  <div
    style={{ display: "flex", justifyContent: "flex-start", margin: "1rem" }}
  >
    {children}
  </div>
)

export default {
  title: "FilterDrawer (React)",
}

interface RenderProps {
  checkedStatus: string
  onCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

interface Props {
  render: (props: RenderProps) => JSX.Element
}
class CheckboxGroupExample extends React.Component<Props> {
  public state = {
    checkedStatus: "off",
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

export const DefaultStory = () => (
  <StoryWrapper>
    <DemoFilterDrawer />
  </StoryWrapper>
)

const DemoFilterDrawer = () => {
  const [furryCheckboxState, setFurryState] = useState("off")
  const [aquaticCheckboxState, setAquaticState] = useState("off")
  const [venomousCheckboxState, setVenomousState] = useState("off")
  const [isDropdownVisible, setIsDropdownVisible] = useState(true)

  const checkedTraits: string[] = (furryState === "on" ? ["Furry"] : [])
    .concat(aquaticState === "on" ? ["Aquatic"] : [])
    .concat(venomousState === "on" ? ["Venomous"] : [])

  // TODO: move inside component
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  // TODO: move inside component
  const hideDropdown = () => {
    setIsDropdownVisible(false)
  }

  return (
    <FilterDrawer
      labelText="Filter"
      metadata={checkedTraits}
      isDropdownVisible={isDropdownVisible}
      toggleDropdown={toggleDropdown}
      hideDropdown={hideDropdown}
    >
      <>
        <CheckboxGroup labelText="Traits">
          <CheckboxField
            onCheck={() => {
              setFurryCheckboxState(furryCheckboxState === "on" ? "off" : "on")
            }}
            id="checkbox-1"
            checkedStatus={furryCheckboxState as any}
            labelText="Furry"
          />
          <CheckboxField
            onCheck={() => {
              setAquaticCheckboxState(
                aquaticCheckboxState === "on" ? "off" : "on"
              )
            }}
            id="checkbox-2"
            checkedStatus={aquaticCheckboxState as any}
            labelText="Aquatic"
          />
          <CheckboxField
            onCheck={() => {
              setVenomousCheckboxState(
                venomousCheckboxState === "on" ? "off" : "on"
              )
            }}
            id="checkbox-3"
            checkedStatus={venomousCheckboxState as any}
            labelText="Venomous"
          />
        </CheckboxGroup>
        <Button
          primary={true}
          label="Apply"
          onClick={() => {
            toggleDropdown()
          }}
        />
      </>
    </FilterDrawer>
  )
}

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

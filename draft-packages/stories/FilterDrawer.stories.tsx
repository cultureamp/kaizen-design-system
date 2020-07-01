import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import React, { useState } from "react"
import { CheckboxGroup } from "@kaizen/draft-checkbox-group"
import { CheckboxField, Label } from "@kaizen/draft-form"
import { Button } from "@kaizen/draft-button"
import { FilterDrawer } from "@kaizen/draft-filter-drawer"
const styles = require("./FilterDrawer.stories.scss")
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

type CheckboxState = "on" | "off"

type AppliedFiltersState = {
  furry: CheckboxState
  aquatic: CheckboxState
  venomous: CheckboxState
}

const DemoFilterDrawer = () => {
  const [furryCheckboxState, setFurryCheckboxState] = useState<CheckboxState>(
    "off"
  )
  const [aquaticCheckboxState, setAquaticCheckboxState] = useState<
    CheckboxState
  >("off")
  const [venomousCheckboxState, setVenomousCheckboxState] = useState<
    CheckboxState
  >("off")
  const [isDropdownVisible, setIsDropdownVisible] = useState(true)

  const [appliedFilters, setAppliedFilters] = useState<AppliedFiltersState>({
    furry: "off",
    aquatic: "off",
    venomous: "off",
  })

  const checkedTraits: string[] = (appliedFilters.furry === "on"
    ? ["Furry"]
    : []
  )
    .concat(appliedFilters.aquatic === "on" ? ["Aquatic"] : [])
    .concat(appliedFilters.venomous === "on" ? ["Venomous"] : [])

  // TODO: move inside component
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  // TODO: move inside component
  const hideDropdown = () => {
    setIsDropdownVisible(false)
  }

  const applyChanges = () => {
    setAppliedFilters({
      furry: furryCheckboxState,
      aquatic: aquaticCheckboxState,
      venomous: venomousCheckboxState,
    })
  }

  const clearChanges = () => {
    setFurryCheckboxState(appliedFilters.furry)
    setAquaticCheckboxState(appliedFilters.aquatic)
    setVenomousCheckboxState(appliedFilters.venomous)
  }

  const getNumFiltersEnabled = () =>
    [
      appliedFilters.furry,
      appliedFilters.aquatic,
      appliedFilters.venomous,
    ].filter(status => status == "on").length

  const applyButtonEnabled = () => {
    getNumFiltersEnabled
  }

  const haveFiltersNotChanged = () =>
    appliedFilters.furry == furryCheckboxState &&
    appliedFilters.aquatic == aquaticCheckboxState &&
    appliedFilters.venomous == venomousCheckboxState

  return (
    <FilterDrawer
      labelText="Filter"
      metadata={checkedTraits}
      isDropdownVisible={isDropdownVisible}
      toggleDropdown={toggleDropdown}
      hideDropdown={hideDropdown}
      numFiltersEnabled={getNumFiltersEnabled()}
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
        <div className={styles.buttons}>
          <Button
            secondary={true}
            label="Cancel"
            onClick={() => {
              clearChanges()
              toggleDropdown()
            }}
          />
          <Button
            primary={true}
            label="Apply"
            disabled={haveFiltersNotChanged()}
            onClick={() => {
              applyChanges()
              toggleDropdown()
            }}
          />
        </div>
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

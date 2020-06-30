import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import { CheckboxGroup } from "@kaizen/draft-checkbox-group"
import { CheckboxField, Label } from "@kaizen/draft-form"
import { FilterDrawer } from "@kaizen/draft-filter-drawer"

const StoryWrapper = ({ children }) => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
    {children}
  </div>
)

export default {
  title: "FilterDrawer (React)",
}
const DemoFilters = () => (
  <CheckboxGroup labelText="Traits">
    <CheckboxGroupExample
      render={({ checkedStatus, onCheckHandler }) => (
        <CheckboxField
          onCheck={onCheckHandler}
          id="checkbox-1"
          checkedStatus={checkedStatus as any}
          labelText="Furry"
        />
      )}
    />
    <CheckboxGroupExample
      render={({ checkedStatus, onCheckHandler }) => (
        <CheckboxField
          onCheck={onCheckHandler}
          id="checkbox-2"
          checkedStatus={checkedStatus as any}
          labelText="Aquatic"
        />
      )}
    />
    <CheckboxGroupExample
      render={({ checkedStatus, onCheckHandler }) => (
        <CheckboxField
          onCheck={onCheckHandler}
          id="checkbox-3"
          checkedStatus={checkedStatus as any}
          labelText="Venomous"
        />
      )}
    />
  </CheckboxGroup>
)

interface RenderProps {
  checkedStatus: string
  onCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => any
}

interface Props {
  render: (props: RenderProps) => JSX.Element
}
class CheckboxGroupExample extends React.Component<Props> {
  public state = {
    checkedStatus: "on",
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
    <FilterDrawer labelText="Filter">
      <DemoFilters />
    </FilterDrawer>
  </StoryWrapper>
)

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

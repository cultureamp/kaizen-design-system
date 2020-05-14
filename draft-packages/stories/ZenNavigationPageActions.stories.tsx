import { Button, Dropdown } from "@kaizen/component-library"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import { ZenNavigationPageActions } from "../zen-navigation-page-actions"

const Container = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      height: "84px",
      background: colorTokens.kz.color.wisteria[700],
      display: "flex",
    }}
  >
    {children}
  </div>
)

export default {
  title: "ZenNavigationPageActions (React)",
}

export const DefaultKaizenSiteDemo = () => (
  <Container>
    <ZenNavigationPageActions
      dropdown={<Dropdown reversedColor />}
      actionButtons={[
        <Button label="Action 1" secondary reversed />,
        <Button label="Action 2" secondary reversed />,
        <Button label="Action 3" secondary reversed />,
      ]}
    ></ZenNavigationPageActions>
  </Container>
)

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

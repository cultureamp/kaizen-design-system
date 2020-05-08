import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"
import { ZenNavigationTabs } from "../zen-navigation-tabs"

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
  title: "ZenNavigationTabs (React)",
}

// <Link  />,
export const DefaultKaizenSiteDemo = () => (
  <>
    <Container>
      <ZenNavigationTabs.Container>
        <ZenNavigationTabs.Link text="Insight" href="#" />
        <ZenNavigationTabs.Link text="Participation" href="#" active />
        <ZenNavigationTabs.Link text="Questions" href="#" />
        <ZenNavigationTabs.Link text="Heatmap" href="#" />
        <ZenNavigationTabs.Link text="Comments" href="#" />
      </ZenNavigationTabs.Container>
    </Container>
    {/* <p>
      Note that this component does not set a background color – that is being
      set by the container here.
    </p> */}
  </>
)

DefaultKaizenSiteDemo.story = {
  name: "Default (Kaizen Site Demo)",
}

export const Title = () => (
  <Container>
    <ZenNavigationTabs>"test"</ZenNavigationTabs>
  </Container>
)

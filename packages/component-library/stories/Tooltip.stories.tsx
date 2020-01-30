import { loadElmStories } from "@cultureamp/elm-storybook"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import { Tag } from "@kaizen/component-library/draft"
import { Tooltip } from "@kaizen/component-library/draft"

storiesOf("Tooltip (React)", module)
  .add("Default - Below (Kaizen Site Demo)", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Tooltip position="below" text="This is below the tooltip">
        <Tag>Below</Tag>
      </Tooltip>
    </div>
  ))
  .add("Default - Above", () => (
    <div
      style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
    >
      <div style={{ display: "inline-block", position: "relative" }}>
        <Tooltip position="above" text="This is above the tooltip">
          <Tag>Above</Tag>
        </Tooltip>
      </div>
    </div>
  ))

loadElmStories("Tooltip (Elm)", module, require("./TooltipStories.elm"), [
  "Default - Below",
  "Default - Above",
])

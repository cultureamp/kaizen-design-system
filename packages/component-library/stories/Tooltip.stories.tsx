import { loadElmStories } from "@cultureamp/elm-storybook"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import { Tag } from "@cultureamp/kaizen-component-library/draft"
import { Tooltip } from "@cultureamp/kaizen-component-library/draft"

storiesOf("Tooltip", module)
  .add("Default - Below", () => (
    <div>
      <Tooltip position="below" text="This is a position below tooltip">
        <div>
          <Tag>Below</Tag>
        </div>
      </Tooltip>
    </div>
  ))
  .add("Default - Above", () => (
    <div style={{ marginTop: "100px", position: "relative" }}>
      <Tooltip position="above" text="This is a position above tooltip">
        <div>
          <Tag>Above</Tag>
        </div>
      </Tooltip>
    </div>
  ))

loadElmStories("Tooltip (Elm)", module, require("./TooltipStories.elm"), [
  "Default - Below",
  "Default - Above",
])

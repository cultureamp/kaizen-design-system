import * as React from "react"
// @ts-ignore
import { Well } from "@kaizen/components"
export const TestWellComponent = (): JSX.Element => (
  <div>
    <Well variant="default">Test 1 should have color gray</Well>
    <Well>Test 2 should have color gray</Well>
    <Well variant="informative">Test 3 should have color blue</Well>
    <Well id="test-id" variant="informative">
      Test 4 should have color blue and an id prop
    </Well>
    <Well color="blue">Test 5 should have only one color attribute</Well>
  </div>
)

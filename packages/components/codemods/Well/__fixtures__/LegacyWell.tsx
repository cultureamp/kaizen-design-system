import * as React from "react"
// @ts-ignore
import { Well } from "@kaizen/draft-well"
export const TestWellComponentUnhappy = (): JSX.Element => (
  <div>
    <Well variant="default">Test 1 should have default variant</Well>
    <Well>Test 2 should have no change</Well>
    <Well>Test 3 should have informative variant</Well>
    <Well id="test-id" variant="informative">
      Test 3 should have informative variant and an id prop
    </Well>
  </div>
)

import * as React from "react"
// @ts-ignore
import { Well } from "@kaizen/components"
/* eslint-disable react/jsx-curly-brace-presence */
export const TestWellComponent = (): JSX.Element => {
  const informativeVar = "informative"
  return (
    <>
      <Well variant="default">Test 1 should have color gray</Well>
      <Well>Test 2 should have color gray</Well>
      <Well variant="informative">Test 3 should have color blue</Well>
      <Well id="test-id" variant="informative">
        Test 4 should have color blue and an id prop
      </Well>
      <Well variant={"informative"}>
        Test 5 unnecessary braces should match and have color blue
      </Well>
      <Well variant={informativeVar}>
        Test 6 use of variable in variant should be unchanged as we cannot
        safely determine the value
      </Well>
      <Well color="blue">Test 7 should have only one color attribute</Well>
    </>
  )
}
/* eslint-enable react/jsx-curly-brace-presence */

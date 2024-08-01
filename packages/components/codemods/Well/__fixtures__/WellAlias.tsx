import * as React from "react"
// @ts-ignore
import { Well as KaizenWell } from "@kaizen/components"
/* eslint-disable react/jsx-curly-brace-presence */
export const TestWellComponent = (): JSX.Element => {
  const informativeVar = "informative"
  return (
    <>
      <KaizenWell variant="default">Test 1 should have color gray</KaizenWell>
      <KaizenWell>Test 2 should have color gray</KaizenWell>
      <KaizenWell variant="informative">
        Test 3 should have color blue
      </KaizenWell>
      <KaizenWell id="test-id" variant="informative">
        Test 4 should have color blue and an id prop
      </KaizenWell>
      <KaizenWell variant={"informative"}>
        Test 5 unnecessary braces should match and have color blue
      </KaizenWell>
      <KaizenWell variant={informativeVar}>
        Test 6 use of variable in variant should be unchanged as we cannot
        safely determine the value
      </KaizenWell>
      <KaizenWell color="blue">
        Test 7 should have only one color attribute
      </KaizenWell>
    </>
  )
}
/* eslint-enable react/jsx-curly-brace-presence */

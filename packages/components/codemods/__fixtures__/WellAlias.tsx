import * as React from "react"
// @ts-ignore
import { Well as KaizenWell } from "@kaizen/components/v3"
export const TestWellComponent = (): JSX.Element => (
  <div>
    <KaizenWell variant="default">Test 1 should have color gray</KaizenWell>
    <KaizenWell>Test 2 should have color gray</KaizenWell>
    <KaizenWell variant="informative">Test 3 should have color blue</KaizenWell>
    <KaizenWell id="test-id" variant="informative">
      Test 4 should have color blue and an id prop
    </KaizenWell>
    <KaizenWell color="blue">
      Test 5 should have only one color attribute
    </KaizenWell>
  </div>
)

import React from "react"
import { Button } from "../../../../packages/components/"

export const MarginExample = (): JSX.Element => (
  <div className="flex">
    <div className="mr-12">
      <Button label="Button 1" />
    </div>
    <Button label="Button 2" />
  </div>
)

MarginExample.displayName = "MarginExample"

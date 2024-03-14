import React, { useEffect } from "react"
import { Preview } from "@storybook/react"
import { KaizenProvider } from "~components/KaizenProvider"

export const decorators = [
  (Story): JSX.Element => (
    <KaizenProvider>
      <Story />
    </KaizenProvider>
  ),
  (Story, context): JSX.Element => {
    useEffect(() => {
      const dir =
        context.parameters.textDirection ?? context.globals.textDirection
      if (document.body.getAttribute("dir") !== dir)
        document.body.setAttribute("dir", dir)
    }, [context])

    return <Story />
  },
] satisfies Preview["decorators"]

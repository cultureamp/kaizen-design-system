import React, { useEffect } from "react"
import { Preview } from "@storybook/react"
import isChromatic from "chromatic"
import { KaizenProvider } from "~components/KaizenProvider"

const IS_CHROMATIC = isChromatic()

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
  (Story, context) =>
    (context.args.isReversed || context.args.reversed) && !IS_CHROMATIC ? (
      <div className="bg-purple-700 p-16 m-[-1rem]">
        <Story />
      </div>
    ) : (
      <Story />
    ),
] satisfies Preview["decorators"]

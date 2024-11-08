import React, { useEffect } from "react"
import { decorators as bgDecorators } from "@storybook/addon-backgrounds/preview"
import { Decorator, Preview } from "@storybook/react"
import isChromatic from "chromatic"
import { KaizenProvider } from "~components/KaizenProvider"
import { I18nProvider } from "~components/__react-aria-components__"
import { ReversedColors } from "~components/__utilities__/v3"

const [, withBackground] = bgDecorators
const IS_CHROMATIC = isChromatic()

const i18nDecorator: Decorator = (Story, context) => {
  const dir = context.parameters.textDirection ?? context.globals.textDirection

  useEffect(() => {
    if (document.body.getAttribute("dir") !== dir)
      document.body.setAttribute("dir", dir)
  }, [dir])

  return (
    <I18nProvider locale={dir === "rtl" ? "ar" : "en"}>
      <Story />
    </I18nProvider>
  )
}

const KaizenProviderDecorator: Decorator = Story => (
  <KaizenProvider>
    <Story />
  </KaizenProvider>
)

export const decorators: Preview["decorators"] = [
  i18nDecorator,
  KaizenProviderDecorator,
  (Story, context) =>
    (context.args.isReversed || context.args.reversed) && !IS_CHROMATIC ? (
      <div className="p-16 m-[-1rem]">
        <Story />
      </div>
    ) : (
      <Story />
    ),
  // reverseColor parameter wraps story in ReversedColors context and sets default background to Purple 700
  // @ts-ignore
  (Story, context) => {
    if (
      // set in top toolbar
      !context.globals.backgrounds &&
      // set on story
      !context.moduleExport?.parameters?.backgrounds
    ) {
      context.parameters.backgrounds.default = context.parameters.reverseColors
        ? "Purple 700"
        : "White"
    }

    return withBackground(
      () =>
        context.parameters.reverseColors ? (
          <ReversedColors>
            <Story />
          </ReversedColors>
        ) : (
          <Story />
        ),
      context
    )
  },
]

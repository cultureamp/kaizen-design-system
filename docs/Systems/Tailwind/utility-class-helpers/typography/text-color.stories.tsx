import React from "react"
import { StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { flattenEntries } from "../../helpers/flattenEntries"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "kz-text-"
const classEntries = flattenEntries(prefix, kaizenTailwindTheme.colors || {})

export default {
  title: "Systems/Tailwind/Utility Class References/Typography/Text Color",
  parameters: {
    a11y: { disable: true },
    chromatic: { disable: false },
    docsLayout: "fullPage",
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
}

export const TextColor: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
  <UtilityClassTemplate
    compiledCssPropertyName="color"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div className="kz-flex kz-items-center kz-h-100">
        <p
          className={classnames(
            "kz-font-family-paragraph kz-p-8 kz-rounded kz-font-weight-display kz-text-heading-3 kz-m-0 kz-mr-16",
            utilityClass
          )}
        >
          Light bg
        </p>
        <p
          className={classnames(
            "kz-font-family-paragraph kz-p-8 kz-bg-[black] kz-rounded kz-font-weight-display kz-text-heading-3 kz-m-0",
            utilityClass
          )}
        >
          Dark bg
        </p>
      </div>
    )}
    isReversed={isReversed}
  />
)

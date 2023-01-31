/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../../storybook/constants"

export default {
  title: `${CATEGORIES.tailwind}/Classname References`,
  parameters: {
    docs: {
      description: {
        component:
          "Require @kaizen/tailwind and add it into your tailwind config",
      },
    },
  },
  decorators: [withDesign],
}

export const TailwindPseudoStates: Story = () => (
  <div className="p-12">
    <h1 className="flex flex-col items-center font-family-heading text-heading-1 font-weight-heading text-purple-700">
      Tailwind Pseudo states
    </h1>
    <div className="flex">
      <div className="inline-flex flex-col">
        <h2 className="font-family-heading-2 font-weight-heading-2 mb-12 text-heading-2 text-purple-800">
          Hover
        </h2>
        <button className=" rounded border-width-default rounded-default border-none bg-purple-600 p-12 font-family-paragraph text-paragraph font-weight-paragraph-bold text-white  hover:bg-purple-800">
          Learn more
        </button>
      </div>
      <div className="ml-12 inline-flex flex-col">
        <h2 className="font-family-heading-2 font-weight-heading-2 mb-12 text-heading-2 text-purple-800">
          Focus
        </h2>
        <button className="rounded rounded-default border-none bg-purple-600 p-12 font-family-paragraph text-paragraph font-weight-paragraph-bold text-white focus:bg-purple-800 focus:ring-2 focus:ring-offset-1">
          Learn more
        </button>
      </div>
    </div>
  </div>
)

TailwindPseudoStates.storyName = "Pseudo selectors"

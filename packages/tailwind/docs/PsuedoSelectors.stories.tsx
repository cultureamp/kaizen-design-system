/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import classnames from "classnames"
import { withDesign } from "storybook-addon-designs"
import { Card } from "@kaizen/draft-card"
import { figmaEmbed } from "../../../storybook/helpers"
import styles from "./styles.module.scss"

export default {
  title: "Tailwind",
  parameters: {
    docs: {
      description: {
        component:
          'Add `presets: [require("@kaizen/design-tokens").TailwindPreset]` into your tailwind config',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14473%3A63845"
    ),
  },
  decorators: [withDesign],
}

export const TailwindPsuedoStates = () => (
  <div className="p-12">
    <h1 className="flex flex-col items-center text-heading-1 font-weight-heading font-family-heading text-purple-700">
      Tailwind Psuedo states
    </h1>
    <div className="flex">
      <div className="inline-flex flex-col">
        <h2 className="text-heading-2 font-family-heading-2 font-weight-heading-2 text-purple-800 mb-12">
          Hover
        </h2>
        <button className=" rounded-default border-none p-12 bg-purple-600 text-white font-family-paragraph font-weight-paragraph-bold text-paragraph rounded border-width-default  hover:bg-purple-800">
          Hover me
        </button>
      </div>
      <div className="inline-flex flex-col ml-12">
        <h2 className="text-heading-2 font-family-heading-2 font-weight-heading-2 text-purple-800 mb-12">
          Focus
        </h2>
        <button
          className={classnames(
            "focus:ring-default-width ring-default-color ring-offset-default-width focus:outline-none",
            "rounded-default border-none border-width-default",
            " p-12 bg-purple-600 text-white font-family-paragraph font-weight-paragraph-bold text-paragraph "
          )}
        >
          Focus me
        </button>
      </div>
    </div>
  </div>
)

TailwindPsuedoStates.storyName = "Tailwind psuedo selectors"

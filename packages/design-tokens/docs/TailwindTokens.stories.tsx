/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { withDesign } from "storybook-addon-designs"
import { Card } from "@kaizen/draft-card"
import { figmaEmbed } from "../../../storybook/helpers"

export default {
  title: "Design Tokens/Tailwind",
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

export const DefaultKaizenSiteDemo = (args): any => (
  <div className="bg-purple-800 p-sm">
    <h1 className="flex flex-col items-center text-size-heading-1 font-weight-heading font-family-heading text-white ">
      {args.title}
    </h1>
    <Card classNameOverride="bg-blue-100 mb-sm p-sm" tag="div">
      <h2 className="text-size-heading-2 font-family-heading font-weight-heading text-purple-800 mb-sm">
        This is a card heading
      </h2>
      <p className="font-family-paragraph font-weight-paragraph text-purple-800 bg-blue-100">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        ad. Adipisci voluptates consectetur dignissimos commodi hic ipsa eius
        neque asperiores beatae, magnam harum eos explicabo voluptas architecto!
        Autem, culpa ab?
      </p>
    </Card>
    <Card classNameOverride="bg-blue-100 p-sm" tag="div">
      <h2 className="text-size-heading-2 font-family-heading font-weight-heading text-purple-800 mb-sm">
        This is a card heading
      </h2>
      <p className="font-family-paragraph font-weight-paragraph text-purple-800 bg-blue-100 mb-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        ad. Adipisci voluptates consectetur dignissimos commodi hic ipsa eius
        neque asperiores beatae, magnam harum eos explicabo voluptas architecto!
        Autem, culpa ab?
      </p>
      <button className="p-sm bg-blue-600 text-white font-family-paragraph font-weight-paragraph-bold text-size-paragraph rounded">
        Learn more
      </button>
    </Card>
  </div>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = { title: "Tailwind title example" }

export const TailwindPsuedoStates = (): any => (
  <div className="p-sm">
    <h1 className="flex flex-col items-center text-size-heading-1 font-weight-heading font-family-heading text-white ">
      Tailwind Psuedo states
    </h1>
    <div className="flex">
      <div className="inline-flex flex-col">
        <h2 className="text-size-heading-2 font-family-heading-2 font-weight-heading-2 text-purple-800 mb-sm">
          Hover
        </h2>
        <button className="p-sm bg-purple-600 text-white font-family-paragraph font-weight-paragraph-bold text-size-paragraph rounded border-width-default border-solid border-color-transparent hover:bg-purple-800">
          Learn more
        </button>
      </div>
      <div className="inline-flex flex-col ml-sm">
        <h2 className="text-size-heading-2 font-family-heading-2 font-weight-heading-2 text-purple-800 mb-sm">
          Focus
        </h2>
        <button className="p-sm bg-purple-600 text-white font-family-paragraph font-weight-paragraph-bold text-size-paragraph rounded border-width-default border-solid border-color-transparent focus:ring-2 focus:ring-offset-1 focus:bg-purple-800">
          Learn more
        </button>
      </div>
    </div>
  </div>
)

TailwindPsuedoStates.storyName = "Tailwind psuedo selectors"

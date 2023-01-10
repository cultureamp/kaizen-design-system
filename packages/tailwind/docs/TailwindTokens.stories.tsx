/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Card } from "@kaizen/draft-card"
import { figmaEmbed } from "../../../storybook/helpers"

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

export const DefaultKaizenSiteDemo: Story = args => (
  <div className="bg-purple-800 p-12">
    <h1 className="flex flex-col items-center font-family-heading text-heading-1 font-weight-heading text-white ">
      {args.title}
    </h1>
    <Card classNameOverride="bg-blue-100 mb-12 p-12" tag="div">
      <h2 className="mb-12 font-family-heading text-heading-2 font-weight-heading text-purple-800">
        This is a card heading
      </h2>
      <p className="bg-blue-100 font-family-paragraph font-weight-paragraph text-purple-800">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        ad. Adipisci voluptates consectetur dignissimos commodi hic ipsa eius
        neque asperiores beatae, magnam harum eos explicabo voluptas architecto!
        Autem, culpa ab?
      </p>
    </Card>
    <Card classNameOverride="bg-blue-100 p-12" tag="div">
      <h2 className="mb-12 font-family-heading text-heading-2 font-weight-heading text-purple-800">
        This is a card heading
      </h2>
      <p className="mb-12 bg-blue-100 font-family-paragraph font-weight-paragraph text-purple-800">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        ad. Adipisci voluptates consectetur dignissimos commodi hic ipsa eius
        neque asperiores beatae, magnam harum eos explicabo voluptas architecto!
        Autem, culpa ab?
      </p>
      <button className="rounded rounded-default border-none bg-blue-600 p-12 font-family-paragraph text-paragraph font-weight-paragraph-bold text-white">
        Learn more
      </button>
    </Card>
  </div>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = { title: "Tailwind title example" }

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

TailwindPseudoStates.storyName = "Tailwind pseudo selectors"

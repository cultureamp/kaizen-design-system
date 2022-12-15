/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
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

export const DefaultKaizenSiteDemo = args => (
  <div className="bg-purple-800 p-12">
    <h1 className="flex flex-col items-center text-heading-1 font-weight-heading font-family-heading text-white ">
      {args.title}
    </h1>
    <Card classNameOverride="bg-blue-100 mb-12 p-12" tag="div">
      <h2 className="text-heading-2 font-family-heading font-weight-heading text-purple-800 mb-12">
        This is a card heading
      </h2>
      <p className="font-family-paragraph font-weight-paragraph text-purple-800 bg-blue-100">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        ad. Adipisci voluptates consectetur dignissimos commodi hic ipsa eius
        neque asperiores beatae, magnam harum eos explicabo voluptas architecto!
        Autem, culpa ab?
      </p>
    </Card>
    <Card classNameOverride="bg-blue-100 p-12" tag="div">
      <h2 className="text-heading-2 font-family-heading font-weight-heading text-purple-800 mb-12">
        This is a card heading
      </h2>
      <p className="font-family-paragraph font-weight-paragraph text-purple-800 bg-blue-100 mb-12">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        ad. Adipisci voluptates consectetur dignissimos commodi hic ipsa eius
        neque asperiores beatae, magnam harum eos explicabo voluptas architecto!
        Autem, culpa ab?
      </p>
      <button className="border-none rounded-default p-12 bg-blue-600 text-white font-family-paragraph font-weight-paragraph-bold text-paragraph rounded">
        Learn more
      </button>
    </Card>
  </div>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = { title: "Tailwind title example" }

export const TailwindMediaQueries = () => (
  <div className="p-12">
    <h1 className="flex flex-col items-center text-heading-1 font-weight-heading font-family-heading text-purple-700">
      Tailwind media queries
    </h1>
    <h2 className="text-heading-2 font-weight-heading font-family-heading text-purple-700">
      Min width queries
    </h2>
    <div className="flex md:flex-col">
      <div className="mx-12 bg-orange-400 p-32 inline-flex md:bg-blue-400"></div>
      <p className="font-family-paragraph font-weight-paragraph text-purple-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam
        nostrum accusamus nam ducimus excepturi officiis eos, suscipit
        temporibus fugit officia exercitationem ipsum eveniet, voluptatem dolore
        dolor voluptatum eum. Optio.≈
      </p>
    </div>
    <h2 className="text-heading-2 font-weight-heading font-family-heading text-purple-700">
      Max width queries
    </h2>
    <div className="flex md-max:flex-col ">
      <div className="mx-12 bg-orange-400 p-32 inline-flex md-max:bg-blue-400"></div>
      <p className="font-family-paragraph font-weight-paragraph text-purple-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime numquam
        nostrum accusamus nam ducimus excepturi officiis eos, suscipit
        temporibus fugit officia exercitationem ipsum eveniet, voluptatem dolore
        dolor voluptatum eum. Optio.≈
      </p>
    </div>
  </div>
)

TailwindMediaQueries.storyName = "Tailwind media queries"

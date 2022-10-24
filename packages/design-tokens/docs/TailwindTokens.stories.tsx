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
          'Add `presets: [require("@kaizen/design-tokens/tailwind/")]` into your tailwind config',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14473%3A63845"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemo = args => (
  <div className="bg-purple-800">
    <h1 className="flex flex-col items-center text-heading-1 font-heading text-white bg-red-600 ">
      {args.title}
    </h1>
    <Card classNameOverride="bg-blue-100 my-sm mx-sm p-md " tag="div">
      <p className="text-body font-body text-purple-800 bg-purple-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In itaque
        natus temporibus explicabo laudantium obcaecati, tempore cumque rem
        impedit maxime libero veniam sint at possimus alias totam aliquid quod
        eum!
      </p>
      <p className="text-body font-body text-red-100 border-red-700 border-solid border-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        ad. Adipisci voluptates consectetur dignissimos commodi hic ipsa eius
        neque asperiores beatae, magnam harum eos explicabo voluptas architecto!
        Autem, culpa ab?
      </p>
      <p className="text-body font-body text-red-200">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        ad. Adipisci voluptates consectetur dignissimos commodi hic ipsa eius
        neque asperiores beatae, magnam harum eos explicabo voluptas architecto!
        Autem, culpa ab?
      </p>
      <p className="text-body font-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        ad. Adipisci voluptates consectetur dignissimos commodi hic ipsa eius
        neque asperiores beatae, magnam harum eos explicabo voluptas architecto!
        Autem, culpa ab?
      </p>

      <div className=" py-xl bg-red-100 text-red-700 rounded">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        incidunt eligendi asperiores impedit, ex nesciunt delectus tempora ipsam
        ab mollitia exercitationem vitae similique vero. Ea laborum
        exercitationem cupiditate commodi hic!
      </div>
      <div className=""></div>
    </Card>
  </div>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = { title: "Tailwind title example" }

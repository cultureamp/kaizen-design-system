/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { withDesign } from "storybook-addon-designs"
import { Card } from "@kaizen/draft-card"

import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

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
  // set the popover open state to be true when testing on chromatic
  <div className="bg-purple-800">
    <h1 className="flex flex-col items-center text-heading-1 font-heading text-white">
      {args.title}
    </h1>
    <Card classNameOverride="bg-blue-100 my-sm mx-sm p-md" tag="div">
      <p className="text-body font-body text-purple-800">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In itaque
        natus temporibus explicabo laudantium obcaecati, tempore cumque rem
        impedit maxime libero veniam sint at possimus alias totam aliquid quod
        eum!
      </p>
    </Card>
  </div>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = { title: "Tailwind title example" }

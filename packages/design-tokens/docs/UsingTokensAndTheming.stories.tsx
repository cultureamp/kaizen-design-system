import { Meta, Story } from "@storybook/react"
import React from "react"
/*
  Storybook can import markdown files, but it is likely that other compilers that import design-tokens don't by default,
  so adding a global type definition for MDX files might not be the best idea, and could cause a developer of design-tokens
  to think "oh nice MDX files just work everywhere", when in fact they'll only work in storybook, and **maybe** work elsewhere.
*/
// @ts-expect-error
import docs from "./docs.mdx"

export default {
  title: "Design Tokens/How to use design tokens",
} as Meta

export const Default: Story = () => <></>
Default.parameters = {
  docsOnly: true,
  docs: {
    page: docs,
  },
}

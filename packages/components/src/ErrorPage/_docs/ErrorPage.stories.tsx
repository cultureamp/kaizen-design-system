import { Meta, StoryObj } from "@storybook/react"
import { statusCodes } from "../hooks"
import { ErrorPage } from "../index"

const meta = {
  title: "Layout/ErrorPage",
  component: ErrorPage,
} satisfies Meta<typeof ErrorPage>

export default meta

export const Playground: StoryObj<typeof meta> = {
  args: {
    code: "400",
  },
  argTypes: {
    code: {
      options: [...statusCodes],
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

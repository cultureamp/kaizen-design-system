// import { type Meta, type StoryObj } from "storybook"

import { BrandMomentPositiveOutro } from '../index'

const meta = {
  title: 'Components/Illustrations/Scene',
  component: BrandMomentPositiveOutro,
} satisfies any

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

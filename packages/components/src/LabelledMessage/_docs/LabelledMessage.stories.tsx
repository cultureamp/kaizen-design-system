// import { type Meta, type StoryObj } from "storybook"
import { LabelledMessage } from '../LabelledMessage'

const meta = {
  title: 'Components/Form primitives/LabelledMessage',
  component: LabelledMessage,
  args: {
    label: 'Label',
    message: 'Custom message here',
  },
} satisfies any

export default meta

export const Playground: any = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

// import { type Meta, type StoryObj } from "storybook"
import { statusCodes } from '../hooks'
import { ErrorPage } from '../index'

const meta = {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
} satisfies any

export default meta

export const Playground: any = {
  args: {
    code: '400',
  },
  argTypes: {
    code: {
      options: [...statusCodes],
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

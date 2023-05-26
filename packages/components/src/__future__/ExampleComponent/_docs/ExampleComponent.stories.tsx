import { Meta, StoryObj } from "@storybook/react"
import { ExampleComponent } from ".."

export default {
  tags: ["autodocs"],
  title: "Deprecated/ExampleComponent",
  component: ExampleComponent,
  parameters: {
    docs: {
      description: {
        component: 'import { ExampleComponent} from "@kaizen/components"',
      },
    },
  },
} satisfies Meta<typeof ExampleComponent>

export const Playground: StoryObj = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

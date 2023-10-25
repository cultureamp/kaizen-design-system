import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Content } from "~components/Content"
import { Text } from "~components/Text"
import { Container } from "../index"

const meta = {
  title: "Pages/Container",
  component: Container,
  args: {
    children: (
      <div>
        <Text variant="body">
          Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa
          drumstick fatback cow tongue ground round chicken. Jowl cow short
          ribs, ham tongue turducken spare ribs pig drumstick chuck meatball.
          Buffalo turducken pancetta tail salami chicken. Bresaola venison
          pastrami beef.
        </Text>
        <Text variant="body">
          Porchetta shankle ribeye, ground round beef filet mignon fatback
          chislic boudin. Boudin burgdoggen spare ribs, meatloaf pastrami pork
          loin meatball short ribs tenderloin ribeye cupim venison short loin
          pork chop tongue. Andouille landjaeger bacon, picanha filet mignon
          short ribs hamburger shank shoulder porchetta. Pork chop ground round
          tenderloin, biltong kevin corned beef chuck frankfurter spare ribs
          pork meatball pastrami fatback. Strip steak beef ribs pork loin kevin,
          biltong fatback tongue salami brisket capicola flank tenderloin.
        </Text>
      </div>
    ),
  },
  argTypes: {
    children: { controls: "disabled" },
  },
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Example: Story = {
  render: args => (
    <Container>
      <Content {...args} />
    </Container>
  ),
  parameters: {
    chromatic: { disable: false },
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

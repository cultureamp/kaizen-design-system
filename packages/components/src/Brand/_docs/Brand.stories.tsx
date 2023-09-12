import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { StickerSheet } from "~storybook/components/StickerSheet"
import { Brand } from "../index"

const meta = {
  title: "KAIO-staging/Brand",
  component: Brand,
} satisfies Meta<typeof Brand>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    variant: "logo-horizontal",
    alt: "Logo Horizontal",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Variants: Story = {
  args: {
    alt: "Culture Amp",
    variant: "logo-horizontal",
  },
  render: () => (
    <StickerSheet>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Logo Horizontal">
          <Brand alt="Culture Amp" variant="logo-horizontal" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Logo Vertical">
          <Brand alt="Culture Amp" variant="logo-vertical" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Enso">
          <Brand alt="Culture Amp" variant="enso" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Collective Intelligence">
          <div style={{ width: "200px" }}>
            <Brand
              alt="Collective Intelligence"
              variant="collective-intelligence"
            />
          </div>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

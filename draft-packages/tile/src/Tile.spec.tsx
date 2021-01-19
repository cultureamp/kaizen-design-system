import * as React from "react"

import { cleanup, render } from "@testing-library/react"
import {
  InformationTile,
  MultiActionTile,
  TileAction,
  TileInformation,
} from "./index"

const primaryAction: TileAction = {
  label: "View",
  href: "href",
}

const secondaryAction: TileAction = {
  label: "Preview",
  href: "href2",
}

const information: TileInformation = {
  text:
    "Additional information can be included on the underside of the tile and viewed on click of the information" +
    " icon.",
  secondaryAction: {
    label: "Learn more",
    href: "",
  },
}

afterEach(cleanup)

describe("<InformationTile />", () => {
  describe("snapshots", () => {
    it("renders InformationTile", () => {
      const { container } = render(
        <InformationTile
          title="Title"
          metadata="Metadata"
          footer={<div>Hello world</div>}
        />
      )

      expect(container.firstChild).toMatchSnapshot()
    })

    it("renders InformationTile with children", () => {
      const { container } = render(
        <InformationTile
          title="Title"
          metadata="Metadata"
          footer={<div>Hello world</div>}
        >
          <div>Child content</div>
        </InformationTile>
      )

      expect(container.firstChild).toMatchSnapshot()
    })

    it("renders InformationTile with information data", () => {
      const { container } = render(
        <InformationTile
          title="Title"
          metadata="Metadata"
          footer={<div>Hello world</div>}
          information={information}
        >
          <div>Child content</div>
        </InformationTile>
      )

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})

describe("<MultiActionTile />", () => {
  describe("snapshots", () => {
    it("renders MultiActionTile", () => {
      const { container } = render(
        <MultiActionTile
          title="Title"
          metadata="Metadata"
          primaryAction={primaryAction}
        />
      )

      expect(container.firstChild).toMatchSnapshot()
    })

    it("renders MultiActionTile with secondary action", () => {
      const { container } = render(
        <MultiActionTile
          title="Title"
          metadata="Metadata"
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
      )

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})

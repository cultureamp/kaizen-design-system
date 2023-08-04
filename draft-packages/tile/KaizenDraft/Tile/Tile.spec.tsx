import React from "react"
import { render } from "@testing-library/react"
import {
  InformationTile,
  MultiActionTile,
  TileAction,
  TileInformation,
} from "@kaizen/draft-tile"

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

describe("<InformationTile />", () => {
  it("renders InformationTile with a custom title tag", () => {
    const { getByText } = render(
      <InformationTile
        title="custom title"
        titleTag="div"
        metadata="Metadata"
        footer={<div>Hello world</div>}
        information={information}
      >
        <div>Child content</div>
      </InformationTile>
    )

    expect(getByText("custom title").tagName).toEqual("DIV")
  })
})

describe("<MultiActionTile />", () => {
  it("renders MultiActionTile with a custom title tag", () => {
    const { getByText } = render(
      <MultiActionTile
        title="custom title"
        titleTag="h6"
        metadata="Metadata"
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      />
    )

    expect(getByText("custom title").tagName).toEqual("H6")
  })
})

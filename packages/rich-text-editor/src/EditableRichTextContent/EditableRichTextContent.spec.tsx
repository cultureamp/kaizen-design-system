import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { RichTextContentProps } from "../RichTextContent"
import { EditableRichTextContent } from "./EditableRichTextContent"

const mockFn = jest.fn()

jest.mock("../../", () => ({
  __esModule: true,
  RichTextContent: (props: RichTextContentProps): JSX.Element => {
    mockFn(props)
    return <div>Mocked Component</div>
  },
}))

const content = [
  {
    type: "paragraph",
    content: [{ type: "text", text: "Sample rich text content" }],
  },
]

describe("Content props are passed", () => {
  it("should pass them to RichTextContent component", () => {
    render(
      <EditableRichTextContent
        content={content}
        labelText=""
        onClick={jest.fn()}
        contentProps={{ id: "sampleId" }}
      />
    )
    expect(mockFn).toHaveBeenCalledWith({ content, id: "sampleId" })
  })
})

import React from "react"
import { act, configure, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Dropzone } from "./Dropzone"
import { DROPZONE_AUTOMATION_ID } from "./constants"

configure({
  testIdAttribute: "data-automation-id",
})

describe("<Dropzone />", () => {
  const setEnableFileUpload = jest.fn()

  it("renders", async () => {
    render(<Dropzone setEnableFileUpload={setEnableFileUpload} />)
    const element = await screen.findByTestId(DROPZONE_AUTOMATION_ID)
    expect(element).toBeVisible()
  })

  it("renders the success icon when an acceptable file has been added", async () => {
    const { container } = render(<Dropzone setEnableFileUpload={setEnableFileUpload} />)

    const spreadsheetFile = new File(
      ["(⌐□_□) - file contents is tested in backend"],
      "fake-spreadsheet.xlsx",
      {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }
    )

    // modify the file size property
    Object.defineProperty(spreadsheetFile, "size", { value: 10000 })


    const data = mockData([spreadsheetFile])
    const element = await screen.findByTestId(DROPZONE_AUTOMATION_ID)
    const input = element.querySelector("input")

    act(() => {
      input && fireEvent.drop(input, data)
    })

    await waitFor(() => {
      expect(container).toHaveTextContent("fake-spreadsheet.xlsx")
    })

  })
})


/**
 * This mock function was referenced from the react-dropzone package docs.
 * Resource: https://react-dropzone.js.org/#section-accepting-specific-file-types
 * Search 'Testing' for the segment.
 */
function mockData(files: File[]): any {
  return {
    dataTransfer: {
      files,
      items: files.map(file => ({
        kind: "file",
        type: file.type,
        getAsFile: () => file,
      })),
      types: ["Files"],
    },
  }
}

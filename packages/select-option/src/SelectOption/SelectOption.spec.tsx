// import React from "react"
// import { render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
// import { Listbox } from "./Select"

// describe("<Listbox />", () => {
//   describe("A listbox with 3 options", () => {
//     beforeEach(() => {
//       render(
//         <Listbox>
//           <Listbox.Option>First</Listbox.Option>
//           <Listbox.Option>Second</Listbox.Option>
//           <Listbox.Option>Third</Listbox.Option>
//         </Listbox>
//       )
//     })

//     it("renders a visible listbox", () => {
//       expect(screen.getByRole("listbox")).toBeVisible()
//     })

//     it("renders 3 options", () => {
//       expect(screen.getAllByRole("option")).toHaveLength(3)
//     })

//     it("can be focused", () => {
//       userEvent.tab()
//       expect(screen.getByRole("listbox")).toHaveFocus()
//     })

//     it.todo("selects the current option when user presses Space")
//     it.todo("can toggle the current option when user presses Space")
//     it.todo("supports the down arrow")
//     it.todo("supports the up arrow")
//   })
// })

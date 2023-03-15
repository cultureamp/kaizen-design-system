import React, { useRef } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Filter, FilterProps } from "./Filter"
import {
  FilterTriggerButtonRemovable,
  FilterTriggerButtonRemovableProps,
} from "./components/FilterTriggerButtonRemovable"

const FilterWrapper = (customProps?: Partial<FilterProps>): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Filter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      filterButton={(triggerButtonProps): JSX.Element => (
        <button label="Label" {...triggerButtonProps} />
      )}
      {...customProps}
    >
      <div>Filter Contents</div>
    </Filter>
  )
}

describe("<Filter />", () => {
  it("does not show content initially", () => {
    render(<FilterWrapper />)
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("shows content when isOpen is true", () => {
    render(<FilterWrapper isOpen />)
    expect(screen.queryByRole("dialog")).toBeInTheDocument()
    expect(screen.queryByText("Filter Contents")).toBeInTheDocument()
  })

  it("shows content when trigger button is clicked", async () => {
    render(<FilterWrapper />)
    const filterButton = screen.getByRole("button", { name: "Label" })
    await userEvent.click(filterButton)
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
      expect(screen.queryByText("Filter Contents")).toBeInTheDocument()
    })
  })

  it("shows content when trigger button on keydown enter", async () => {
    render(<FilterWrapper />)
    const filterButton = screen.getByRole("button", { name: "Label" })
    await userEvent.tab()
    expect(filterButton).toHaveFocus()
    userEvent.keyboard("{Enter}")

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeInTheDocument()
      expect(screen.queryByText("Filter Contents")).toBeInTheDocument()
    })
  })
  describe("Refs", () => {
    it("correctly passes through both button refs", async () => {
      const onClick = jest.fn<
        void,
        [string | null | undefined, string | null | undefined]
      >()

      const Wrapper = (): JSX.Element => {
        const triggerButtonRef = useRef<HTMLButtonElement>(null)
        const removeButtonRef = useRef<HTMLButtonElement>(null)
        const ref = useRef({ triggerButtonRef, removeButtonRef })

        const handleClick = (): void =>
          onClick(triggerButtonRef.current?.id, removeButtonRef.current?.id)

        return (
          <>
            <FilterTriggerButtonRemovable
              ref={ref}
              id="test__date-input-field--ref"
              triggerButtonProps={{
                label: "Desserts",
                id: "test__trigger-button",
              }}
              removeButtonProps={{
                id: "test__remove-button",
              }}
            />
            <button onClick={handleClick}>Click me</button>
          </>
        )
      }

      render(<Wrapper />)

      await userEvent.click(screen.getByText("Click me"))
      expect(onClick).toBeCalledWith(
        "test__trigger-button",
        "test__remove-button"
      )
    })
  })
})

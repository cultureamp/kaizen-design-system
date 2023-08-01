import React, { useRef } from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import {
  DateInputWithIconButton,
  DateInputWithIconButtonProps,
} from "./DateInputWithIconButton"

const user = userEvent.setup()

const defaultProps: DateInputWithIconButtonProps = {
  id: "test__date-input-with-icon-button",
  labelText: "Due date",
  onButtonClick: vi.fn<void, []>(),
}

const DateInputWithIconButtonWrapper = (
  props: Partial<DateInputWithIconButtonProps>
): JSX.Element => <DateInputWithIconButton {...defaultProps} {...props} />

describe("<DateInputWithIconButton />", () => {
  describe("Icon button", () => {
    it("has helpful label", () => {
      render(<DateInputWithIconButtonWrapper />)
      expect(
        screen.getByRole("button", { name: "Choose date" })
      ).toBeInTheDocument()
    })

    it("has helpful label showing the current date when one is selected", () => {
      render(
        <DateInputWithIconButtonWrapper
          value="Mar 1, 2022"
          onChange={(): void => undefined}
        />
      )
      expect(
        screen.getByRole("button", { name: "Change date, Mar 1, 2022" })
      ).toBeInTheDocument()
    })
  })

  describe("States", () => {
    it("disables both input and icon button", () => {
      render(<DateInputWithIconButtonWrapper disabled />)
      const input = screen.getByLabelText("Due date")
      const calendarButton = screen.getByRole("button", { name: "Choose date" })
      expect(input).toBeDisabled()
      expect(calendarButton).toBeDisabled()
    })
  })

  describe("Refs", () => {
    it("correctly passes through input and button refs", async () => {
      const onButtonClick = vi.fn<
        void,
        [string | null | undefined, string | null | undefined]
      >()

      const Wrapper = (): JSX.Element => {
        const inputRef = useRef<HTMLInputElement>(null)
        const buttonRef = useRef<HTMLButtonElement>(null)
        const ref = useRef({ inputRef, buttonRef })

        const handleClick = (): void =>
          onButtonClick(
            inputRef.current?.id,
            buttonRef.current?.getAttribute("aria-label")
          )

        return (
          <>
            <DateInputWithIconButton
              ref={ref}
              id="test__date-input-field--ref"
              labelText="label"
              onButtonClick={vi.fn<void, []>()}
            />
            <button type="button" onClick={handleClick}>
              Click me
            </button>
          </>
        )
      }

      render(<Wrapper />)

      await user.click(screen.getByText("Click me"))
      expect(onButtonClick).toBeCalledWith(
        "test__date-input-field--ref",
        "Choose date"
      )
    })
  })
})

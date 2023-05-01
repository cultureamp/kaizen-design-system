import React, { useRef } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  RemovableFilterTriggerButton,
  RemovableFilterTriggerButtonProps,
} from "."

const RemovableFilterTriggerButtonWrapper = ({
  triggerButtonProps,
  removeButtonProps,
  ...restProps
}: Partial<RemovableFilterTriggerButtonProps>): JSX.Element => (
  <RemovableFilterTriggerButton
    triggerButtonProps={{
      ...triggerButtonProps,
      label: "Desserts",
    }}
    removeButtonProps={{
      ...removeButtonProps,
    }}
    {...restProps}
  />
)

describe("<RemovableFilterTriggerButton />", () => {
  it("should use fallback label for remove button if not specified", () => {
    render(<RemovableFilterTriggerButtonWrapper />)
    expect(
      screen.getByRole("button", { name: "Remove filter - Desserts" })
    ).toBeVisible()
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
            <RemovableFilterTriggerButton
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
            <button type="button" onClick={handleClick}>
              Click me
            </button>
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

import React, { useRef } from "react"
import { screen, waitFor, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import {
  FilterButtonRemovable,
  FilterButtonRemovableProps,
  FilterButtonRemovableRefs,
} from "."

const user = userEvent.setup()

const FilterButtonRemovableWrapper = ({
  triggerButtonProps,
  removeButtonProps,
  ...restProps
}: Partial<FilterButtonRemovableProps>): JSX.Element => (
  <FilterButtonRemovable
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

describe("<FilterButtonRemovable />", () => {
  it("should use fallback label for remove button if not specified", async () => {
    render(<FilterButtonRemovableWrapper />)
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Remove filter - Desserts" })
      ).toBeVisible()
    })
  })

  describe("Refs", () => {
    it("correctly passes through both button refs", async () => {
      const onClick = vi.fn()

      const Wrapper = (): JSX.Element => {
        const triggerRef = useRef<HTMLButtonElement>(null)
        const removeButtonRef = useRef<HTMLButtonElement>(null)
        const ref = useRef<FilterButtonRemovableRefs>({
          triggerRef,
          removeButtonRef,
        })

        const handleClick = (): void => {
          onClick(triggerRef.current?.id, removeButtonRef.current?.id)
        }
        return (
          <>
            <FilterButtonRemovable
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

      await user.click(screen.getByText("Click me"))
      expect(onClick).toHaveBeenCalledWith(
        "test__trigger-button",
        "test__remove-button"
      )
    })
  })
})

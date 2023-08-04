import { ChangeEvent, FocusEvent, KeyboardEvent, SetStateAction } from "react"
import { renderHook, act } from "@testing-library/react-hooks"
import { enAU } from "date-fns/locale"
import * as isSelectingDayInCalendar from "@kaizen/date-picker/src/utils/isSelectingDayInCalendar"
import { useDateInputHandlers } from "./useDateInputHandlers"

const locale = enAU
const setInputValue = vi.fn<[SetStateAction<string>, void]>()
const onDateChange = vi.fn<[Date | undefined], void>()

describe("useDateInputHandlers", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("onChange", () => {
    it("updates input value", () => {
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
        })
      )
      const { onChange } = result.current

      act(() => {
        onChange?.({
          currentTarget: { value: "a" },
        } as ChangeEvent<HTMLInputElement>)
      })

      expect(setInputValue).toHaveBeenCalledWith("a")
    })

    it("calls custom onChange when provided", () => {
      const onChangeMock = vi.fn<[ChangeEvent]>()

      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
          onChange: onChangeMock,
        })
      )
      const { onChange } = result.current
      const changeEvent = {
        currentTarget: { value: "a" },
      } as ChangeEvent<HTMLInputElement>

      act(() => {
        onChange?.(changeEvent)
      })

      expect(onChangeMock).toHaveBeenCalledWith(changeEvent)
    })
  })

  describe("onFocus", () => {
    it("transforms input value when it is a valid date", () => {
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
        })
      )
      const { onFocus } = result.current

      act(() => {
        onFocus?.({
          currentTarget: { value: "1 May 2022" },
        } as FocusEvent<HTMLInputElement>)
      })

      expect(setInputValue).toHaveBeenCalledWith("01/05/2022")
    })

    it("does not transform input value when it is an invalid date", () => {
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
        })
      )
      const { onFocus } = result.current

      act(() => {
        onFocus?.({
          currentTarget: { value: "potato" },
        } as FocusEvent<HTMLInputElement>)
      })

      expect(setInputValue).not.toHaveBeenCalled()
    })

    it("calls custom onFocus when provided", () => {
      const onFocusMock = vi.fn<[FocusEvent<HTMLInputElement>, void]>()

      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
          onFocus: onFocusMock,
        })
      )
      const { onFocus } = result.current
      const focusEvent = {
        currentTarget: { value: "potato" },
      } as FocusEvent<HTMLInputElement>

      act(() => {
        onFocus?.(focusEvent)
      })

      expect(onFocusMock).toHaveBeenCalledWith(focusEvent)
    })
  })

  describe("onBlur", () => {
    it("does not do anything when selecting a day in the calendar", () => {
      const onBlurMock = vi.fn<[FocusEvent<HTMLInputElement>], void>()
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
          onBlur: onBlurMock,
        })
      )
      const { onBlur } = result.current
      const blurEvent = {
        currentTarget: { value: "" },
      } as FocusEvent<HTMLInputElement>

      const spy = vi.spyOn(isSelectingDayInCalendar, "isSelectingDayInCalendar")
      spy.mockReturnValue(true)

      act(() => {
        onBlur?.(blurEvent)
      })

      expect(onBlurMock).not.toHaveBeenCalled()

      spy.mockReset()
    })

    it("changes date to undefined when input is empty", () => {
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
        })
      )
      const { onBlur } = result.current
      const blurEvent = {
        currentTarget: { value: "" },
      } as FocusEvent<HTMLInputElement>

      act(() => {
        onBlur?.(blurEvent)
      })

      expect(setInputValue).not.toHaveBeenCalled()
      expect(onDateChange).toHaveBeenCalledWith(undefined)
    })

    it("transforms input value when it is a valid date", () => {
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
        })
      )
      const { onBlur } = result.current
      const blurEvent = {
        currentTarget: { value: "01/05/2022" },
      } as FocusEvent<HTMLInputElement>

      act(() => {
        onBlur?.(blurEvent)
      })

      expect(setInputValue).toHaveBeenCalledWith("1 May 2022")
      expect(onDateChange).toHaveBeenCalledWith(new Date("2022-05-1"))
    })

    it("does not transform input value when it is an invalid date", () => {
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
        })
      )
      const { onBlur } = result.current
      const blurEvent = {
        currentTarget: { value: "potato" },
      } as FocusEvent<HTMLInputElement>

      act(() => {
        onBlur?.(blurEvent)
      })

      expect(setInputValue).not.toHaveBeenCalled()
      // Called with the invalid Date object
      expect(onDateChange).toHaveBeenCalledTimes(1)
    })

    it("does not transform input value when it is a disabled date", () => {
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          disabledDays: new Date("2022-05-01"),
          setInputValue,
          onDateChange,
        })
      )
      const { onBlur } = result.current
      const blurEvent = {
        currentTarget: { value: "01/05/2022" },
      } as FocusEvent<HTMLInputElement>

      act(() => {
        onBlur?.(blurEvent)
      })

      expect(setInputValue).not.toHaveBeenCalled()
      expect(onDateChange).toHaveBeenCalledWith(new Date("2022-05-01"))
    })

    it("calls custom onBlur when provided on input with value", () => {
      const onBlurMock = vi.fn<[FocusEvent<HTMLInputElement>, void]>()
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
          onBlur: onBlurMock,
        })
      )
      const { onBlur } = result.current
      const blurEvent = {
        currentTarget: { value: "1 May 2022" },
      } as FocusEvent<HTMLInputElement>

      act(() => {
        onBlur?.(blurEvent)
      })

      expect(onBlurMock).toHaveBeenCalledWith(blurEvent)
    })

    it("calls custom onBlur when provided on empty", () => {
      const onBlurMock = vi.fn<[FocusEvent<HTMLInputElement>, void]>()
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
          onBlur: onBlurMock,
        })
      )
      const { onBlur } = result.current
      const blurEvent = {
        currentTarget: { value: "" },
      } as FocusEvent<HTMLInputElement>

      act(() => {
        onBlur?.(blurEvent)
      })

      expect(onBlurMock).toHaveBeenCalledWith(blurEvent)
    })
  })

  describe("onKeyDown - Enter", () => {
    it("calls onDateChange with date", () => {
      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
        })
      )
      const { onKeyDown } = result.current

      act(() => {
        onKeyDown?.({
          preventDefault: (): void => undefined,
          currentTarget: { value: "01/05/2022" },
          key: "Enter",
        } as KeyboardEvent<HTMLInputElement>)
      })

      expect(onDateChange).toBeCalledWith(new Date("2022-05-01"))
    })

    it("calls onDateSubmit when provided", () => {
      const onDateSubmit = vi.fn<[Date], void>()

      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
          onDateSubmit,
        })
      )
      const { onKeyDown } = result.current
      const keyboardEvent = {
        preventDefault: (): void => undefined,
        currentTarget: { value: "01/05/2022" },
        key: "Enter",
      } as KeyboardEvent<HTMLInputElement>

      act(() => {
        onKeyDown?.(keyboardEvent)
      })

      expect(onDateSubmit).toBeCalledWith(new Date("2022-05-01"))
    })

    it("calls custom onKeyDown when provided", () => {
      const onKeyDownMock = vi.fn<[KeyboardEvent], void>()

      const { result } = renderHook(() =>
        useDateInputHandlers({
          locale,
          setInputValue,
          onDateChange,
          onKeyDown: onKeyDownMock,
        })
      )
      const { onKeyDown } = result.current
      const keyboardEvent = {
        currentTarget: { value: "potato" },
      } as KeyboardEvent<HTMLInputElement>

      act(() => {
        onKeyDown?.(keyboardEvent)
      })

      expect(onKeyDownMock).toBeCalledWith(keyboardEvent)
    })
  })
})

import { RefObject } from "react"
import { renderHook, act } from "@testing-library/react-hooks"
import playIcon from "@kaizen/component-library/icons/launch.icon.svg"
import pauseIcon from "@kaizen/component-library/icons/pause.icon.svg"
import { usePausePlay, usePausePlayHook } from "./usePausePlay"

describe("usePausePlay()", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  let hookResult: usePausePlayHook
  const mockPause = vi.fn()
  const mockPlay = vi.fn()

  describe("when toggling a currently playing video", () => {
    beforeEach(() => {
      const fakeRef = {
        current: {
          pause: mockPause,
          play: mockPlay,
          paused: false, // It's playing
        },
      } as unknown as RefObject<HTMLVideoElement>

      const { result } = renderHook(() => usePausePlay(fakeRef))

      act(() => {
        result.current.toggle()
      })

      hookResult = result.current
    })

    it("pauses the video", () => {
      expect(mockPause).toHaveBeenCalled()
    })

    it("returns the play icon", () => {
      expect(hookResult.icon).toEqual(playIcon)
    })

    it("returns the 'Play animation' label", () => {
      expect(hookResult.label).toEqual("Play animation")
    })
  })

  describe("when toggling a currently paused video", () => {
    beforeEach(() => {
      const fakeRef = {
        current: {
          pause: mockPause,
          play: mockPlay,
          paused: true, // It's not playing
        },
      } as unknown as RefObject<HTMLVideoElement>

      const { result } = renderHook(() => usePausePlay(fakeRef))

      act(() => {
        result.current.toggle()
      })

      hookResult = result.current
    })
    it("starts the video again", () => {
      expect(mockPlay).toHaveBeenCalled()
    })

    it("returns the pause icon", () => {
      expect(hookResult.icon).toEqual(pauseIcon)
    })

    it("returns the 'Pause animation' label", () => {
      expect(hookResult.label).toEqual("Pause animation")
    })
  })
})

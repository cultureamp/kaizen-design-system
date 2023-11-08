import React, { RefObject } from "react"
import { render } from "@testing-library/react"
import { renderHook, act } from "@testing-library/react-hooks"
import { LaunchIcon, PauseIcon } from "~components/Icon"
import { usePausePlay, usePausePlayHook } from "./usePausePlay"

describe("usePausePlay()", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  let hookResult: usePausePlayHook
  const mockPause = jest.fn()
  const mockPlay = jest.fn()

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
      const { baseElement: original } = render(hookResult.icon)
      const { baseElement: comparison } = render(
        <LaunchIcon role="presentation" />
      )
      expect(original).toEqual(comparison)
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
      const { baseElement: original } = render(hookResult.icon)
      const { baseElement: comparison } = render(
        <PauseIcon role="presentation" />
      )
      expect(original).toEqual(comparison)
    })

    it("returns the 'Pause animation' label", () => {
      expect(hookResult.label).toEqual("Pause animation")
    })
  })
})

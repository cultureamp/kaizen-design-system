import { act } from "react-test-renderer"
import { renderHook } from "@testing-library/react-hooks"
import { useResizeObserver } from "./useResizeObserver"

function MockResizeObserver(callback) {
  // @ts-ignore
  this.callback = callback
}

MockResizeObserver.prototype.observe = async function observe() {
  // @ts-ignore
  this.callback(["first"])
  await new Promise(r => setImmediate(r))
  this.callback(["second"])
  await new Promise(r => setImmediate(r))
  this.callback(["third"])
}

const disconnect = jest.fn()
MockResizeObserver.prototype.disconnect = disconnect

jest.mock("resize-observer-polyfill", () => ({
  __esModule: true,
  default: MockResizeObserver,
}))

describe("useResizeObserver", () => {
  it("Calls the callback with the expected entries", async () => {
    const callback = jest.fn().mockImplementation(value => value)
    const { result, waitForNextUpdate, unmount } = renderHook(() =>
      useResizeObserver(callback)
    )
    await act(async () => {
      // @ts-ignore
      result.current[0]("node")
      expect(result.current[1]).toBe(undefined)
      await waitForNextUpdate()
      expect(callback).toBeCalledTimes(1)
      expect(result.current[1]).toBe("first")
      await waitForNextUpdate()
      expect(callback).toBeCalledTimes(2)
      expect(result.current[1]).toBe("second")
      await waitForNextUpdate()
      expect(callback).toBeCalledTimes(3)
      expect(result.current[1]).toBe("third")
    })
    unmount()
    expect(disconnect).toBeCalled()
  })
})

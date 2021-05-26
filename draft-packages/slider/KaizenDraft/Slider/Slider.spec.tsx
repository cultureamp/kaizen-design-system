import React from "react"
import { cleanup, fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import { Slider, SliderProps } from "./Slider"

afterEach(cleanup)

const defaultProps: SliderProps = {
  labelLow: "Low",
  labelHigh: "High",
  initialValue: 5.5,
}

const renderSlider = (props?: SliderProps) => {
  const merged = { ...defaultProps, ...props }
  return render(<Slider {...merged} />)
}

describe("<Slider />", () => {
  describe("when disabled not provided", () => {
    it("the range input is enabled", async () => {
      const { findByRole } = renderSlider()
      expect(await findByRole("slider")).not.toBeDisabled()
    })
    it("the scale labels are show if the disabledLabel is provided", () => {
      const { queryByText } = renderSlider({
        disabledLabel: "Slider Disabled",
      })
      expect(queryByText("Low")).not.toBeNull()
      expect(queryByText("High")).not.toBeNull()
      expect(queryByText("Slider Disabled")).toBeNull()
    })
  })
  describe("when disabled set to false", () => {
    it("the range input is enabled", async () => {
      const { findByRole } = renderSlider({ disabled: false })
      expect(await findByRole("slider")).not.toBeDisabled()
    })
    it("the scale labels are show if the disabledLabel is provided", () => {
      const { queryByText } = renderSlider({
        disabled: false,
        disabledLabel: "Slider Disabled",
      })
      expect(queryByText("Low")).not.toBeNull()
      expect(queryByText("High")).not.toBeNull()
      expect(queryByText("Slider Disabled")).toBeNull()
    })
  })
  describe("when disabled set to true", () => {
    it("the range input is disabled", async () => {
      const { findByRole } = renderSlider({ disabled: true })
      expect(await findByRole("slider")).toBeDisabled()
    })
    it("the scale labels are hidden if the disabledLabel is provided", () => {
      const { queryByText } = renderSlider({
        disabled: true,
        disabledLabel: "Slider Disabled",
      })
      expect(queryByText("Low")).toBeNull()
      expect(queryByText("High")).toBeNull()
      expect(queryByText("Slider Disabled")).not.toBeNull()
    })
    it("the scale labels are shown when no disabledLabel is provided", () => {
      const { queryByText } = renderSlider({
        disabled: true,
      })
      expect(queryByText("Low")).not.toBeNull()
      expect(queryByText("High")).not.toBeNull()
      expect(queryByText("Slider Disabled")).toBeNull()
    })
  })
  describe("when no initial value is provided", () => {
    it("the value should default", async () => {
      const { findByRole } = renderSlider()
      expect(await findByRole("slider")).toHaveValue("5.5")
    })
  })
  describe("when the value is changed", () => {
    it("a whole number should work", async () => {
      const { findByRole } = renderSlider()
      const slider = await findByRole("slider")
      fireEvent.change(slider, { target: { value: 6 } })
      expect(slider).toHaveValue("6")
    })
    it("a fractional number should fail", async () => {
      const { findByRole } = renderSlider()
      const slider = await findByRole("slider")
      fireEvent.change(slider, { target: { value: 4.5 } })
      expect(slider).not.toHaveValue("4.5")
    })
    it("a fractional number should round correctly", async () => {
      const { findByRole } = renderSlider()
      const slider = await findByRole("slider")
      fireEvent.change(slider, { target: { value: 6.5 } })
      expect(slider).toHaveValue("7")
    })
  })
})

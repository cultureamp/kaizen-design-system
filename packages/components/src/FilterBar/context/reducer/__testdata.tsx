import React from "react"
import { FilterState } from "../types"

export const baseFilterAttributes = {
  Component: <div />,
  isOpen: false,
  isRemovable: false,
  isActive: true,
} satisfies Omit<FilterState<string, any>, "id" | "name">

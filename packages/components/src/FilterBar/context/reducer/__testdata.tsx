import React from "react"
import { InternalFilterState } from "../types"

export const baseFilterAttributes = {
  Component: <div />,
  isOpen: false,
  isRemovable: false,
  isActive: true,
} satisfies Omit<InternalFilterState<string, any>, "id" | "name">

import React from "react"
import { Paragraph } from "@kaizen/typography"
import { AnotherTestChild, ExampleChild, TestChild } from "./TestComponents"

const COMPATIBLE_COMPONENTS: Array<React.JSXElementConstructor<any>> = [
  TestChild,
  AnotherTestChild,
  Paragraph,
  // ExampleChild
]

export const isComponent = (element: string | React.JSXElementConstructor<any>): element is React.JSXElementConstructor<any> => element !== "string"
export const isCompatibleComponent = (child: React.ReactElement): boolean => isComponent(child.type) && COMPATIBLE_COMPONENTS.includes(child.type)

export const isUsingClassNameOverride = (
  child: React.ReactElement
): child is React.ReactElement<{ classNameOverride?: string }> =>
   React.isValidElement(child) && isCompatibleComponent(child)

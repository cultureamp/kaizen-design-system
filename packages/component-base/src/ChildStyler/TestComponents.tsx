import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "../types"
import { ChildStyler } from "./ChildStyler"
import { StylerOptions } from "./utils"

export const TestChild: React.VFC<OverrideClassName<HTMLAttributes<HTMLParagraphElement>>> = ({ classNameOverride, ...restProps}) => <p className={classNameOverride} {...restProps} />

export const AnotherTestChild: React.FC<OverrideClassName<HTMLAttributes<HTMLDivElement>>> = ({ classNameOverride, ...restProps}) => <div className={classNameOverride} {...restProps} />

interface ExampleChildProps extends OverrideClassName<HTMLAttributes<HTMLParagraphElement>>, StylerOptions {}

export const ExampleChild: React.VFC<ExampleChildProps> = ({ classNameOverride, margin, ...restProps}) =>
  <ChildStyler margin={margin}><p className={classNameOverride} {...restProps} /></ChildStyler>

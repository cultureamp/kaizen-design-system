import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "../types"

export const TestChild: React.VFC<OverrideClassName<HTMLAttributes<HTMLParagraphElement>>> = ({ classNameOverride, ...restProps}) => <p className={classNameOverride} {...restProps} />

export const AnotherTestChild: React.FC<OverrideClassName<HTMLAttributes<HTMLDivElement>>> = ({ classNameOverride, ...restProps}) => <div className={classNameOverride} {...restProps} />

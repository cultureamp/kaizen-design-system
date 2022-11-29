import React from "react"
import { SingleSelection } from "@react-types/shared"
import classnames from "classnames"
import { Label, FieldMessage } from "@kaizen/draft-form"
import {
  SelectProvider,
  SelectProviderProps,
} from "../../provider/SelectProvider"
import { ItemType } from "../../types"
import rootStyles from "./rootStyles.module.scss"
export interface RootProps extends SelectProviderProps {
  trigger: React.ReactNode
  children: React.ReactNode // the content of the menu
  description?: React.ReactNode
  isFullWidth?: boolean
  id: string // provide A11y context for label
  label: string // provide A11y context for listbox
  items: ItemType[]
  selectedKey?: SingleSelection["selectedKey"]
  onSelectionChange?: SingleSelection["onSelectionChange"]
}

export type SelectProps = RootProps

export const Root: React.VFC<RootProps> = (props: RootProps) => (
  <div>
    <Label
      htmlFor={props.id}
      aria-label={props.label}
      classNameOverride={classnames([
        !props.isFullWidth && rootStyles.notFullWidth,
      ])}
    >
      {props.label}
    </Label>
    <SelectProvider {...props}>{props.children}</SelectProvider>
    {props.description && (
      <FieldMessage id={`${props.description}`} message={props.description} />
    )}
  </div>
)

Root.displayName = "Root"

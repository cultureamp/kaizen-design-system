import React, { ReactNode } from "react"
import { useCombobox } from "downshift"
import { Combobox, SelectItem, Label } from "../Primitives/index"

export interface ComboboxFieldProps {
  placeholder: string
  labelText: ReactNode
  items: SelectItem[]
}

const ComboboxField = (props: ComboboxFieldProps) => {
  const { labelText, items } = props
  // This is somewhat of a faux instance of the combobox,
  // just used to generate IDs
  const { getLabelProps, getInputProps } = useCombobox({ items })
  const inputProps = getInputProps()
  return (
    <>
      <Label {...getLabelProps()} labelText={labelText} />
      <Combobox
        id={inputProps.id}
        labelId={inputProps["aria-labelledby"]}
        items={items}
      />
    </>
  )
}

export default ComboboxField

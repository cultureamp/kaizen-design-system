import React from "react"
import { useSelect } from "downshift"
import { Select, SelectItem, Label } from "../Primitives/index"

interface SelectFieldProps {
  labelText: string
  placeholder: string
  items: SelectItem[]
}

const SelectField = (props: SelectFieldProps) => {
  const { labelText, items } = props
  const { getLabelProps, getToggleButtonProps } = useSelect({ items })
  const buttonProps = getToggleButtonProps()
  return (
    <>
      <div>
        <Label {...getLabelProps()} labelText={labelText} />
      </div>
      <Select
        id={buttonProps.id}
        labelId={buttonProps["aria-labelledby"]}
        items={items}
      />
    </>
  )
}

export default SelectField

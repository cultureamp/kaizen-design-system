import React, { useState } from "react"
import { Button, Dialog, DialogTrigger, Popover } from "react-aria-components"
import { MeatballsIcon } from "~components/Icon"
import { RadioField, RadioGroup } from "~components/Radio"

export const AccessibilitySettings = () => {
  const [selected, setSelected] = useState(null)
  return (
    <DialogTrigger>
      <Button className="">
        <MeatballsIcon role="img" aria-label="Accessibilty settings" />
      </Button>
      <Popover>
        <Dialog>
          <RadioGroup labelText="Theme">
            <RadioField
              labelText="Default"
              name="global-theme"
              value="default"
              onChange={event => {
                setSelected(event.target.value)
              }}
              selectedStatus={selected === "default"}
            />
            <RadioField
              labelText="High contrast dark"
              name="global-theme"
              value="hc-dark"
              onChange={event => {
                setSelected(event.target.value)
              }}
              selectedStatus={selected === "hc-dark"}
            />
          </RadioGroup>
        </Dialog>
      </Popover>
    </DialogTrigger>
  )
}

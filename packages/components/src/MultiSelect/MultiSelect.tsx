import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./MultiSelect.module.scss"

export type MultiSelectProps = OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const MultiSelect = ({
  classNameOverride,
  ...restProps
}: MultiSelectProps): JSX.Element => (
  <div
    className={classnames(styles.multiSelect, classNameOverride)}
    {...restProps}
  >
    <div>
      <button type="button">Toggle</button>
      <ul>
        <li>
          <div>Tag</div>
        </li>
      </ul>
    </div>
    <div>
      <fieldset>
        <div>
          <label htmlFor="sdcsd">thing</label>
          <input type="checkbox" id="sdcsd" />
        </div>
      </fieldset>
    </div>
  </div>
)

MultiSelect.displayName = "MultiSelect"

import * as React from "react";
import { ToggledStatus, ToggleTheme } from "@kaizen/component-library/draft";
interface Props {
    id?: string;
    name?: string;
    labelText: string | React.ReactNode;
    toggledStatus?: ToggledStatus;
    onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    disabled?: boolean;
    inline?: boolean;
    fullWidth?: boolean;
    theme?: ToggleTheme;
}
declare type ToggleSwitchField = React.FunctionComponent<Props>;
declare const ToggleSwitchField: ToggleSwitchField;
export default ToggleSwitchField;

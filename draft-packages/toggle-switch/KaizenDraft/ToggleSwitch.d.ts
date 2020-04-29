import * as React from "react";
export declare enum ToggledStatus {
    ON = "on",
    OFF = "off"
}
export declare enum ToggleTheme {
    DEFAULT = "default",
    FREEMIUM = "freemium"
}
interface Props {
    id?: string;
    automationId?: string;
    name?: string;
    toggledStatus?: ToggledStatus;
    onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    disabled?: boolean;
    theme?: ToggleTheme;
}
declare type ToggleSwitch = React.FunctionComponent<Props>;
declare const ToggleSwitch: ToggleSwitch;
export default ToggleSwitch;

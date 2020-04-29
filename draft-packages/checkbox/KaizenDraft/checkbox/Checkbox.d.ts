import * as React from "react";
export declare type CheckedStatus = "on" | "off" | "mixed";
export declare type CheckboxProps = {
    id?: string;
    automationId?: string;
    checkedStatus?: CheckedStatus;
    onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    disabled?: boolean;
    name?: string;
    tabIndex?: number;
};
declare type Input = React.FunctionComponent<CheckboxProps>;
declare const Input: Input;
export default Input;

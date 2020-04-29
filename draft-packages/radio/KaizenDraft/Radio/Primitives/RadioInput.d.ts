import * as React from "react";
export declare type RadioInputProps = {
    id: string;
    automationId?: string;
    selectedStatus?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    disabled?: boolean;
    name: string;
    value: string;
};
declare type RadioInput = React.FunctionComponent<RadioInputProps>;
declare const RadioInput: RadioInput;
export default RadioInput;

import * as React from "react";
export declare type RadioProps = {
    id: string;
    automationId?: string;
    name: string;
    value: string;
    labelText: string | React.ReactNode;
    selectedStatus?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    disabled?: boolean;
    inline?: boolean;
};
declare type Radio = React.FunctionComponent<RadioProps>;
declare const Radio: Radio;
export default Radio;

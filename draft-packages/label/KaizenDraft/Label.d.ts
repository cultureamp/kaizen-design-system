import * as React from "react";
declare type LabelType = "text" | "checkbox" | "toggle" | "radio";
export declare type LabelProps = {
    id?: string;
    automationId?: string;
    htmlFor?: string;
    labelText?: string | React.ReactNode;
    labelType?: LabelType;
    reversed?: boolean;
};
declare type Label = React.SFC<LabelProps>;
declare const Label: Label;
export default Label;

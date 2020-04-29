import { CheckedStatus } from "@kaizen/component-library/draft";
import * as React from "react";
export declare type CheckboxFieldProps = {
    id?: string;
    automationId?: string;
    name?: string;
    labelText: string | React.ReactNode;
    checkedStatus?: CheckedStatus;
    onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    disabled?: boolean;
    noBottomMargin?: boolean;
    tabIndex?: number;
};
declare type CheckboxField = React.FunctionComponent<CheckboxFieldProps>;
declare const CheckboxField: CheckboxField;
export default CheckboxField;

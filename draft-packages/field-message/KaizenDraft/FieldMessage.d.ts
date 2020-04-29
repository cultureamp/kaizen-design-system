import * as React from "react";
export declare type FieldMessageStatus = "default" | "success" | "error";
export declare type FieldMessageProps = {
    id?: string;
    automationId?: string;
    message?: string;
    status?: FieldMessageStatus;
    reversed?: boolean;
};
declare type FieldMessage = React.SFC<FieldMessageProps>;
declare const FieldMessage: FieldMessage;
export default FieldMessage;

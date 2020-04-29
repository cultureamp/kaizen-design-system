import * as React from "react";
declare type Variant = "default" | "sentimentPositive" | "sentimentNeutral" | "sentimentNegative" | "sentimentNone" | "validationPositive" | "validationInformative" | "validationNegative" | "validationCautionary" | "statusLive" | "statusDraft" | "statusClosed" | "statusAction";
interface Props {
    readonly children: React.ReactNode;
    readonly variant?: Variant;
    readonly size?: "medium" | "small";
    readonly inline?: boolean;
    readonly dismissible?: boolean;
    readonly onDismiss?: React.MouseEventHandler<HTMLSpanElement>;
    readonly onMouseDown?: React.MouseEventHandler<HTMLSpanElement>;
    readonly onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>;
    readonly truncateWidth?: number;
}
declare const Tag: (props: Props) => JSX.Element;
export default Tag;

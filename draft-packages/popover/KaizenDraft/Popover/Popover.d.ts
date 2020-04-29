import * as React from "react";
export interface Props {
    readonly id?: string;
    readonly automationId?: string;
    readonly visible?: boolean;
    readonly onClose?: (event: React.MouseEvent<HTMLButtonElement>) => any;
    readonly variant?: Variant;
    readonly side?: Side;
    readonly size?: Size;
    readonly position?: Position;
    readonly heading?: string;
    readonly dismissible?: boolean;
    readonly singleLine?: boolean;
    readonly children: React.ReactNode;
    readonly boxOffset?: number;
}
declare type Variant = "default" | "informative" | "positive" | "negative" | "cautionary";
declare type Side = "top" | "bottom";
declare type Position = "start" | "center" | "end";
declare type Size = "small" | "large";
declare type Popover = React.FunctionComponent<Props>;
declare const Popover: Popover;
export default Popover;

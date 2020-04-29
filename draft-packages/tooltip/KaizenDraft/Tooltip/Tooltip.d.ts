import * as React from "react";
declare type Position = "above" | "below";
declare type Props = {
    position?: Position;
    text: string;
    children?: React.ReactNode;
};
declare const Tooltip: {
    (props: Props): JSX.Element;
    defaultProps: {
        position: string;
    };
};
export default Tooltip;

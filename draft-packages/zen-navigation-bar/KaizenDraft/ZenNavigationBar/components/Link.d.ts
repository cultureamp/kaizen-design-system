import * as React from "react";
import { LinkProps } from "../types";
export default class Link extends React.PureComponent<LinkProps> {
    static displayName: string;
    static defaultProps: {
        iconOnly: boolean;
        active: boolean;
        opaque: boolean;
        small: boolean;
        new: boolean;
        target: string;
    };
    render: () => JSX.Element;
}

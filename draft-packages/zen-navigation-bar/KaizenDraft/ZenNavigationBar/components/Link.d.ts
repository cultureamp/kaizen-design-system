import * as React from "react";
import { LinkProps } from "../types";
export default class Link extends React.PureComponent<LinkProps> {
    static displayName: string;
    static contextType: React.Context<{
        handleNavigationChange?: import("../types").NavigationChange | undefined;
    }>;
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

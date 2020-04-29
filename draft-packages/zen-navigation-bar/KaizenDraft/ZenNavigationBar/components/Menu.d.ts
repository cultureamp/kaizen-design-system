import * as React from "react";
import { MenuProps } from "../types";
declare type State = {
    open: boolean;
};
export default class Menu extends React.Component<MenuProps, State> {
    static displayName: string;
    static defaultProps: {
        items: never[];
        active: boolean;
        mobileEnabled: boolean;
        small: boolean;
        opaque: boolean;
    };
    rootRef: React.RefObject<any>;
    state: {
        open: boolean;
    };
    render(): JSX.Element;
    toggle: (e: MouseEvent | React.SyntheticEvent<HTMLAnchorElement | HTMLButtonElement, Event>) => void;
    renderOffCanvas(): JSX.Element;
    renderBackButton(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    clickDocument: (e: MouseEvent) => void;
}
export {};

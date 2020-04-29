import * as React from "react";
import { Sticky } from "./CollapsibleGroup";
export declare type Props = {
    id: string;
    children: JSX.Element | JSX.Element[] | string;
    title: string;
    renderHeader?: (title: string) => JSX.Element | JSX.Element[];
    open?: boolean;
    group?: boolean;
    separated?: boolean;
    sticky?: Sticky;
    noSectionPadding?: boolean;
    automationId?: string;
    onToggle?: (open: boolean, id: string) => void;
    lazyLoad?: boolean;
    controlled?: boolean;
};
declare type State = {
    open: boolean;
};
declare class Collapsible extends React.Component<Props, State> {
    state: {
        open: boolean;
    };
    render(): JSX.Element;
    private getOpen;
    private handleClick;
}
export default Collapsible;

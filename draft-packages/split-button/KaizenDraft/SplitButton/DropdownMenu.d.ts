import React, { RefObject } from "react";
import { Dir } from "./types";
declare type Props = {
    children: React.ReactNode;
    buttonsBoundingRect: ClientRect | null;
    hideDropdownMenu: () => void;
    dir?: Dir;
};
export declare const calculateMenuTop: (buttonsBoundingRect: ClientRect, menuBoundingRect: ClientRect, viewportHeight: any) => number;
export default class DropdownMenu extends React.Component<Props> {
    static displayName: string;
    static defaultProps: {
        dir: string;
    };
    menuRef: RefObject<HTMLDivElement> | null;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    positionMenu(): void;
    handleDocumentClick: (e: MouseEvent) => void;
    handleDocumentResize: () => void;
    render(): JSX.Element;
}
export {};

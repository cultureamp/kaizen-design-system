import * as React from "react";
import { Dir } from "./types";
declare type Variant = "default" | "primary";
declare type Props = {
    automationId?: string;
    dir?: Dir;
    dropdownAltText: string;
    variant?: Variant;
    onOpenDropdown: () => void;
};
export default class Dropdown extends React.Component<Props> {
    static displayName: string;
    static defaultProps: {
        dir: string;
        variant: string;
    };
    constructor(props: Props);
    toggleDropdownMenu: (e: React.SyntheticEvent<HTMLButtonElement, Event>) => void;
    render(): JSX.Element;
}
export {};

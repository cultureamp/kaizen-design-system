import * as React from "react";
import { Dir } from "./types";
declare type AnchorCallback = (event: React.MouseEvent<HTMLAnchorElement>) => void;
declare type ButtonCallback = (event: React.MouseEvent<HTMLButtonElement>) => void;
declare type Variant = "default" | "primary";
export declare type SplitButtonProps = {
    automationId?: string;
    label: string;
    href?: string;
    onClick?: AnchorCallback | ButtonCallback;
    dropdownContent?: React.ReactNode;
    variant?: Variant;
    dir?: Dir;
    disabled?: boolean;
    dropdownAltText: string;
};
declare type SplitButton = React.FunctionComponent<SplitButtonProps>;
declare const SplitButton: SplitButton;
export default SplitButton;

import * as React from "react";
declare type Props = {
    leftComponent: React.ReactNode;
    onClose: (e: MouseEvent) => void;
    heading: string;
};
declare const Header: ({ leftComponent, onClose, heading }: Props) => JSX.Element;
export default Header;

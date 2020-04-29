import React from "react";
import { MenuGroupProps, MenuItemProps } from "../types";
declare type Props = {
    header?: React.ReactElement<any>;
    items: Array<MenuItemProps | MenuGroupProps>;
};
declare const Dropdown: ({ items, header }: Props) => JSX.Element;
export default Dropdown;

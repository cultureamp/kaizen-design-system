import { default as React, ReactElement } from "react";
export declare type Navigation = {
    primary?: NavigationItem[];
    secondary?: NavigationItem[];
    final?: NavigationItem[];
};
export declare type NavigationItem = ReactElement<LinkProps> | ReactElement<MenuProps>;
export declare type LinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => void;
export declare type LinkProps = {
    icon?: React.SVGAttributes<SVGSymbolElement>;
    text?: string;
    iconOnly?: boolean;
    href: string;
    active?: boolean;
    id?: string;
    onClick?: LinkClick;
    target?: "_self" | "_blank";
    hasMenu?: boolean;
    menuOpen?: boolean;
    badge?: {
        kind: "new" | "notification";
        text: string;
    };
    opaque?: boolean;
    small?: boolean;
};
export declare type MenuProps = {
    header?: React.ReactElement<any>;
    items: Array<MenuItemProps | MenuGroupProps>;
    automationId?: string;
    heading: string;
    mobileEnabled?: boolean;
    active?: boolean;
    icon?: React.SVGAttributes<SVGSymbolElement>;
    opaque?: boolean;
    small?: boolean;
    onLinkClick?: LinkClick;
};
export declare type MenuItemProps = {
    label: string;
    url: string;
    method?: "get" | "post" | "put" | "delete";
    showArrowIcon?: boolean;
    onLinkClick?: LinkClick;
    active?: boolean;
};
export declare type MenuGroupProps = {
    title: string;
    items: MenuItemProps[];
    offCanvas?: boolean;
    first?: boolean;
    onLinkClick?: LinkClick;
};

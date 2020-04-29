import * as React from "react";
declare type Props = {
    separated?: boolean;
    sticky?: Sticky;
    noSectionPadding?: boolean;
    automationId?: string;
    lazyLoad?: boolean;
    onToggle?: (open: boolean, id: string) => void;
    children: Array<React.ReactElement<any>>;
};
export declare type Sticky = {
    top: string;
};
export declare const CollapsibleGroup: React.FunctionComponent<Props>;
export default CollapsibleGroup;

import * as React from "react";
interface Tab {
    readonly label: string;
    readonly active?: boolean;
    readonly disabled?: boolean;
    readonly onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => any;
    readonly href?: string;
}
interface Props {
    readonly tabs: Tab[];
    readonly renderTab?: (renderProps: {
        readonly tab: Tab;
        readonly tabClassName: string;
        readonly activeTabClassName: string;
        readonly disabledTabClassName: string;
    }) => React.ReactNode;
}
declare const Tabs: (props: Props) => JSX.Element;
export default Tabs;

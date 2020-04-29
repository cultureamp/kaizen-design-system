import * as React from "react";
declare type IllustrationType = "positive" | "neutral" | "negative" | "informative" | "action";
declare type LayoutContextType = "sidebarAndContent" | "contentOnly";
export declare type EmptyStateProps = {
    id?: string;
    automationId?: string;
    headingText: string;
    bodyText: string | React.ReactNode;
    straightCorners?: boolean;
    illustrationType?: IllustrationType;
    layoutContext?: LayoutContextType;
    useZenStyles?: boolean;
    children?: React.ReactNode;
};
declare type EmptyState = React.FunctionComponent<EmptyStateProps>;
declare const EmptyState: EmptyState;
export default EmptyState;

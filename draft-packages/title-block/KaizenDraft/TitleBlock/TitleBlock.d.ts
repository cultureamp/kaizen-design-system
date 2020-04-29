/// <reference types="lodash" />
import * as React from "react";
import { NavigationButton } from "./NavigationButtons";
declare type Color = "Lapis" | "Ocean" | "Peach" | "Seedling" | "Wisteria" | "Yuzu" | "Transparent";
declare type SurveyStatus = {
    text: string;
    status: "draft" | "live";
};
declare type Breadcrumb = {
    path: string;
    text: string;
};
declare type Props = {
    title: string;
    subtitle?: string;
    breadcrumb?: Breadcrumb;
    children?: React.ReactNode;
    textDirection?: "ltr" | "rtl";
    surveyStatus?: SurveyStatus;
    navigationButtons?: NavigationButton[];
    reversed?: boolean;
    reverseColor?: Color;
    sticky?: boolean;
    stickyColor?: Color;
};
declare type State = {
    useCompactSize: boolean;
};
declare class TitleBlock extends React.Component<Props, State> {
    static defaultProps: {
        textDirection: string;
    };
    state: {
        useCompactSize: boolean;
    };
    updateScrollPosition: (() => void) & import("lodash").Cancelable;
    componentDidMount(): void;
    componentWillUnmount(): void;
    renderTitle: () => JSX.Element | undefined;
    renderTag: () => JSX.Element | undefined;
    renderSubtitle: () => JSX.Element | undefined;
    renderBreadcrumb: () => JSX.Element | undefined;
    renderNavigation: () => JSX.Element | undefined;
    render(): JSX.Element;
}
export default TitleBlock;

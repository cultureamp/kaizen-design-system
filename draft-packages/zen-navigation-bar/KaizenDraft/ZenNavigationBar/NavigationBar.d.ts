import * as React from "react";
import Link from "./components/Link";
import Menu from "./components/Menu";
import { Navigation, NavigationChange, NavigationItem } from "./types";
declare type Props = {
    environment?: "production" | "staging" | "test" | "local";
    loading?: boolean;
    colorScheme?: "cultureamp" | "kaizen" | "content";
    badgeHref?: string;
    onNavigationChange: NavigationChange;
    headerComponent?: {
        desktop: React.ReactNode;
        mobile: React.ReactNode;
    };
    footerComponent?: React.ReactNode;
    children?: Navigation;
    mobileMaxWidth?: number;
};
export default class NavigationBar extends React.Component<Props> {
    static displayName: string;
    static Link: typeof Link;
    static Menu: typeof Menu;
    static defaultProps: {
        environment: string;
        loading: boolean;
        colorScheme: string;
        badgeHref: string;
        mobileMaxWidth: number;
        onNavigationChange: () => null;
    };
    render(): JSX.Element;
    renderNav(children?: Navigation): JSX.Element | null;
    renderNavSection(section: string, items: NavigationItem[]): JSX.Element | null;
    renderNavItem(link: NavigationItem, section: any): JSX.Element;
    renderBadge(): JSX.Element;
}
export {};

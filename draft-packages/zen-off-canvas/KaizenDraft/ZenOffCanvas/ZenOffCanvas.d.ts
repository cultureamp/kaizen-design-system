import * as React from "react";
declare type Props = {
    links?: any;
    heading: string;
    headerComponent: React.ReactNode;
    footerComponent?: React.ReactNode;
    menuId: string;
};
declare type State = {
    visibleMenus: string[];
};
declare type OffCanvasContextProps = {
    visibleMenus: string[];
    toggleVisibleMenu: (menuId: string) => void;
    resetVisibleMenus: () => void;
};
export declare const OffCanvasContext: React.Context<OffCanvasContextProps>;
export declare class ZenOffCanvas extends React.Component<Props> {
    static defaultProps: {
        withTrigger: boolean;
    };
    render(): JSX.Element;
}
declare const _default: {
    new (props: Props): {
        toggleMenu: (menuId: string) => void;
        resetMenu: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "visibleMenus">(state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<State>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;

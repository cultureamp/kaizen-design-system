import * as React from "react";
declare type Props = {
    img: {
        src: string;
        alt: string;
    };
    text: {
        title: string;
        description: string | React.ReactNode;
    };
    button: {
        label: string;
        onClick: () => void;
    };
    onDismiss: () => void;
};
declare type State = {
    hidden: boolean;
    removed: boolean;
};
declare class GuidanceBlock extends React.Component<Props, State> {
    state: {
        hidden: boolean;
        removed: boolean;
    };
    containerRef: React.RefObject<HTMLDivElement>;
    constructor(props: Props);
    dismissBanner(): void;
    onTransitionEnd(e: React.TransitionEvent<HTMLDivElement>): void;
    render(): JSX.Element | null;
    bannerClassName(): string;
    marginTop(): string;
}
export default GuidanceBlock;

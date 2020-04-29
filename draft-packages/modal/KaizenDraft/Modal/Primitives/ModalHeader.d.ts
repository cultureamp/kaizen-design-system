import * as React from "react";
interface Props {
    readonly unpadded?: boolean;
    readonly reversed?: boolean;
    readonly onDismiss: (evt: MouseEvent) => void;
    readonly children: React.ReactNode;
}
interface State {
    hasRendered: boolean;
}
declare class ModalHeader extends React.Component<Props, State> {
    state: {
        hasRendered: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export default ModalHeader;

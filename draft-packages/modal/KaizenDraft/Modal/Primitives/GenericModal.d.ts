import * as React from "react";
interface Props {
    readonly isOpen: boolean;
    readonly children: React.ReactNode;
    readonly focusLockDisabled?: boolean;
    readonly onEscapeKeyup?: (event: KeyboardEvent) => void;
    readonly onOutsideModalClick?: (event: React.MouseEvent) => void;
}
declare class GenericModal extends React.Component<Props> {
    scrollLayer: HTMLDivElement | null;
    modalLayer: HTMLDivElement | null;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    onOpen(): void;
    onClose(): void;
    addEventHandlers(): void;
    removeEventHandlers(): void;
    preventBodyScroll(): void;
    restoreBodyScroll(): void;
    escapeKeyHandler: (event: KeyboardEvent) => void;
    outsideModalClickHandler: (event: React.MouseEvent<Element, MouseEvent>) => void;
    ensureAccessiblityIsMet(): void;
    scrollModalToTop(): void;
    render(): React.ReactPortal;
}
export default GenericModal;

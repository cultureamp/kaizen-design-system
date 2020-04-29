import * as React from "react";
interface Props {
    readonly isOpen: boolean;
    readonly title: string;
    readonly onConfirm?: () => void;
    readonly onDismiss: () => void;
    readonly confirmLabel?: string;
    readonly renderBackground?: () => React.ReactNode;
    readonly children: React.ReactNode;
}
declare type InformationModal = React.FunctionComponent<Props>;
declare const InformationModal: ({ isOpen, title, onConfirm, onDismiss, confirmLabel, renderBackground, children, }: Props) => JSX.Element;
export default InformationModal;

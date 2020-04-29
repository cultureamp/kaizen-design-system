import * as React from "react";
interface Props {
    readonly isOpen: boolean;
    readonly type: ModalType;
    readonly title: string;
    readonly onConfirm: () => void;
    readonly onDismiss: () => void;
    readonly confirmLabel?: string;
    readonly dismissLabel?: string;
    readonly children: React.ReactNode;
}
declare type ConfirmationModal = React.FunctionComponent<Props>;
declare type ModalType = "positive" | "informative" | "negative" | "cautionary";
declare const ConfirmationModal: ({ isOpen, type, title, onConfirm, onDismiss, confirmLabel, dismissLabel, children, }: Props) => JSX.Element;
export default ConfirmationModal;

import * as React from "react";
interface Props {
    readonly isOpen: boolean;
    readonly type: "positive" | "negative";
    readonly title: string;
    readonly onSubmit: () => void;
    readonly onDismiss: () => void;
    readonly localeDirection?: "rtl" | "ltr";
    readonly submitLabel?: string;
    readonly dismissLabel?: string;
    readonly children: React.ReactNode;
    readonly submitDisabled?: boolean;
}
declare type InputEditModal = React.FunctionComponent<Props>;
declare const InputEditModal: ({ isOpen, type, title, onSubmit, onDismiss, localeDirection, submitLabel, dismissLabel, children, submitDisabled, }: Props) => JSX.Element;
export default InputEditModal;

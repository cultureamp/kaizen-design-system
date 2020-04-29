/// <reference types="react" />
import { AsyncProps as ReactAsyncSelectProps } from "react-select/src/Async";
import { Props as ReactSelectProps } from "react-select/src/Select";
export declare const Select: (props: ReactSelectProps<{
    label: string;
    value: string;
}>) => JSX.Element;
interface AsyncProps extends ReactAsyncSelectProps<any>, ReactSelectProps {
}
export declare const AsyncSelect: (props: AsyncProps) => JSX.Element;
export {};

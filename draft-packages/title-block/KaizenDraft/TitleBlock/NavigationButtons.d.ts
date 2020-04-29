/// <reference types="react" />
export declare type NavigationButton = {
    buttonText: string;
    path: string;
    active: boolean;
};
declare type Props = {
    navigationButtons: NavigationButton[];
    reversed: boolean;
};
declare const NavigationButtons: {
    (props: Props): JSX.Element;
    defaultProps: {
        reversed: boolean;
    };
    displayName: string;
};
export default NavigationButtons;

/// <reference types="react" />
declare type BadgeProps = {
    loading: boolean;
    href: string;
    colorScheme: string;
};
export declare const ProductionBadge: {
    (props: BadgeProps): JSX.Element;
    displayName: string;
};
export declare const StagingBadge: {
    (props: BadgeProps): JSX.Element;
    displayName: string;
};
export declare const TestBadge: {
    (props: BadgeProps): JSX.Element;
    displayName: string;
};
export declare const LocalBadge: {
    (props: BadgeProps): JSX.Element;
    displayName: string;
};
export declare const namedBadge: {
    (environment: string): (props: BadgeProps) => JSX.Element;
    displayName: string;
};
export {};

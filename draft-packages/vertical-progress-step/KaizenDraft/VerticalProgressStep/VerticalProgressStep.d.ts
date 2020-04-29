import * as React from "react";
declare type Position = "start" | "middle" | "end";
declare type CompletedStepProps = {
    name: string;
    children?: React.ReactNode;
    position: Position;
};
declare type CurrentStepProps = {
    name: string;
    children?: React.ReactNode;
    status: CurrentStepStatus;
    position: Position;
    onClick?: () => void;
};
declare type CurrentStepStatus = "inactionable" | "actionable" | "started";
declare type UpcomingStepProps = {
    name: string;
    children?: React.ReactNode;
    position: Position;
};
declare const _default: {
    CompletedStep: (props: CompletedStepProps) => JSX.Element;
    CurrentStep: (props: CurrentStepProps) => JSX.Element;
    UpcomingStep: (props: UpcomingStepProps) => JSX.Element;
};
export default _default;

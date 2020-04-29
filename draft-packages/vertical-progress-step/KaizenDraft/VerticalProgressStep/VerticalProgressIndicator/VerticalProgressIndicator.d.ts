/// <reference types="react" />
declare type Props = {
    position: Position;
    completion: Completion;
};
declare type Position = "start" | "middle" | "end";
export declare type Completion = "upcoming" | "current-inactionable" | "current-actionable" | "current-started" | "completed";
/**
 * For showing a step in a list of steps.
 * Needs to be inside a position:relative element for absolute positioning to work properly.
 *
 * @param position - The position of this step in a list of steps i.e. is it at the start, middle or end
 * @param completion - Whether the step is completed, upcoming or a shade inbetween, current, or to-do
 */
export declare const VerticalProgressIndicator: ({ position, completion }: Props) => JSX.Element;
export {};

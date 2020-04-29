import React from "react";
import { NavigationChange } from "./types";
declare type LinkClickContextType = {
    handleNavigationChange?: NavigationChange;
};
export declare const LinkClickContext: React.Context<LinkClickContextType>;
export {};

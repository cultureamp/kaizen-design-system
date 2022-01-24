import React from "react";

type Props = {
  isBool?: boolean;
}

const doSomething = (isSomething: boolean): boolean => isSomething;

const Component: React.VFC<Props> = ({ isBool }) => {
  // Argument of type 'boolean | undefined' is not assignable to parameter of type 'boolean'.
  // Type 'undefined' is not assignable to type 'boolean'.
  const v = doSomething(isBool);
  return <div />;
}

const AnotherComponent: React.VFC<Props> = ({ isBool = false }) => {
  // No error
  const v = doSomething(isBool);
  return <div />;
}

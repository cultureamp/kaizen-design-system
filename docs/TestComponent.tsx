import React from 'react';

type Props = {
  isBool?: boolean;
}

const doSomething = (isSomething: boolean): boolean => isSomething;

const Component: React.VFC<Props> = ({ isBool }) => {
  const v = doSomething(isBool);
  return <div />;
}

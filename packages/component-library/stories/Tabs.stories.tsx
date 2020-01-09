import classnames from 'classnames';
import * as React from 'react';

import { Text } from '@cultureamp/kaizen-component-library';
import { Tabs } from '@cultureamp/kaizen-component-library/draft';

export default {
  title: 'Tabs',
};

export const defaultStory = () => {
  const tabs = [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }, { label: 'Four' }];
  return <Tabs tabs={tabs} />;
};

defaultStory.story = {
  name: 'Default',
};

export const activeTab = () => {
  const tabs = [
    { label: 'One', active: true },
    { label: 'Two' },
    { label: 'Three' },
    { label: 'Four' },
  ];
  return <Tabs tabs={tabs} />;
};

activeTab.story = {
  name: 'Active tab',
};

export const disabledTab = () => {
  const tabs = [
    { label: 'One', disabled: true },
    { label: 'Two' },
    { label: 'Three' },
    { label: 'Four' },
  ];
  return <Tabs tabs={tabs} />;
};

disabledTab.story = {
  name: 'Disabled tab',
};

export const withOnClick = () => {
  const tabs = [
    { label: 'One (click this)', onClick: () => alert('clicked!') },
    { label: 'Two' },
    { label: 'Three' },
    { label: 'Four' },
  ];
  return <Tabs tabs={tabs} />;
};

withOnClick.story = {
  name: 'With onClick',
};

export const withHref = () => {
  const tabs = [
    { label: 'One (href here)', href: '//www.example.com' },
    { label: 'Two' },
    { label: 'Three' },
    { label: 'Four' },
  ];
  return <Tabs tabs={tabs} />;
};

withHref.story = {
  name: 'With href',
};

export const withCustomTabRenderer = () => {
  const tabs = [
    { label: 'One', active: true },
    { label: 'Two', disabled: true },
    { label: 'Three' },
    { label: 'Four' },
  ];
  return (
    <div>
      <Text tag="h1">Custom tab renderer</Text>
      <Text tag="p">
        This would most commonly be used when you need to render, for example, a react-router{' '}
        <code>&lt;Link /&gt;</code> instead of the default anchor tag (<code>&lt;a /&gt;</code>) or
        a custom attribute for your elements.
      </Text>
      <Text tag="p">
        This storybook example renders anchor tags, but you can simply replace it with the correct
        element for your use case.
      </Text>
      <div>
        <Tabs
          tabs={tabs}
          renderTab={({ tab, tabClassName, activeTabClassName, disabledTabClassName }) => {
            return (
              <a
                key={tab.label}
                className={classnames(tabClassName, {
                  [activeTabClassName]: tab.active,
                  [disabledTabClassName]: tab.disabled,
                })}
              >
                {tab.label}
              </a>
            );
          }}
        />
      </div>
    </div>
  );
};

withCustomTabRenderer.story = {
  name: 'With custom tab renderer',
};

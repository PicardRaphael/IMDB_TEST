import React from 'react';

import {default as HeaderComponent} from '.';

export default {
  component: HeaderComponent,
  title: 'Component/Header',
};

export const Header = args => <HeaderComponent {...args} />;

Header.args = {
  navigation: {
    title: 'Storybook',
    nav: [
        {
            path: "#",
            key: "test-storybook",
            label: "Test storybook",
        },
        {
            path: "#",
            key: "test",
            label: "Test",
        },
    ]
  },
};
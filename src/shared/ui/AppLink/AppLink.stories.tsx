import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/',
		children: 'Link',
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = { theme: AppLinkTheme.PRIMARY };

export const Secondary = Template.bind({});
Secondary.args = { theme: AppLinkTheme.SECONDARY };

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { theme: AppLinkTheme.PRIMARY };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = { theme: AppLinkTheme.SECONDARY };
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

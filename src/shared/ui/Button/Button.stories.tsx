import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import { Button, ThemeButton } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'Button',
	theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'Button',
	theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: 'Button',
	theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

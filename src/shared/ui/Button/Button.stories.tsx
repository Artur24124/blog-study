import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';

import { Button, ButtonSize, ButtonTheme } from './Button';

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

export const DefaultM = Template.bind({});
DefaultM.args = {
	children: 'Button',
	size: ButtonSize.M,
};

export const DefaultL = Template.bind({});
DefaultL.args = {
	children: 'Button',
	size: ButtonSize.L,
};

export const DefaultXL = Template.bind({});
DefaultXL.args = {
	children: 'Button',
	size: ButtonSize.XL,
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'Button',
	theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'Button',
	theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: 'Button',
	theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
	children: 'Button',
	theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
	children: 'Button',
	theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL,
};

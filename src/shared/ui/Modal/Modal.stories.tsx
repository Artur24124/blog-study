import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';

import { Modal } from './Modal';

export default {
	title: 'shared/Modal',
	component: Modal,
	args: { isOpen: true },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Modal',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
	children: 'Modal',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

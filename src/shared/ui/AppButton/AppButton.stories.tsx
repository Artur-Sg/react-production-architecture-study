import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppButton from './AppButton';
import { ThemeDecorator } from '../../../../config/storybook/decorators';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
  title: 'shared/AppButton',
  component: AppButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: 'Button',
};

export const ButtonDark = Template.bind({});
ButtonDark.args = {
  children: 'Button',
};
ButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

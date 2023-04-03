import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import AppButton from './AppButton';
import { ThemeDecorator } from '../../../../config/storybook/decorators';

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

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  children: 'Button',
  disabled: true,
};

export const ButtonDark = Template.bind({});
ButtonDark.args = {
  children: 'Button',
};
ButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

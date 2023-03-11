import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@config/storybook/decorators';
import { Theme } from '@app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Form = Template.bind({});
Form.args = {};

export const FormDark = Template.bind({});
FormDark.args = {};
FormDark.decorators = [ThemeDecorator(Theme.DARK)];

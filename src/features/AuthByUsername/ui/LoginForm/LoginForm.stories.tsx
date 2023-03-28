import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@config/storybook/decorators';
import { Theme } from '@app/providers/ThemeProvider';
import { StoreDecorator } from '@config/storybook/decorators/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: { username: '123', password: '123' },
  }),
];

export const FormDark = Template.bind({});
FormDark.args = {};
FormDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: '123', password: '123' },
  }),
];

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@config/storybook/decorators';
import { Theme } from '@app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Form = Template.bind({});
Form.args = {};
Form.decorators = [ThemeDecorator(Theme.DEFAULT)];

export const FormDark = Template.bind({});
FormDark.args = {};
FormDark.decorators = [ThemeDecorator(Theme.DARK)];

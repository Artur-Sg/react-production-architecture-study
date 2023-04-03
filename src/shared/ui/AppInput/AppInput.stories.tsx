import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import { AppInput } from './AppInput';
import { ThemeDecorator } from '../../../../config/storybook/decorators';

export default {
  title: 'shared/AppInput',
  component: AppInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppInput>;

const Template: ComponentStory<typeof AppInput> = (args) => <AppInput {...args} />;

export const Input = Template.bind({});
Input.args = {
  label: 'Label',
  placeholder: 'Placeholder',
};

export const InputDark = Template.bind({});
InputDark.args = {
  label: 'Label',
  placeholder: 'Placeholder',
};
InputDark.decorators = [ThemeDecorator(Theme.DARK)];

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import AppSelect from './AppSelect';
import { ThemeDecorator } from '../../../../config/storybook/decorators';

export default {
  title: 'shared/AppSelect',
  component: AppSelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppSelect>;

const Template: ComponentStory<typeof AppSelect> = (args) => <AppSelect {...args} />;

export const Prime = Template.bind({});
Prime.args = {
  label: 'Some label text',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Some label text',
  options: [
    { value: '1', content: 'First point' },
    { value: '2', content: 'Second point' },
    { value: '3', content: 'Third point' },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

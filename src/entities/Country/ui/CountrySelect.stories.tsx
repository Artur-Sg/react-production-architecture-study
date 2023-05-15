import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import { CountrySelect } from './CountrySelect';
import { ThemeDecorator } from '../../../../config/storybook/decorators';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Prime = Template.bind({});
Prime.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

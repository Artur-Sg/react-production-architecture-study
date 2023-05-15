import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';
import { CurrencySelect } from './CurrencySelect';
import { ThemeDecorator } from '../../../../config/storybook/decorators';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Prime = Template.bind({});
Prime.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

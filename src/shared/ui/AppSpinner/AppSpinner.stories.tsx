import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '../../../../config/storybook/decorators';
import { Theme } from '../../../app/providers/ThemeProvider';
import AppSpinner from './AppSpinner';

export default {
  title: 'shared/AppSpinner',
  component: AppSpinner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppSpinner>;

const Template: ComponentStory<typeof AppSpinner> = () => <AppSpinner />;

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

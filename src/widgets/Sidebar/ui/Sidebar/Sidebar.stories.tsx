import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from './Sidebar';
import { ThemeDecorator } from '../../../../../config/storybook/decorators';
import { Theme } from '../../../../app/providers/ThemeProvider';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
